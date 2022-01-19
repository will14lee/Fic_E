import React, {useState, useEffect} from 'react'
import { useHistory, Link } from 'react-router-dom'

const OtherStories = () => {
    const [stories, setStories]= useState("")
    const [user, setUser]= useState(false)
    const history=useHistory()

    function handleSubmit(story){
        fetch("/story_listings", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                listed_story_id: story.id,
                story_list_id: user.id
            }),
        }).then((r)=> {
            if (r.ok){
                console.log(r)
                history.push("/")
            }
            else {
                r.json().then((err)=>console.log(err.errors))
            }
        })
    }

    useEffect(() => {
        fetch("/me").then((r)=> {
            if (r.ok) {
                r.json().then((user)=> setUser(user))
            }
            else{
                history.push('/login')
            }

        fetch("/all_stories")
        .then(resp=> resp.json())
        .then(setStories)
        
        })}, [])


    function addToReadingList(story){
        console.log(story.id)
        handleSubmit(story)
        // return(
        // )
    }

    function storyForm(story){
        return(
        <h3 key={story.id}>
            <label style={{color:"#2196f3"}}>Title:</label> {story.title}<br/>
            <label style={{color:"#2196f3"}}>Author: </label>{story.author.username}<br/>
            <label style={{color:"#1e88e5"}}>Genre:</label> {story.genre}<br/>
            <label style={{color:"#1976d2"}}>Page Length:</label> {story.page_length}<br/>
            <label style={{color:"#1565c0"}}>Status:</label> {story.status}<br/>
            <label style={{color:"#0d47a1"}}>Premise:</label><br/>
            {story.premise}<br/>
            <button onClick={(e)=>addToReadingList(story)}>Add to Reading List</button>

      </h3>
        )
    }
    return (
        <div>
            <h3>User Stories</h3>
            <p>
                <label>Author Name</label><input/><button>Search</button>
                <br/>
                <label>Story Name</label><input/><button>Search</button>
            </p>
            {stories.length > 0 ? 
            (stories.map((story)=>
             storyForm(story)
            )):
            (<div>
                <h3>Wow! Would you look at that! It's completely empty! 
                    <br/>
                    You can fix this by clicking <Link to="/new">here</Link> to be number #1 and create a story! 
                    <br/>
                </h3>
                </div>
            )}
         
        </div>
    )
}

export default OtherStories
