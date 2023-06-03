import React from 'react'
import "./login.css"

const Login = () => {
    const [user,setUser]=useState({
        
        email:"",
        password:"",
      
    })

    const handleChange=e=>{
        e.preventDefault()
        const {name,value} = e.target
        setUser({
            ...user,
            [name]:value
        })
    }

  return (
   <>
         <div className="login">
            <h1>Login</h1>
            <input type="text" name="email" value={user.email}  placeholder="Your Email"  onChange={handleChange}></input>
            <input type="password" name="password" value={user.password} placeholder="Your Password"  onChange={handleChange}></input>
            <div className="button" >Login</div>
            <div>or</div>
            <div className="button" >Register</div>
        </div>
   
   
   </>
  )
}

export default Login