import React, {useRef, useState } from "react";
import axios from 'axios';

function Login (props) {

  const initialState = {
    username: '', 
    password: ''
  };

  const[loginState, setLoginState] = useState(initialState);

  const handleChange= (e) => {
    setLoginState({
      ...loginState,
      [e.target.name] : e.target.value
    })
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()

    axios.post('http://localhost:5000/api/login', loginState)
    
    .then(response => {
      debugger
      console.log('token is', response.data.payload)
      localStorage.setItem('token', response.data.payload);
      setLoginState(initialState);
      props.history.push('/bubblepage');
    })
    .catch(error => {
      debugger 
      console.log(error, 'sorry')
    })
  }
  
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
          <form>
            <div>
                <h3>Log in</h3>
                username
                <input 
                type="text" 
                name="username"
                onChange={handleChange}
                value={loginState.username}
                />
                <br/>
                password
                <input 
                name="password"
                type="text" 
                onChange={handleChange} 
                value={loginState.password}
                />
                <br/>
                <button onClick={e => (handleSubmit(e))}>Submit</button>
            </div>
        </form>
    </>
  );
};

export default Login;

