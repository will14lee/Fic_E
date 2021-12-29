import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {

    function handleDelete(){
        fetch(`/logout`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        }).then((r)=> {
            if (r.ok){
                console.log("Goodbye")
            }else {
                r.json().then((err)=>console.log(err.errors))
            }
        })
    }

    return (
        <div>
            <p><Link to= "/">Home</Link></p>
            <p><Link to= "/login" onClick={handleDelete()}>Logout</Link></p>
            <p><Link to="/signup">Signup</Link></p>
        </div>
    )
}

export default Navbar
