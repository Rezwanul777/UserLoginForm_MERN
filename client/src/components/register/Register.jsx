import React from 'react'
import "./register.css"

const Register = () => {
  return (
    <div className="register">
            {console.log("User", user)}
            <h1>Register</h1>
            <input type="text"  placeholder="Your Name" ></input>
            <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={ handleChange }></input>
            <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={ handleChange }></input>
            <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={ handleChange }></input>
            <div className="button" onClick={register} >Register</div>
            <div>or</div>
            <div className="button" >Login</div>
        </div>
  )
}

export default Register