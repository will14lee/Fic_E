import React, {useState, useEffect} from 'react'
import { useParams, useHistory} from 'react-router-dom'
const PageForm = () => {
    const [text, setText]= useState("")
    const [notes, setNotes]=useState("")
    const [user, setUser]=useState("")
    const params= useParams()
    const history= useHistory()

    useEffect(() => {
        fetch("/me").then((r)=> {
            if (r.ok) {
                r.json().then((user)=> setUser(user))
            }
            else{
                history.push('/login')
            }
        })}, [])
    function nextPage(){
        fetch(`/stories/${params.story_id}/chapters/${params.id}/pages`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                text,
                notes,
            }),
        }).then((r)=> {
            if (r.ok){
                console.log(r)
                setText("")
                setNotes("")
            }
            else {
                r.json().then((err)=>console.log(err.errors))
            }
        })
    }

    function handleSubmit(){
        nextPage()
        history.push(`/stories/${params.story_id}/chapters/${params.id}`)
    }
    return (
        <div>
            <h3>Let's Write!</h3>
            <textarea value={text} rows="40" cols="100" onChange={(e)=>setText(e.target.value)}></textarea>
            <p>Notes</p>
            <textarea value={notes}rows="20" cols="100" onChange={(e)=>setNotes(e.target.value)}></textarea><br/>
            <button onClick={()=>handleSubmit()}>Submit</button><br/>
            <button onClick={()=>nextPage()}>Write Next Page</button><br/>
            <button onClick={()=>history.push(`/stories/${params.story_id}/chapters/${params.id}`)}>Return</button>
        </div>
    )
}

export default PageForm


// There once was a pony from a magical land that would hunt humans and wear there skins like a trophy. He was feared by all the residents. He was known as: The Bad Neighbor. 
// Everybody would fear, "The Bad Neighbor" and everybody that didn't would one day hear a clip-clop. That was the first warning.
// The next warning 2 shattered mirror and little bit of grass.
// The third warning was the carcass of an eviscerated mammal on your bedroom.
// If at this point in time you refused to ask the Bad Neighbor for forgiveness and present 13 immaculate carrots as penance, then the neighbor would come in the dead of night and stomp on all of your appendages until they looked like the spider limbs and your face would be munched off.
// This was the fate of all those that did not fear: The Bad Neighbor.