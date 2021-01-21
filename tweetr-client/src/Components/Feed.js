import React from "react";
import { useState, useEffect } from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Feed() {
  const [tweets, setTweets] = useState([]);

  const fetchTweets = async () => {
    try {
      const res = await fetch("http://localhost:3000/tweets");
      const json = await res.json();
      setTweets(json);
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
      <span>
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
          <ul>
            {tweets.map((tweet) => {
              return (
                <li key={tweet.id}>
                  {/* <p>{tweet.title}</p> */}
                  <h4>@{tweet.author}</h4>
                  <h3>"{tweet.content}"</h3>
                  <button type="button">
                    <Link to={`/ViewTweet/${tweet.id}`}>VISUM</Link>
                  </button>
                  {/* <button>
                <Link to={`/UpdateTweet/${tweet.id}`}>EDIT</Link>
              </button> */}
                  <button id="favorite">AMARE</button>
                  <button
                    onClick={(event) => {
                      deleteTweet(tweet.id);
                    }}
                  >
                    ERADO{" "}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </span>
    </>
  );
}

export default Feed;
