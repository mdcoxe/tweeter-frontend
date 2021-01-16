import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Feed from './Components/Feed.js'
import CreateTweet from './Components/CreateTweet.js'
import UpdateTweet from './Components/UpdateTweet.js'
import ViewTweet from './Components/ViewTweet.js'

function App() {
  return (    
    <Router>
      <div className="App">
      <Switch>
        <Route path="/Feed" component={Feed} />
        <Route path="/CreateTweet" component={CreateTweet} />
        <Route path="/UpdateTweet" component={UpdateTweet} />
        <Route path="/ViewTweet" component={ViewTweet} />
      </Switch>
      </div>
    </Router>
  );
}

export default App;
