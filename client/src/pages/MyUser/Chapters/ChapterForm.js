import React, {useState} from 'react'
import { useHistory, useParams } from 'react-router-dom'

const ChapterForm = () => {
    const history=useHistory()
    const [title, setTitle]= useState("")
    const [summary, setSummary]= useState("")
    const [characters, setCharacters]= useState("")
    const params=useParams()
    function handleSubmit(){
        fetch(`/stories/${params.id}/chapters`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title,
                summary,
                characters,
            }),
        }).then((r)=> {
            if (r.ok){
                history.push(`/${params.id}`)
                console.log(r)
            }
            else {
                r.json().then((err)=>console.log(err.errors))
            }
        })
    }
    return (
        <div>
            <h3>New Chapter</h3>
            <p><label>Title</label><input value={title} onChange={(e)=> setTitle(e.target.value)} placeholder='Chapter 1: He Ate What?!'/></p>
            <p><label>Summary</label></p>
            <p><textarea  value={summary} onChange={(e)=>setSummary(e.target.value)} rows="5" cols="40" placeholder='If he really wanted peace he really should not have eaten that Taco Bell..'/></p>
            <p><label>Characters</label></p>
            <p><textarea value={characters} rows="5" cols="40" onChange={(e)=> setCharacters(e.target.value)} placeholder='Romeo, Juliet, San Juan the Goat Slayer'/></p>
            <p><button type='submit' onClick={()=>handleSubmit()}>Create</button></p>
        </div>
    )
}

export default ChapterForm

