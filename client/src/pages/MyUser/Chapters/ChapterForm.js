import React, {useEffect, useState} from 'react'
import { useHistory, useParams } from 'react-router-dom'

const ChapterForm = () => {
    const history=useHistory()
    const [users, setUsers]= useState("")
    const [title, setTitle]= useState("")
    const [summary, setSummary]= useState("")
    const [characters, setCharacters]= useState("")
    const [stories, setStories]= useState("")
    const params=useParams("")

    useEffect(()=>{
        fetch(`/stories/${params.story_id}`)
        .then(resp=> resp.json())
        .then(setStories)
        
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

    function handleSubmit(){
        fetch(`/stories/${params.story_id}/chapters`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title,
                summary,
                characters,
                author_id: users.id,
            }),
        }).then((r)=> {
            if (r.ok){
                history.push(`/stories/${params.story_id}`)
                console.log(r)
            }
            else {
                r.json().then((err)=>console.log(err.errors))
            }
        })
    }
    return (
        <div>
            <h3>{stories.title}'s New Chapter</h3>
            <p><label>Title</label><input value={title} onChange={(e)=> setTitle(e.target.value)} placeholder='Chapter 1: He Ate What?!'/></p>
            <p><label>Summary</label></p>
            <p><textarea  value={summary} onChange={(e)=>setSummary(e.target.value)} rows="5" cols="40" placeholder='If he really wanted peace he really should not have eaten that Taco Bell..'/></p>
            <p><label>Characters</label></p>
            <p><textarea value={characters} rows="5" cols="40" onChange={(e)=> setCharacters(e.target.value)} placeholder='Romeo, Juliet, San Juan the Goat Slayer'/></p>
            <p><button type='submit' onClick={()=>handleSubmit()}>Create</button><br/>
            <button onClick={()=>history.push(`/stories/${params.story_id}`)}>Return</button>
            </p>
        </div>
    )
}

export default ChapterForm

