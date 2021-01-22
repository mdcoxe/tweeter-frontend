import React, { useState, useEffect } from 'react';
import axios from "axios";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Feed from './Components/Feed.js'
import CreateTweet from './Components/CreateTweet.js'
import UpdateTweet from './Components/UpdateTweet.js'
import ViewTweet from './Components/ViewTweet.js'
import Login from './Components/Login.js'
import Register from './Components/Register.js'
import Logout from './Components/Logout';
import './App.css';

function App() {
  const [state, setState] = useState({
    username: "",
    password: "",
    isLoggedIn: false,
  })

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [isLoggedIn]);

  const handleLogOut = () => {
    setState({
      username: "",
      password: "",
      isLoggedIn: false,
    });
    localStorage.clear();
  };
  
  const handleInput = (event) => {
    setState({...state, [event.target.name]: event.target.value });
  };

  const handleSignUp = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://loclahost:3000/users/", {
        username: state.username,
        password: state.password,
      });
      console.log(response);
      localStorage.token = response.data.token;
      setIsLoggedIn(true);
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogIn = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/users/login", {
        username: state.username,
        password: state.password,
      });
      console.log(response.data)
      localStorage.token = response.data.token;
      setIsLoggedIn(true);
      console.log(isLoggedIn)
      console.log(localStorage.token)
    } catch (error) {
      console.log(error);
    }
  };


  return (   
    <Router>
      <div id="nav-container">
        <Link to='/Feed'><h1>trittilo</h1></Link>
          <div>
            <Link to='/CreateTweet' id="nav">Tritillo Novus</Link>
            <Link to='/Login' id="nav">LOGIN</Link>
            <Link to='/Register' id="nav">REGISTER</Link>
          </div>
      </div>
      <Switch>
        <Route path="/Feed" component={Feed} />
        <Route path="/CreateTweet" component={CreateTweet} />
        <Route path="/UpdateTweet" component={UpdateTweet} />
        <Route path="/ViewTweet/:id" component={ViewTweet} />
        <Route path="/Login" 
          render={(props) => {
            return (
              <Login
                isLoggedIn={isLoggedIn}
                handleInput={handleInput}
                handleLogIn={handleLogIn}
              />
            );
          }} 
        />
        <Route path="/Register" 
          render={(props) => {
            return (
              <Register
                isLoggedIn={isLoggedIn} 
                handleInput={handleInput} 
                handleSignUp={handleSignUp} 
              />
            );
          }}
        />
        <Route  path='/Logout'
          render={(props) => {
            return (
              <Logout 
                isLoggedIn={isLoggedIn} 
                handleLogOut={handleLogOut}
              />
            )
          }} 
        />
      </Switch>
    </Router>
  );
}

export default App;
