import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Feed from './Components/Feed.js'
import CreateTweet from './Components/CreateTweet.js'
import UpdateTweet from './Components/UpdateTweet.js'
import ViewTweet from './Components/ViewTweet.js'
import Navbar from 'react-bootstrap/Navbar'

function App() {
  return (   
    <div className="App"> 
    <Router>
          <Navbar 
            bg="dark" 
            variant="dark"
            sticky="top"
            expand="lg"
            style={{ background: "white" }}
            className="shadow p-3 mb-0 bg- rounded justify-content-between"
          >
            <Navbar.Brand href="/Feed">
              <img
                alt=""
                src="./Resources/twitter.svg"
                width="30px"
                height="30px"
                className="d-inline-block align-top"
              />{' '}
              Tweetr
            </Navbar.Brand>
          </Navbar>
        
      <Switch>
        <Route path="/Feed" component={Feed} />
        <Route path="/CreateTweet" component={CreateTweet} />
        <Route path="/UpdateTweet" component={UpdateTweet} />
        <Route path="/ViewTweet/:id" component={ViewTweet}/>
      
      </Switch>
      
    </Router>
    </div>
  );
}

export default App;
