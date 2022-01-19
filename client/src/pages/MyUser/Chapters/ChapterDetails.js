import React, {useState, useEffect} from 'react'
import { useHistory, useParams, Link } from 'react-router-dom'


const ChapterDetails = () => {
    const history=useHistory()
    const params=useParams()
    const [pages, setPages]=useState("")
    const [chapters, setChapters]=useState("")
    const [users, setUsers]= useState("")

    useEffect(()=>{
        fetch(`/stories/${params.story_id}/chapters/${params.id}/pages`)
        .then(resp=> resp.json())
        .then(setPages)
        
        fetch(`/stories/${params.story_id}/chapters/${params.id}`)
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
        fetch(`/stories/${params.story_id}/chapters/${params.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        }).then((r)=> {
            if (r.ok){
                history.push(`/stories/${params.story_id}`)
            }else {
                r.json().then((err)=>console.log(err.errors))
            }
        })
    }

    function chapterForm(chapter){
        return(
            <div key={chapter.id}>
                <p>Title: {chapter.title}</p>
                <p>Summary: {chapter.summary}</p>
                <p>Characters: {chapter.characters}</p>
                <button onClick={()=>history.push(`/stories/${params.story_id}/chapters/${chapter.id}/edit`)}>Edit Chapter</button><br/>
                <button onClick={()=>handleDelete()}>Delete Chapter</button><br/>
                <button onClick={()=>history.push(`/stories/${params.story_id}/chapters/${chapter.id}/pages/new`)}>Write a Page</button><br/>
                <button onClick={()=>history.push(`/stories/${params.story_id}`)}>Return  </button>
                <hr/>
            </div>
        )
    }
    function pageForm(page){
        return(
            <div key={page.id}>
                <p>Page Number: {pages.length}</p>
                <h3>Text:</h3> 
                <p>{page.text}</p>
                <h3>Notes:</h3> 
                <p>{page.notes}</p>
                <button onClick={()=>history.push(`/stories/${params.story_id}/chapters/${params.id}/pages/${page.id}`)}>Page Details</button>
                <hr/>
            </div>
        )
    }
    return (
        <div>
            <h2>Chapter Details</h2>
            {chapterForm(chapters)}
            <h2>Pages</h2>
            <hr/>
            {pages.length > 0 ? 
            (pages.map((page)=>
            pageForm(page)
            )):(
                <h3>
                    It appears you didn't write any pages yet. Write some <Link to ={`/stories/${params.story_id}/chapters/${params.chapter_id}/pages/${pages.id}`}>here.</Link> 
                </h3>
            )}
        </div>
    )
}

export default ChapterDetails
