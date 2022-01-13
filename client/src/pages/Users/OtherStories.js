import React from 'react'

const OtherStories = () => {
    const sampleStory=
    {
        title: "Lord of the Rings",
        genre: "Fantasy, Adventure",
        pageLength: "300",
        status: "Completed",
        premise: "A bunch of dudes go to destroy a piece of jewelry. Chaos ensues.",
    }

    function storyForm(story){
        return(
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
            {storyForm(sampleStory)}            
        </div>
    )
}

export default OtherStories
