import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
function LoginForm() {
    const [username, setUsername] =useState('')
    const [password, setPassword] =useState('')
    const [errors, setErrors]= useState(false)
    const history= useHistory()

    function handleSubmit(e){
        e.preventDefault();
        fetch(`/login`, {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                    username,
                    password
            }),
        }).then((r) => {
            if(r.ok){
                setUsername('')
                setPassword('')
                history('/')
                console.log("Submitted!")
                setErrors(false)

            }
            else{
                setErrors(true)
            }
        })
    }


    return (
        <div className='App'>
            <h2>Login</h2>
            {errors ? (<h4>Invalid Credentials</h4>):(<br/>)}
            <p>
                <label>Username</label>
                <input id= "username" value= {username} onChange={(e)=> setUsername(e.target.value)}></input>
            </p>
            <p>
                <label>Password</label>
                <input type= "password" id= "password" value= {password} onChange={(e)=> setPassword(e.target.value)}></input>
            </p>
            <p>
                <button type="submit" onClick={handleSubmit}>Login</button>
            </p>
            <p>Don't Have an account? <Link to="/signup">Sign up here!</Link></p>
        </div>
    )
}

export default LoginForm