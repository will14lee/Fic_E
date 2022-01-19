import React, {useState, useEffect} from 'react'
import { useHistory, useParams } from 'react-router-dom'


const EditChapter = () => {
    const history=useHistory()
    const [users, setUsers]= useState("")
    const [chapters, setChapters]= useState("")
    const params=useParams("")
    const [newTitle, setNewTitle]= useState("")
    const [newSummary, setNewSummary]= useState("")
    const [newCharacters, setNewCharacters]= useState("")
    
    useEffect(() => {
        fetch("/me").then((r)=> {
            if (r.ok) {
                r.json().then((user)=> setUsers(user))
            }
            else{
                history.push('/login')
            }

        fetch(`/stories/${params.story_id}/chapters/${params.id}`)
        .then(resp=> resp.json())
        .then(setChapters)
        
        })}, [])
    function handleSubmit(){
        fetch(`/stories/${params.story_id}/chapters/${params.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: newTitle,
                summary: newSummary,
                characters: newCharacters,
            }),
        }).then((r)=> {
            if (r.ok){
                history.push(`/${params.story_id}/chapters/${params.id}/`)
                console.log(r)
            }
            else {
                r.json().then((err)=>console.log(err.errors))
            }
        })
    }
    return (
        <div>
            <h3>Edit Chapter</h3>
            <p><label>Title</label><input value={newTitle} onChange={(e)=> setNewTitle(e.target.value)} placeholder={chapters.title}/></p>
            <p><label>Summary</label></p>
            <p><textarea  value={newSummary} onChange={(e)=>setNewSummary(e.target.value)} rows="5" cols="40" placeholder={chapters.summary}/></p>
            <p><label>Characters</label></p>
            <p><textarea value={newCharacters} rows="5" cols="40" onChange={(e)=> setNewCharacters(e.target.value)} placeholder={chapters.characters}/></p>
            <p><button type='submit' onClick={()=>handleSubmit()}>Edit</button><br/>
            <button onClick={()=>history.push(`/stories/${params.story_id}/chapters/${params.id}`)}>Return</button></p>
        </div>
    )
}

export default EditChapter
