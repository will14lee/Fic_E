import React from 'react'
import { useHistory } from 'react-router-dom'

const StoryForm = () => {
    const history=useHistory()
            function handleSubmit(){
                history.push("/")
            }
            function addGenre(){
                console.log("Hello!")
                return(
                    <p><label>Genre</label>
                        <select>
                            <option value="Adventure">Adventure</option>
                            <option value="Children">Children</option>
                            <option value="Comedy">Comedy</option>
                            <option value="Fantasy">Fantasy</option>
                            <option value="Horror">Horror</option>
                            <option value="Romance">Romance</option>
                            <option value="Mystery">Mystery</option>
                            <option value="Other">Other</option>
                            <option value="Sci-Fi">Sci-Fi</option>
                        </select>
                        <button>Delete genre</button>
                    </p>
                )
            };
    return (
        <div>
            <h3>New Story</h3>
            <p><label>Title</label><input placeholder='Lord of the Rings'/></p>
            <p><label>Premise</label></p>
            <p><textarea rows="5" cols="40" placeholder='A bunch of dudes trying to get rid of a piece of jewelry. Chaos ensues.'/></p>
            <p><label>Genre</label>
                <select>
                    <option value="Adventure">Adventure</option>
                    <option value="Children">Children</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Fantasy">Fantasy</option>
                    <option value="Horror">Horror</option>
                    <option value="Romance">Romance</option>
                    <option value="Mystery">Mystery</option>
                    <option value="Other">Other</option>
                    <option value="Sci-Fi">Sci-Fi</option>
                </select>
            <button onClick={()=>{addGenre()}}>Add genre</button>
            </p>
            {addGenre()}
            <p><button type='submit' onClick={()=>handleSubmit()}>Create</button></p>
        </div>
    )
}

export default StoryForm
