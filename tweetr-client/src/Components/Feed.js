import React from "react"
import { useState, useEffect } from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Feed() {
  const [tweets, setTweets] = useState([]);

  const fetchTweets = async () => {
    try {
      const res = await fetch("http://localhost:3000/tweets");
      const json = await res.json();
      setTweets(json)
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTweet = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/tweets/${id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      });
      const data = await response.json();
      const filteredTweets = tweets.filter((tweet) => tweet.id !== data.id);
      setTweets(filteredTweets);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTweets();
  }, []);

  return (
    <>
    {/* <div id="new-tweet-btn"><Link to='/CreateTweet'>NEW TWEET</Link></div> */}
    <div className="App">
    <ul>
        {tweets.map((tweet) => {
          return (
            <li key={tweet.id}>
              {/* <p>{tweet.title}</p> */}
              <h3>@{tweet.author}</h3>
              <h3>"{tweet.content}"</h3>
              <button type="button">
                <Link to={`/ViewTweet/${tweet.id}`}>VIEW</Link>
              </button>
              <button>
                <Link to={`/UpdateTweet/${tweet.id}`}>EDIT</Link>
              </button>
              <button
                onClick={(event) => {
                  deleteTweet(tweet.id);
                }}
              >
                DELETE{" "}
              </button>
            </li>
          );
        })}
      </ul>
      </div>
    </>
  );
}

export default Feed;
