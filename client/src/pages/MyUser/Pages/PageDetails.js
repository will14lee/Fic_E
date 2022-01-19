import React, {useState, useEffect} from 'react'
import { useHistory, useParams, Link } from 'react-router-dom'


const PageDetails = () => {
    const history=useHistory()
    const params=useParams()
    const [pages, setPages]=useState("")
    const [chapters, setChapters]=useState("")
    const [users, setUsers]= useState("")

    useEffect(()=>{
        fetch(`/stories/${params.story_id}/chapters/${params.chapter_id}/pages/${params.id}`)
        .then(resp=> resp.json())
        .then(setPages)
        
        fetch(`/stories/${params.story_id}/chapters/${params.chapter_id}`)
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
        fetch(`/stories/${params.story_id}/chapters/${params.chapter_id}/pages/${params.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        }).then((r)=> {
            if (r.ok){
                history.push(`/stories/${params.story_id}/chapters/${params.chapter_id}`)
            }else {
                r.json().then((err)=>console.log(err.errors))
            }
        })
    }
    return (
    <div key={pages.id}>
        <h2>{chapters.title}</h2><hr/>
        <p>{pages.text}</p><hr/>
        <h4>Notes:</h4> 
        <p>{pages.notes}</p>
        <button onClick={()=>history.push(`/stories/${params.story_id}/chapters/${params.chapter_id}/pages/${params.id}/edit`)}>Edit Page</button><br/>
        <button onClick={()=>{handleDelete()}}>Delete Page</button><br/>
        <button onClick={()=>history.push(`/stories/${params.story_id}/chapters/${params.chapter_id}`)}>Return</button>
        <hr/>
    </div>
    )
}

export default PageDetails
