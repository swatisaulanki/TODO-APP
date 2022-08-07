import React from 'react'

const Login = () => {
  return (
    <div>
          <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter email" name="email" required/>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required/>

    <button type="submit">Login</button>
    </div>
  )
}

export default Login
