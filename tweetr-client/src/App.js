import React from "react"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Feed from './Components/Feed.js'
import CreateTweet from './Components/CreateTweet.js'
import UpdateTweet from './Components/UpdateTweet.js'
import ViewTweet from './Components/ViewTweet.js'
import './App.css';

function App() {
  return (   
    <Router>
      <div id="nav-container">
        <Link to='/Feed'><h1>trittilo</h1></Link>
          <div>
            <Link to='/CreateTweet' id="nav">NEW TWEET      </Link>
            <Link to='/CreateTweet' id="nav">LOGIN       </Link>
            <Link to='/CreateTweet' id="nav">REGISTER</Link>
          </div>
      </div>
      <Switch>
        <Route path="/Feed" component={Feed} />
        <Route path="/CreateTweet" component={CreateTweet} />
        <Route path="/UpdateTweet" component={UpdateTweet} />
        <Route path="/ViewTweet/:id" component={ViewTweet} />
      </Switch>
    </Router>
  );
}

export default App;
