import React, {useState} from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

const Home = () => {
    const [about, setAbout]= useState(false)
    const sampleStory=
    {
        title: "Lord of the Rings",
        genre: "Fantasy, Adventure",
        pageLength: "300",
        status: "Completed",
        premise: "A bunch of dudes go to destroy a piece of jewelry. Chaos ensues.",
    }
    const userSample={
        title: "3 Wise Wisecrackers",
        genre: "Romance, Thriller",
        pageLength: "3400",
        status: "Ongoing",
        premise: "Little did they know that the forces of evil were going to be this terrible...",
    }
    function storyForm(story){
        return(
            <div>
                <h3>
                    <label style={{color:"#2196f3"}}>Title:</label> {story.title}
                    <br/>
                    <label style={{color:"#1e88e5"}}>Genre:</label> {story.genre}
                    <br/>
                    <label style={{color:"#1976d2"}}>Page Length:</label> {story.pageLength}
                    <br/>
                    <label style={{color:"#1565c0"}}>Status:</label> {story.status}
                    <br/>
                    <label style={{color:"#0d47a1"}}>Premise:</label> 
                    <br/>
                    {story.premise}
                    <br/>
                </h3>
            </div>
        );
    };

    function chapterForm(){
        return(
            <h3>
                Title:
                <br/>
                Origin: 
                <br/>
                <Link to= "/original_chapters/:id/details">
                    <button>Details</button>​
                </Link>
                <br/>
                <Link to= "/original_chapters/:id/edit">
                    <button>Edit</button>​
                </Link>                    
                <br/>
                <button>Delete</button>​
            </h3>
        )
    };

    return (
        <div className="App">
            <Navbar/>
            <h2>Hello User, Welcome to Fic E!</h2> ​
                {about ? (
                <div>
                    Struggling with writer's block? Join the club, literally!
                    <br/>
                    This website is all about getting past that pesky writers block you are constantly struggling with!​
                    <br/>
                    <br/>
                    Create a story, any story your heart desires! Create the title, and genre of your story and get started with some writing! 
                    <br/>
                    <br/>
                    Go ahead! Click <Link to= "/new">here</Link> to create your story!
                    <br/>
                    Do you want to perhaps read the stories of other authors? Click right <Link to= "/stories">here</Link>
                    <br/>
                    to search for a genre of stories from other amazing authors just like you!
                    <br/>
                    <p>
                    <Link onClick={()=> setAbout(false)}>Hide</Link>
                    </p>
                </div>
                ):(<Link onClick={()=>setAbout(true)}>About Fic E</Link>)}
            <br/>
            <h2>
                 User's Reading List
            </h2>
            {sampleStory ? 
            (<div>
                {storyForm(sampleStory)}
                <Link to={}></Link>
            </div>):
            (<div>
                <h3>It appears you don't have any stories added to your reading list! 
                    <br/>
                    You can fix that by clicking <Link to="/stories">here</Link> to browse through our collection 
                    <br/>
                    of stories by other authors and adding them to this list!
                    <br/>
                </h3>
                </div>
            )}
            <h2>
                User's Stories​
            </h2>
            {sampleStory ? 
            (
                <div>
                    {storyForm(userSample)}
                </div>
            ):(
                <h3>
                    It appears you didn't create any stories. You can change that by clicking <Link to ="/new">here</Link> 
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
