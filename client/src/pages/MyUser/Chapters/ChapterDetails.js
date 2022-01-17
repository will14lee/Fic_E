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

    function chapterForm(chapter){
        return(
            <div key={chapter.id}>
                <p>Title: {chapter.title}</p>
                <p>Summary: {chapter.summary}</p>
                <p>Characters: {chapter.characters}</p>
                <button onClick={()=>history.push(`pages/new`)}>Write a Page</button>
                <hr/>
            </div>
        )
    }
    function pageForm(page){
        const pageNumber=0
        return(
            <div key={page.id}>
                {pageNumber++}
                <p>Page Number: {pageNumber}</p>
                <p>Text: {page.text}</p>
                <p>Notes: {page.notes}</p>
                <button onClick={()=>history.push(`pages/new`)}>Page Details</button>
                <button onClick={()=>history.push(`pages/new`)}>Edit Page</button>
                <button onClick={()=>history.push(`pages/new`)}>Delete Page</button>
                <hr/>
            </div>
        )
    }
    console.log(pages)
    return (
        <div>
            <h2>Chapter Details</h2>
            {chapterForm(chapters)}
            <h2>Pages</h2>
            {pages.length > 0 ? 
            (pages.map((page)=>
            pageForm(page)
            )):(
                <h3>
                    It appears you didn't write any pages yet. Write some <Link to ="/new/">here.</Link> 
                </h3>
            )}
        </div>
    )
}

export default ChapterDetails
