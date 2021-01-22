import React from "react"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Feed from './Components/Feed.js'
import CreateTweet from './Components/CreateTweet.js'
import UpdateTweet from './Components/UpdateTweet.js'
import ViewTweet from './Components/ViewTweet.js'
import Login from './Components/Login.js'
import Register from './Components/Register.js'
import './App.css';

function App() {
  return (   
    <Router>
      <div id="nav-container">
        <Link to='/Feed'><h1>trittilo</h1></Link>
          <div>
            <Link to='/CreateTweet' id="nav">Tritillo Novus      </Link>
            <Link to='/Login' id="nav">LOGIN       </Link>
            <Link to='/Register' id="nav">REGISTER</Link>
          </div>
      </div>
      <Switch>
        <Route path="/Feed" component={Feed} />
        <Route path="/CreateTweet" component={CreateTweet} />
        <Route path="/UpdateTweet" component={UpdateTweet} />
        <Route path="/ViewTweet/:id" component={ViewTweet} />
        <Route path="/Login" component={Login} />
        <Route path="/Register" component={Register} />
      </Switch>
    </Router>
  );
}

export default App;
