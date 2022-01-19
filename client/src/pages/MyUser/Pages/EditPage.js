import React, {useState, useEffect} from 'react'
import { useHistory, useParams } from 'react-router-dom'


const EditPage = () => {
    const history=useHistory()
    const [users, setUsers]= useState("")
    const [pages, setPages]= useState("")
    const params=useParams("")
    const [newText, setNewText]= useState("")
    const [newNotes, setNewNotes]= useState("")
    
    useEffect(() => {
        fetch("/me").then((r)=> {
            if (r.ok) {
                r.json().then((user)=> setUsers(user))
            }
            else{
                history.push('/login')
            }

        fetch(`/stories/${params.story_id}/chapters/${params.chapter_id}/pages/${params.id}`)
        .then(resp=> resp.json())
        .then(setPages)
        
        })}, [])
    function handleSubmit(){
        fetch(`/stories/${params.story_id}/chapters/${params.chapter_id}/pages/${params.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                text: newText,
                notes: newNotes,
            }),
        }).then((r)=> {
            if (r.ok){
                history.push(`/stories/${params.story_id}/chapters/${params.chapter_id}/pages/${params.id}`)
                console.log(r)
            }
            else {
                r.json().then((err)=>console.log(err.errors))
            }
        })
    }

     

    return (
        <div>
            <h3>Edit Page</h3>
            <p><label>Text</label></p>
            <textarea placeholder={pages.text} value={newText} rows="40" cols="100" onChange={(e)=>setNewText(e.target.value)}></textarea>
            <p><label>Notes</label></p>
            <textarea placeholder={pages.notes} value={newNotes}rows="20" cols="100" onChange={(e)=>setNewNotes(e.target.value)}></textarea><br/>
            <p><button type='submit' onClick={()=>handleSubmit()}>Edit</button><br/>
            <button onClick={()=>history.push(`/stories/${params.story_id}/chapters/${params.chapter_id}/pages/${params.id}`)}>Return</button></p>
        </div>
    )
}

export default EditPage;
