import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext';

export default function Login() {
  const {handleLogin} = useContext(AuthContext);
   
  const handleSubmit = (event) => {
    event.preventDefault(); //prevent default functionality. 
    const formData = new FormData(event.target);//Key value pair formdata

    const usernameValue = formData.get("username");//username = name on input
    const passwordValue = formData.get("password");//password = name on input
    console.log("the username value is", usernameValue);
    console.log("the password value is", passwordValue);
    //call the handleLogin function from the context.
    handleLogin(true, usernameValue);
  }

  return (
    <>
      <h1>Login</h1>  
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" name="username" />
        <label>Password</label>
        <input type="password" name="password" />
        <button>Login</button>
      </form>
    </>
  )
}
