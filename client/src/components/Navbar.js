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
                <tbody>
                <tr>
                    <td><Link to= "/">Home</Link></td>
                    <td><Link to= "/login" onClick={()=>handleDelete()}>Logout</Link></td>
                </tr>
                </tbody>
            </table>

        </div>
    )
}

export default Navbar
