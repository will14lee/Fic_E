import React, {useState, useEffect} from 'react'
import { useHistory, useParams } from 'react-router-dom'


const ChapterDetails = () => {
    const history=useHistory()
    const params=useParams()
    const [stories, setStories]=useState("")
    const [chapters, setChapters]=useState("")
    const [users, setUsers]= useState("")
    useEffect(()=>{
        fetch(`/stories/${params.id}`)
        .then(resp=> resp.json())
        .then(setStories)
        
        fetch(`/stories/${params.id}/chapters`)
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

    function chapterForm(chapter){
        return(
            <div key={chapter.id}>
                <p>Title: {chapter.title}</p>
                <p>Summary: {chapter.summary}</p>
                <p>Characters: {chapter.characters}</p>
                <button onClick={()=>history.push(`chapters/${chapter.id}/`)}>Chapter Details</button>
                <hr/>
            </div>
        )
    }
    return (
        <div>
            <h3>Chapter Details</h3>
        </div>
    )
}

export default ChapterDetails
