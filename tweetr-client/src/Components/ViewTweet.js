import { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import "../App.css";

function ViewTweet(routerProps) {
    const [tweet, setTweet] = useState([]);

      const fetchTweet = async () => {
        try {
          const res = await fetch(`http://localhost:3000/tweets/${routerProps.match.params.id}`);
          const json = await res.json();
          setTweet(json)
        } catch (error) {
          console.error(error);
        }
      };


  useEffect(() => {
      fetchTweet();
  }, []);
    return (
        <>
            <h1>View Tweet</h1>
                <div>
                    {tweet.title}
                    <br />
                    {tweet.author}
                    <br />
                    {tweet.content}
                </div>
                <button>
                <Link to={`/UpdateTweet/${tweet.id}`}>EDIT</Link>
              </button>
              
        </>
    );
};

export default ViewTweet;
