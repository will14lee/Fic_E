import React, {useState, useEffect} from 'react'
import { Link, useHistory } from 'react-router-dom'

const Home = () => {
    const history= useHistory()
    const [stories, setStories]= useState("")
    const [about, setAbout]= useState(false)
    const [user, setUser]= useState(false)
    const [otherStories, setOtherStories]= useState("")

    useEffect(() => {
        fetch("/me").then((r)=> {
            if (r.ok) {
                r.json().then((user)=> setUser(user))
            }
            else{
                history.push('/login/')
            }

        fetch("/stories")
        .then(resp=> resp.json())
        .then(setStories)
        
        fetch("/story_listings")
        .then(resp=> resp.json())
        .then(setOtherStories)
        })}, [])

    function storyForm(story){
        return(
                <h3 key={story.id}>
                    <label style={{color:"#2196f3"}}>Title: </label>{story.title}<br/>
                    <label style={{color:"#1e88e5"}}>Genre: </label>{story.genre}<br/>
                    <label style={{color:"#1976d2"}}>Page Length: </label>{story.pageLength}<br/>
                    <label style={{color:"#1565c0"}}>Status: </label>{story.status}<br/>
                    <label style={{color:"#0d47a1"}}>Premise: </label><br/>
                    {story.premise}<br/>
                    <button onClick={()=>{history.push(`/${story.id}/`)}}>Details</button>
                    <hr/>
                </h3>
        );
    };
    function otherStoryForm(story){
        return(
                <h3 key={story.id}>
                    {console.log(story)}
                    <label style={{color:"#2196f3"}}>Title: </label>{story.title}<br/>
                    <label style={{color:"#2196f3"}}>Author: </label>{story.author.username}<br/>
                    <label style={{color:"#1e88e5"}}>Genre: </label>{story.genre}<br/>
                    <label style={{color:"#1976d2"}}>Page Length: </label>{story.pageLength}<br/>
                    <label style={{color:"#1565c0"}}>Status: </label>{story.status}<br/>
                    <label style={{color:"#0d47a1"}}>Premise: </label><br/>
                    {story.premise}<br/>
                    <button onClick={()=>{history.push(`/${story.id}/`)}}>Details</button>
                    <hr/>
                </h3>
        );
    };

    function chapterForm(){
        return(
            <h3>
                Title:
                <br/>
                Origin: 
                <br/>
                <Link to= "/original_chapters/:id/details/">
                    <button>Details</button>​
                </Link>
                <br/>
                <Link to= "/original_chapters/:id/edit/">
                    <button>Edit</button>​
                </Link>                    
                <br/>
                <button>Delete</button>​
            </h3>
        )
    };
    return (
        <div className="App">
            <h2>Welcome to Fic. E {user.username}!</h2> ​
                {about ? (
                <div>
                    Struggling with writer's block? Join the club, literally!<br/>
                    This website is all about getting past that pesky writers block you are constantly struggling with!​<br/><br/>
                    Create a story, any story your heart desires! Create the title, and genre of your story and get started with some writing! <br/><br/>
                    Go ahead! Click <Link to= "/new/">here</Link> to create your story!<br/>
                    Do you want to perhaps read the stories of other authors? Click right <Link to= "/stories/">here</Link><br/>
                    to search for a genre of stories from other amazing authors just like you!<br/>
                    <p><button onClick={()=> setAbout(false)}>Hide</button></p>
                </div>
                ):(<button onClick={()=>setAbout(true)}>About Fic E</button>)}
            <br/>
            <h2>
                 User's Reading List
            </h2>
            {otherStories.length > 0 ? 
            (otherStories.map((story)=>
             otherStoryForm(story)
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
            <h2>
                User's Stories​
            </h2>
            {stories.length > 0 ? 
            (stories.map((story)=>
            storyForm(story)
            )):(
                <h3>
                    It appears you didn't create any stories. You can change that by clicking <Link to ="/new/">here</Link> 
                    <br/>
                    to start writing your own amazing adventure!
                </h3>
            )}
                
                <h2>
                    My Chapters​
                </h2>
                {chapterForm()}
        </div>
    )
}

export default Home
