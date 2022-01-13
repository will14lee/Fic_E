import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'

const StoryForm = () => {
    const history=useHistory()
    const [title, setTitle]= useState("")
    const [premise, setPremise]= useState("")
    const [genre, setGenre]= useState("")
    const [genre1, setGenre1]= useState("")
    const [genre2, setGenre2]= useState("")
    const [genre3, setGenre3]= useState("")
    const [genre4, setGenre4]= useState("")
    const [genres, setGenres]= useState(0)

    function handleSubmit(){
        fetch("/stories", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title,
                premise,
                genre,
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
        <>
            <label>Genre</label>
            <select value={genre} onChange={(e)=>setGenre(e.target.value)}>
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
        )
    };

    function addGenre(){
        return(
            <>
                {genreForm()}
                <button onClick={()=>setGenres(genres - 1)}>Delete genre</button>
            </>
        )
    }
    return (
        <div>
            <h3>New Story</h3>
            <p><label>Title</label><input value={title} onChange={(e)=> setTitle(e.target.value)} placeholder='Lord of the Rings'/></p>
            <p><label>Premise</label></p>
            <p><textarea  value={premise} onChange={(e)=>setPremise(e.target.value)} rows="5" cols="40" placeholder='A bunch of dudes trying to get rid of a piece of jewelry. Chaos ensues.'/></p>
            <p>
                {genreForm()}
                {/* {genres > 3 ? (<br/>) : (<><button onClick={()=>{setGenres(genres + 1)}}>Add genre</button><br/></>)} */}
                {/* {genres > 0 ? (<>{addGenre()}<br/></>):(<></>)}
                {genres > 1 ? (<>{addGenre()}<br/></>):(<></>)}
                {genres > 2 ? (<>{addGenre()}<br/></>):(<></>)}
                {genres > 3 ? (<>{addGenre()}<br/></>):(<></>)}
                {genres > 3 ? (<>You should not exceed more than 5 genres!<br/></>):(<></>)} */}
            </p>
            <p><button type='submit' onClick={()=>handleSubmit()}>Create</button></p>
        </div>
    )
}

export default StoryForm
