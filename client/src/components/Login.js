import React, {useRef } from "react";
import axios from 'axios';

function Login (props) {

  const usernameRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = () => {

    axios.post('http://localhost:5000/api/login',{
            username: usernameRef.current.value,
            password: passwordRef.current.value,
          })
    .then(response => {
      console.log('token is', response.data.payload)
      localStorage.setItem('token', response.data.payload);
      props.history.replace('/bubblepage');
    })
    .catch(error => {
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
                ref={usernameRef}
                type="text" 
                />
                <br/>
                password
                <input 
                ref={passwordRef}
                type="text" 
                />
                <br/>
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </form>
    </>
  );
};

export default Login;

/*
import React, { useRef } from 'react';
import axios from 'axios';
const Login = (props) => {
 const usernameRef = useRef();
 const passwordRef = useRef();
 const submit = () => {
   axios.post('http://localhost:5000/api/login', {
     username: usernameRef.current.value,
     password: passwordRef.current.value,
   })
   .then(res => {
     console.log("token is", res.data.payload);
     localStorage.setItem("token", res.data.payload);
     props.history.replace('/bubblepage');
   // when you have handled the token, navigate to the BubblePage route
   })
   .catch(err => {
     console.log("error");
   })
 }
 return (
   <div>
     <div>
       username <input ref={usernameRef} type="text" />
       <br />
       password <input ref={passwordRef} type="text" />
     </div>
     <div>
       <button onClick={submit}>Submit</button>
     </div>
   </div>
 );
};
*/