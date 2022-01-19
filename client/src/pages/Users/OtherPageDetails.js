import React, {useState, useEffect} from 'react'
import { useHistory, useParams } from 'react-router-dom'
const OtherPageDetails = () => {
    const [otherPages, setOtherPages]= useState("")
    const [users, setUsers]= useState("")
    const [otherChapters, setOtherChapters]= useState("")
    const history= useHistory()
    const params= useParams()

    useEffect(()=>{              
        fetch(`/other_stories/${params.story_id}/users/${params.user_id}/other_chapters/${params.chapter_id}`)
        .then(resp=> resp.json())
        .then(setOtherChapters)

        fetch(`/other_stories/${params.story_id}/users/${params.user_id}/other_chapters/${params.chapter_id}/pages/${params.id}`)
        .then(resp=> resp.json())
        .then(setOtherPages)

        fetch("/me").then((r)=> {
            if (r.ok) {
                r.json().then((user)=> setUsers(user))
            }
            else{
                history.push('/login')
            }
          })
    }, [])
    console.log(otherPages)
    return (
        <div key={otherPages.id}>
            <h2>{otherChapters.title}</h2><hr/>
            <p>{otherPages.text}</p><hr/>
            <h4>Notes:</h4> 
            <p>{otherPages.notes}</p>
            <button onClick={()=>history.push(`/other_stories/${params.story_id}/users/${params.user_id}/chapters/${params.chapter_id}`)}>Return</button>
            <hr/>
        </div>    )
}

export default OtherPageDetails
