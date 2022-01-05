import React, {useState} from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

const Home = () => {
    const [about, setAbout]= useState(false)
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
    }

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
                <h3>It appears you don't have any stories added to your reading list! 
                    <br/>
                    You can fix that by clicking <Link to="/stories">here</Link> to browse through our collection 
                    <br/>
                    of stories by other authors and adding them to this list!
                </h3>
            <br/>
            <h2>
                User's Stories​
            </h2>
                {/* if you created any stories then a view my stories button will  */}
                {/* be present that will show a maximum of 10 stories with a more... button  */}
                {/* to see 10 more stories.  The stories will have their title, and date last */}
                {/* edited displayed and a details button(link to /stories/:id). They will be */}
                {/* sorted by dates with most recently edited and added on the top respectively else...​ */}
                <h3>
                    It appears you didn't create any stories. You can change that by clicking <Link to ="/new">here</Link> 
                    <br/>
                    to start writing your own amazing adventure!
                </h3>
                <h2>
                    My Chapters​
                </h2>
                {chapterForm()}
        </div>
    )
}

export default Home
