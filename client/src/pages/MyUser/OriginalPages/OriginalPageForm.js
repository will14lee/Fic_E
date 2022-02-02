import React, {useState, useEffect} from 'react'
import { useParams, useHistory} from 'react-router-dom'
const OriginalPageForm = () => {
    const [text, setText]= useState("")
    const [notes, setNotes]=useState("")
    const [user, setUser]=useState("")
    const params= useParams()
    const history= useHistory()

    useEffect(() => {
        fetch("/me").then((r)=> {
            if (r.ok) {
                r.json().then((user)=> setUser(user))
            }
            else{
                history.push('/login')
            }
        })}, [])
    function nextPage(){
        fetch(`/other_stories/${params.story_id}/users/${params.user_id}/original_chapters/${params.chapter_id}/my_users/${params.my_user_id}/pages`, 
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                text,
                notes,
            }),
        }).then((r)=> {
            if (r.ok){
                console.log(r)
                setText("")
                setNotes("")
            }
            else {
                r.json().then((err)=>console.log(err.errors))
            }
        })
    }

    function handleSubmit(){
        nextPage()
        history.push(`/other_stories/${params.story_id}/users/${params.user_id}/original_chapters/${params.chapter_id}/my_users/${params.my_user_id}`)
    }
    return (
        <div>
            <h3>Let's Write!</h3>
            <textarea value={text} rows="40" cols="100" onChange={(e)=>setText(e.target.value)}></textarea>
            <p>Notes</p>
            <textarea value={notes}rows="20" cols="100" onChange={(e)=>setNotes(e.target.value)}></textarea><br/>
            <button onClick={()=>handleSubmit()}>Submit</button><br/>
            <button onClick={()=>nextPage()}>Write Next Page</button><br/>
            <button onClick={()=>history.push(`/other_stories/${params.story_id}/users/${params.user_id}/original_chapters/${params.chapter_id}/my_users/${params.my_user_id}`)}>Return</button>
        </div>
    )
}

export default OriginalPageForm