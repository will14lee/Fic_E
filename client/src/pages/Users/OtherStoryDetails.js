import React, {useState, useEffect} from 'react'
import { useHistory, useParams } from 'react-router-dom'


function OtherStoryDetails() {
    const [stories, setStories]= useState("")
    const [users, setUsers]= useState("")
    const [chapters, setChapters]= useState("")
    const history= useHistory()
    const params= useParams()

    useEffect(()=>{
        fetch(`/other_stories/${params.story_id}`)
        .then(resp=> resp.json())
        .then(setStories)
        
        fetch(`/other_stories/${params.story_id}/users/${params.user_id}/other_chapters`)
        .then(resp=> resp.json())
        .then(setChapters)

        fetch("/me").then((r)=> {
            if (r.ok) {
                r.json().then((user)=> setUsers(user))
            }
            else{
                history.push('/login')
            }
          })
    }, [])

    
    function handleDelete(){
        fetch(`/story_listings/${params.story_id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        }).then((r)=> {
            if (r.ok){
                history.push(`/`)
            }else {
                r.json().then((err)=>console.log(err.errors))
            }
        })
    }


    function storyForm(story){
        return(
        <div>
            <h2>{story.listed_story.title}</h2>
            <h4>Genre: {story.listed_story.genre}</h4>
            <h4>Author: {story.listed_story.author.username}</h4>
            <h4>Page Length: { story.listed_story.page_length}</h4>
            <h4>Status: {story.listed_story.status}</h4>
            <h4>Premise:</h4>
            <p>{story.listed_story.premise}</p>
            <p>
                <button onClick={()=>history.push(`/other_stories/${params.story_id}/users/${params.user_id}/original_chapters/new`)}>Write Your Own Chapter</button><br/>
                <button onClick={()=>handleDelete()}>Remove From Reading List</button><br/>
                <button onClick={()=>history.push(`/`)}>Return  </button>
            </p>
        </div>
        )
    }


    function chapterForm(chapter){
        return(
            <div key={chapter.id}>
                <p>Title: {chapter.title}</p>
                {stories.listed_story.author.username==chapter.author.username ? (<></>):(<>
                <p>{chapter.author.username==users.username ? (<>Chapter Author: Me!</>) : (<>Chapter Author: {chapter.author.username}</>)}</p>
                </>)}
                <p>Summary: {chapter.summary}</p>
                <p>Characters: {chapter.characters}</p>
                <button onClick={()=>history.push(`/other_stories/${params.story_id}/users/${params.user_id}/chapters/${chapter.id}`)}>Chapter Details</button>
                <hr/>
            </div>
        )

    }

    return (
        <div>
            {
                stories ? (  
                    <>
                    {storyForm(stories)}
                    <h2>Chapters</h2>
                    {chapters ? (chapters.map((chapter)=>
                    chapterForm(chapter))):(<></>)}
                    </>
                    ) : (
                    <div>
                        <p>Nothing here!</p>
                    </div>)
                    }
        </div>
        )
            }

export default OtherStoryDetails