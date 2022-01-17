import React, {useState, useEffect} from 'react'
import { useHistory, useParams } from 'react-router-dom'

const EditStory = () => {
    const params= useParams()
    const [stories, setStories]= useState("")
    const [user, setUser]= useState("")
    const [newStatus, setNewStatus]=useState("")
    const [newTitle, setNewTitle]= useState("")
    const [newPremise, setNewPremise]= useState("")
    const [newGenre, setNewGenre]= useState("")
    const history=useHistory()
    useEffect(() => {
        fetch("/me").then((r)=> {
            if (r.ok) {
                r.json().then((user)=> setUser(user))
            }
            else{
                history.push('/login')
            }

        fetch(`/stories/${params.id}`)
        .then(resp=> resp.json())
        .then(setStories)
        
        })}, [])

    function handleSubmit(){
        fetch(`/stories/${params.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: newTitle,
                premise: newPremise,
                genre: newGenre,
                status: newStatus,
            }),
        }).then((r)=> {
            if (r.ok){
                history.push("/")
                console.log(r)
            }
            else {
                r.json().then((err)=>console.log(err.errors))
            }
        })
    }
    function genreForm(){
        return(
        <><label>Genre</label>
        <select value={stories.genre} onChange={(e)=>setNewGenre(e.target.value)}>
            <option value="Adventure">Adventure</option>
            <option value="Children">Children</option>
            <option value="Comedy">Comedy</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Horror">Horror</option>
            <option value="Romance">Romance</option>
            <option value="Mystery">Mystery</option>
            <option value="Sci-Fi">Sci-Fi</option>
            <option value="Other">Other</option>
        </select>
        </>
        )};
    function addGenre(){
        return(
        <>
        {genreForm()}
        <button>Delete genre</button>
        </>
        )
    }
    return (
        <div>
            <h3>Edit Story</h3>
            <p><label>Title</label><input key={stories.id} placeholder={stories.title} onChange={(e)=>setNewTitle(e.target.value)}/></p>
            <p><label>Premise</label></p>
            <p><textarea rows="5" cols="40" key={stories.id} placeholder={stories.premise} onChange={(e)=>setNewPremise(e.target.value)}/></p>
            <p>
            {genreForm()}
            {/* <button onClick={()=>{addGenre()}}>Add genre</button> */}
            </p>
            {/* {genres > 3 ? (<br/>) : (<><button onClick={()=>{setGenres(genres + 1)}}>Add genre</button><br/></>)} */}
            {/* {genres > 0 ? (<>{addGenre()}<br/></>):(<></>)}
            {genres > 1 ? (<>{addGenre()}<br/></>):(<></>)}
            {genres > 2 ? (<>{addGenre()}<br/></>):(<></>)}
            {genres > 3 ? (<>{addGenre()}<br/></>):(<></>)}
            {genres > 3 ? (<>You should not exceed more than 5 genres!<br/></>):(<></>)} */}
            <p>Status: <input onChange={(e)=>setNewStatus(e.target.value)} placeholder={stories.status}/></p>
            <p><button type='submit' onClick={()=>handleSubmit()}>Create</button></p>
        </div>
    )
}

export default EditStory
