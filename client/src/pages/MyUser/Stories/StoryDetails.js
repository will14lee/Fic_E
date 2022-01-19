import React, {useState, useEffect} from 'react'
import { useHistory, useParams } from 'react-router-dom'


function StoryDetails() {
    const [stories, setStories]= useState("")
    const [users, setUsers]= useState("")
    const [chapters, setChapters]= useState("")
    const [longerPremise, setLongerPremise]= useState("")
    const [longerSummary, setLongerSummary]= useState("")
    const history= useHistory()
    const params= useParams()

    useEffect(()=>{
        fetch(`/stories/${params.story_id}`)
        .then(resp=> resp.json())
        .then(setStories)
        
        fetch(`/stories/${params.story_id}/chapters`)
        .then(resp=> resp.json())
        .then(setChapters)

        fetch("/me")
        .then((r) => {
            if (r.ok) {
              r.json().then((user) => setUsers(user));
            }
            else {
                history.push('/login')
            }
          })
    }, [])

    
    function handleDelete(){
        fetch(`/stories/${params.story_id}`, {
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
            <h2>{story.title}</h2>
            <h4>Genre: {story.genre}</h4>
            <h4>Page Length: { story.page_length}</h4>
            <h4>Status: {story.status}</h4>
            <h4>Premise:</h4>
            {story.premise ? (
                <>
                {longerPremise==story.id ? (<p>{story.premise}<br/><a onClick={()=>setLongerPremise("")}>Less...</a></p>):(
                    <>
                    {story.premise.length > 25 ? (
                        <p>{story.premise.slice(0,25) + "..."} <br/><a onClick={()=>setLongerPremise(story.id)}>More...</a></p>
                        ):(<p>{story.premise}</p>)} 
                    </>
                )}
                </>
            ):(<br/>)}
            <p>
                <button onClick={()=>history.push(`/stories/${params.story_id}/edit`)}>Edit  </button>
                <button onClick={()=>history.push(`/stories/${params.story_id}/chapters/new`)}>Write a Chapter</button>
                <button onClick={()=>handleDelete()}>Delete</button><br/>
                <button onClick={()=>history.push(`/`)}>Return  </button>
            </p>
        </div>
        )
    }


    function chapterForm(chapter){
        return(
            <div key={chapter.id}>
                <h3>Title: {chapter.title}</h3>
                <h3>Summary:</h3>
                {chapter.summary ? (
                <>{longerSummary==chapter.id ? (<p>{chapter.summary}<br/><a onClick={()=>setLongerSummary("")}>Less...</a></p>):(
                    <>
                    {chapter.summary.length > 25 ? (
                        <p>{chapter.summary.slice(0,25) + "..."} <br/><a onClick={()=>setLongerSummary(chapter.id)}>More...</a></p>
                        ):(<p>{chapter.summary}</p>)} 
                    </>
                )}</>):(<br/>)}
                {/* {stories.listed_story.author.username==chapter.author.username ? (<></>):(<>
                <p>{chapter.author.username==users.username ? (<>Chapter Author: Me!</>) : (<>Chapter Author: {chapter.author.username}</>)}</p>
                </>)} */}
                <h3>Characters: {chapter.characters}</h3>
                <button onClick={()=>history.push(`/stories/${params.story_id}/chapters/${chapter.id}`)}>Chapter Details</button>
                <hr/>
            </div>
        )

    }
    console.log(chapters)
    return (
        <div>
            {
                stories ? (  
                    <>
                    {storyForm(stories)}
                    <h2>Chapters</h2>
                    <hr/>
                    {chapters.length > 0 ? (chapters.map((chapter)=>
                    chapterForm(chapter))):(<p>No Chapters!</p>)}
                    </>
                    ) : (
                    <div>
                        <p>Nothing here!</p>
                    </div>)
                    }
        </div>
        )
            }

export default StoryDetails