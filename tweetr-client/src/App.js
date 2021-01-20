import React from "react"
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Feed from './Components/Feed.js'
import CreateTweet from './Components/CreateTweet.js'
import UpdateTweet from './Components/UpdateTweet.js'
import ViewTweet from './Components/ViewTweet.js'
import Navbar from 'react-bootstrap/Navbar'

function App() {
  return (   
    <Router>
      <Navbar 
        sticky="top" 
        expand="lg" 
        className="shadow-lg p-3 mb-0 mw-100 d-flex bg-primary rounded-bottom align-content-center justify-content-between"
      >
        <Link to='/Feed' className="text-white w-25">Home        </Link>
        <h1 className="bg-primary text-white ">Tweetr</h1>
        <Link to='/CreateTweet' className="text-white w-25 d-flex justify-content-end ">Create Tweet</Link>
      </Navbar>

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
