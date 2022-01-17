import React, {useState, useEffect} from 'react'
import { useHistory, useParams, Link } from 'react-router-dom'

const PageDetails = () => {
    const params=useParams()
    const history=useHistory()
    function handleDelete(){
        console.log("Delete")
        fetch(`/stories/${params.story_id}/chapters/${params.chapter_id}/pages`, {
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
    return (
        <div>
            <h3>Page Details</h3>
        </div>
    )
}

export default PageDetails
