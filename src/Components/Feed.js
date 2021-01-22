import React from "react";
import { useState, useEffect } from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Feed() {
  const url = "https://tweetr-backend.herokuapp.com"
  const [tweets, setTweets] = useState([]);

  const fetchTweets = async () => {
    try {
      const res = await fetch(`${url}/tweets`);
      const json = await res.json();
      setTweets(json);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTweet = async (id) => {
    try {
      const response = await fetch(`${url}/tweets/${id}`, {
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
      <div className="App">
        <div id="trending">
          <h2>THEMA TENORIS</h2>
          #magistratum inierunt
          <br />
          #caedis caeser
          <br />
          #pandemus Covid
          <br />
          #feles bellus
        </div>
        <ul id="feed">
          {tweets.map((tweet) => {
            return (
              <li key={tweet.id}>
                <h4>@{tweet.author}</h4>
                <h3>"{tweet.content}"</h3>
                <button type="button">
                  <Link to={`/ViewTweet/${tweet.id}`}>VISUM</Link>
                </button>
                <button id="favorite">AMARE</button>
                <button>
                <Link to={`/ViewTweet/${tweet.id}`}>RESPONDEO</Link>
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
