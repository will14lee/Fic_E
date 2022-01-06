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
        <div className="App">
            <table>
                <tr>
                    <td><Link to= "/">Home</Link></td>
                    <td><Link to="/signup">Signup</Link></td>
                    <td><Link to= "/new">Create a Story</Link></td>
                    <td><Link to= "/stories">View Stories</Link></td>
                    <td><Link to= "/login" onClick={handleDelete()}>Logout</Link></td>
                </tr>
            </table>

        </div>
    )
}

export default Navbar
