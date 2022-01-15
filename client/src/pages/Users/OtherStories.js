import React, {useState, useEffect} from 'react'
import { useHistory, Link } from 'react-router-dom'

const OtherStories = () => {
    const [stories, setStories]= useState("")
    const [user, setUser]= useState(false)
    const history=useHistory()
    useEffect(() => {
        fetch("/me").then((r)=> {
            if (r.ok) {
                r.json().then((user)=> setUser(user))
            }
            else{
                history.push('/login/')
            }

        fetch("/all_stories")
        .then(resp=> resp.json())
        .then(setStories)
        
        })}, [])

    function storyForm(story){
        return(
        <h3 key={story.id}>
            <label style={{color:"#2196f3"}}>Title:</label> {story.title}<br/>
            <label style={{color:"#2196f3"}}>Author: </label>{story.author.username}<br/>
            <label style={{color:"#1e88e5"}}>Genre:</label> {story.genre}<br/>
            <label style={{color:"#1976d2"}}>Page Length:</label> {story.pageLength}<br/>
            <label style={{color:"#1565c0"}}>Status:</label> {story.status}<br/>
            <label style={{color:"#0d47a1"}}>Premise:</label><br/>
            {story.premise}
            <br/>
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
                <h3>It appears you don't have any stories added to your reading list! 
                    <br/>
                    You can fix that by clicking <Link to="/stories/">here</Link> to browse through our collection 
                    <br/>
                    of stories by other authors and adding them to this list!
                    <br/>
                </h3>
                </div>
            )}
         
        </div>
    )
}

export default OtherStories
