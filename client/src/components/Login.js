import React, {useState} from "react";
import axios from 'axios';

const loginApi = 'http://localhost:5000/api/login';

function Login (props) {

  const [userInfo, setUserInfo] = useState([]);
  const handleSubmit = event => {
    event.preventDefault();
    
    axios.post(loginApi, userInfo)
    .then(response => {
      localStorage.setItem('token', response.data.payload);
      props.history.push('/bubblepage');
    })
  }
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const onValueChange = event => {
    setUserInfo({
      ...userInfo,
      [event.target.name] : event.target.value
    })
  }

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <div className='login'>
        {/* <form onSubmit={handleSubmit}> */}
          {/* <input type="text"
          name="username"
          placeholder="username" 
          value={userInfo.username}
          onChange={event => onValueChange(event)} />
          <br />
          <input type="text"
          name="password" placeholder="password" 
          value={userInfo.password}
          onChange={event => onValueChange(event)} />
          <button onSubmit={handleSubmit}>Submit</button>

           */}

          <form>
            <div>
                <h3>Log in</h3>
                Username
                <input 
                type="text" name ="username" placeholder="enter your username" value={userInfo.username}
                onChange={event=> onValueChange(event)}
                />
                <br/>
                Password
                <input type="password" name="password" placeholder="enter password" value={userInfo.password}
                onChange={event=> onValueChange(event)} />
                <br/>
                <button onSubmit={handleSubmit}>Submit</button>
            </div>
        {/* </form>    */}
        </form>
      </div>
    </>
  );
};

export default Login;
