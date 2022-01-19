import React, {useState, useEffect} from 'react'
import { useHistory, Link } from 'react-router-dom'

const OtherStories = () => {
    const [stories, setStories]= useState("")
    const [user, setUser]= useState(false)
    const [longerPremise, setLongerPremise]= useState("")
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
        handleSubmit(story)
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
            {story.premise ? (
                <>
                {longerPremise==story.id ? (<p>{story.premise}<br/><a onClick={()=>setLongerPremise("")}>Less...</a></p>):(
                    <>
                    {story.premise.length > 25 ? (
                        <p>{story.premise.slice(0,25) + "..."} <br/><a onClick={()=>setLongerPremise(story.id)}>More...</a></p>
                        ):(<p>{story.premise}</p>)} 
                    </>
                )}
                </>
            ):(<br/>)}
            <button onClick={(e)=>addToReadingList(story)}>Add to Reading List</button>
            <hr/>
      </h3>
        )
    }

    // console.log(stories.filter(story=>story.author.username=== "Craig"))
    // console.log(stories.filter(story=> story))
    return (
        <div>
            <h2>User Stories</h2>
            <button onClick={()=>history.push("/")}>Return</button>
            {/* <p>
                <label>Author Name</label><input/><button>Search</button>
                <br/>
                <label>Story Name</label><input/><button>Search</button>
            </p> */}
            {stories.length > 0 ? 
            (stories
                .filter(story=>story.author.id!== user.id)
                .map((story)=>
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
