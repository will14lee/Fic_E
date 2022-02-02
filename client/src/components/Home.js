import React, {useState, useEffect} from 'react'
import { Link, useHistory } from 'react-router-dom'

const Home = () => {
    const history= useHistory()
    const [stories, setStories]= useState("")
    const [about, setAbout]= useState(false)
    const [user, setUser]= useState(false)
    const [otherStories, setOtherStories]= useState("")
    const [longerPremise, setLongerPremise]= useState("")
    useEffect(() => {
        fetch("/me").then((r)=> {
            if (r.ok) {
                r.json().then((user)=> setUser(user))
            }
            else{
                history.push('/login')
            }

        fetch("/stories")
        .then(resp=> resp.json())
        .then(setStories)
        
        fetch("/story_listings")
        .then(resp=> resp.json())
        .then(setOtherStories)
        })}, [])

    function storyPremise(story){
        return(
            <div key={"premise" + story.id}>
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
            </div>
        )
    }

    function storyForm(story){
        return(
                <h3 key={"story" + story.id}>
                    <label style={{color:"#2196f3"}}>Title: </label>{story.title}<br/>
                    <label style={{color:"#1e88e5"}}>Genre: </label>{story.genre}<br/>
                    <label style={{color:"#1976d2"}}>Page Length: </label>{story.page_length}<br/>
                    <label style={{color:"#1565c0"}}>Status: </label>{story.status}<br/>
                    <label style={{color:"#0d47a1"}}>Premise: </label>
                    {storyPremise(story)}
                    <button onClick={()=>{history.push(`/stories/${story.id}`)}}>Details</button>
                    <hr/>
                </h3>
        );
    };
    function otherStoryForm(story){
        return(
                <h3 key={"other story" + story.id}>
                    <label style={{color:"#008200"}}>Title: </label>{story.title}<br/>
                    <label style={{color:"#00fa9a"}}>Author: </label>{story.author.username}<br/>
                    <label style={{color:"#7cfc00"}}>Genre: </label>{story.genre}<br/>
                    <label style={{color:"#3cb371"}}>Page Length: </label>{story.page_length}<br/>
                    <label style={{color:"#2e8b57"}}>Status: </label>{story.status}<br/>
                    <label style={{color:"#03C03C"}}>Premise: </label>
                    {storyPremise(story)}
                    <button onClick={()=>{history.push(`/other_stories/${story.id}/users/${story.author.id}`)}}>Details</button>
                    <hr/>
                </h3>
        );
    };

    return (
        <div className="App" key={"App"}>
            <h2 style={{color:"#8645a0"}}>Welcome to Fic. E {user.username}!</h2> ​
                {about ? (
                <div key={"Welcome"}>
                    Struggling with writer's block? Join the club, literally!<br/>
                    This website is all about getting past that pesky writers block you are constantly struggling with!​<br/><br/>
                    Create a story, any story your heart desires! Create the title, and genre of your story and get started with some writing! <br/><br/>
                    Go ahead! Click <Link to= "/stories/new">here</Link> to create your story!<br/>
                    Do you want to perhaps read the stories of other authors? Click right <Link to= "/other_stories">here</Link><br/>
                    to search for a genre of stories from other amazing authors just like you!<br/>
                    <p><button onClick={()=> setAbout(false)}>Hide</button></p>
                </div>
                ):(<button onClick={()=>setAbout(true)}>About Fic E</button>)}
            <br/>
            <h2 style={{color:"#32cd32"}}>{user.username}'s Reading List</h2>
            {otherStories.length > 0 ? 
            (otherStories.map((story)=>
            <>
            <Link to= "/other_stories">View More Stories</Link>
             {otherStoryForm(story)}
            </>
            )):
            (<div key={"Add to Reading List"}>
                <h3>It appears you don't have any stories added to your reading list! 
                    <br/>
                    You can fix that by clicking <Link to="/other_stories">here</Link> to browse through our collection 
                    <br/>
                    of stories by other authors and adding them to this list!
                    <br/>
                </h3>
                </div>
            )}
            <h2 style={{color:"#002D62"}}>{user.username}'s Stories​</h2>
            {stories.length > 0 ? 
            (stories.map((story)=>
            <>
            <Link to= "/stories/new">Write More Stories</Link>
            {storyForm(story)}
            </>
            )):(
                <h3>
                    It appears you didn't create any stories. You can change that by clicking <Link to ="/stories/new">here</Link> 
                    <br/>
                    to start writing your own amazing adventure!
                </h3>
            )}
        </div>
    )
}

export default Home;