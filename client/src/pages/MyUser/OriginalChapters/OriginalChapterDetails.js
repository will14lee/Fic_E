import React, {useState, useEffect} from 'react'
import { useHistory, useParams } from 'react-router-dom'


function OriginalChapterDetails() {
    const [users, setUsers]= useState("")
    const [otherPages, setOtherPages]= useState("")
    const [otherChapters, setOtherChapters]= useState("")
    const [longerText, setLongerText]=useState("")
    const [longerNotes, setLongerNotes]=useState("")
    const [longerSummary, setLongerSummary]=useState("")
    const history= useHistory()
    const params= useParams()

    useEffect(()=>{              
      fetch("/me").then((r)=> {
        if (r.ok) {
          r.json().then((user)=> setUsers(user))
        }
        else{
          history.push('/login')
        }
      })
      fetch(`/other_stories/${params.story_id}/users/${params.user_id}/other_chapters/${params.chapter_id}/my_users/${params.my_user_id}`)
      .then(resp=> resp.json())
      .then(setOtherChapters)
      
      fetch(`/other_stories/${params.story_id}/users/${params.user_id}/other_chapters/${params.chapter_id}/my_users/${params.my_user_id}/pages`)
      .then(resp=> resp.json())
      .then(setOtherPages)
    }, [])
    
    console.log(users)
    
    function handleDelete(){
        fetch(`/story_listings/${params.story_id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        }).then((r)=> {
            if (r.ok){
                history.push(`/`)
            }else {
                r.json().then((err)=>console.log(err.errors))
            }
        })
    }


    function chapterForm(chapter){
        return(
            <div key={chapter.id}>
                <h2>{chapter.title}</h2>
                {otherChapters ? (
                    <>{params.user_id==otherChapters.author.user_id ? (<></>):(<>
                    <p>
                        {otherChapters.author.username==users.username ? (<>Chapter Author: Me!</>) : 
                        (<>Chapter Author: {otherChapters.author.username}</>)}
                    </p>
                    </>)}
                    </>
                ):(<></>)}
                
                <p>Summary: 
                {chapter.summary ? (
                    <>{longerSummary==chapter.id ? (<>{chapter.summary}<br/><a onClick={()=>setLongerSummary("")}>Less...</a></>):(
                        <>
                        {chapter.summary.length > 25 ? (
                            <>{chapter.summary.slice(0,25) + "..."} <br/><a onClick={()=>setLongerSummary(chapter.id)}>More...</a></>
                            ):(<>{chapter.summary}</>)} 
                        </>
                    )}</>):(<br/>)}
                    </p>
                <p>Characters: {chapter.characters}</p>
                <hr/>
            </div>
        )
    }

    function pageForm(page){
        return(
            <div key={page.id}>
                {/* <p>Page Number: {pages.length}</p> */}
                <h3>Text:</h3>
                {longerText==page.id ? (<>{page.text}<br/><a onClick={()=>setLongerText("")}>Less...</a></>):(
                    <>
                    {page.text.length > 25 ? (
                        <p>{page.text.slice(0,25) + "..."} <br/><a onClick={()=>setLongerText(page.id)}>More...</a></p>
                    ):(<p>{page.text}</p>)} 
                    </>
                )}
                <h3>Notes:</h3> 
                {longerNotes==page.id ? (<p>{page.notes}<br/><a onClick={()=>setLongerNotes("")}>Less...</a></p>):(
                    <>
                    {page.notes ? (
                        <>
                        {page.notes.length > 25 ? (
                            <p>{page.notes.slice(0,25) + "..."} <br/><a onClick={()=>setLongerNotes(page.id)}>More...</a></p>
                            ):(<p>{page.notes}</p>)} 
                          </>  
                            ):
                            (<></>)}
                    </>
                )}
                <button onClick={()=>history.push(`/other_stories/${params.story_id}/users/${params.user_id}/chapters/${params.chapter_id}/pages/${page.id}`)}>Page Details</button>
                <hr/>
            </div>
        )
    }
    function noPages(){
        return(
            <>
            It appears there aren't any pages!
            </>
        )
    }
    return (
        <div>
            {/* {chapterForm(otherChapters)}
            <h2>Pages</h2>
            <hr/>
            {otherPages ? (<>
            {otherPages.length > 0 ? 
            (otherPages.map((otherPage)=>
            pageForm(otherPage)
            )):(
                <>
                It appears there isn't any pages!
                </>
                )}
            </>):(<>It appears there isn't any pages!</>)} */}

        </div>
        )
            }

export default OriginalChapterDetails