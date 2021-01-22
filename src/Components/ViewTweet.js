import React from "react";
import { useState, useEffect } from "react";
import "../App.css";

function ViewTweet(routerProps) {
  const url = "https://tweetr-backend.herokuapp.com"
  const [tweet, setTweet] = useState([]);
  // This sets the replies state using the replies property on the json.object.
  const [replies, setReplies] = useState([]);

  const fetchTweet = async () => {
    try {
      const res = await fetch(
        `${url}/tweets/${routerProps.match.params.id}`
      );
      // Note: I changed the show route on the back end to send back a json.object with
      // a tweet-property and replies-property, which uses an ActiveRecord query to find
      // the associated 'replies'.
      // e.g. render json: { tweet: @tweet, replies: @tweet.replies }
      const json = await res.json();
      setTweet(json.tweet);
      setReplies(json.replies);
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
      const filteredTweets = tweet.filter((tweet) => tweet.id !== data.id);
      setTweet(filteredTweets);
    } catch (error) {
      console.log(error);
    }
    // props.history.push('/')
  };

  useEffect(() => {
    fetchTweet();
  }, []);

  return (
    <>
      <div id="view-tweet">
        <h4>@{tweet.author}</h4>
        {tweet.title}
        <h3>"{tweet.content}"</h3>
        <div>
          <a href={`/UpdateTweet/${tweet.id}`}>
            <button>Renovatio</button>
          </a>
          <button
            onClick={(event) => {
              deleteTweet(tweet.id);
            }}
          >
            Erado
          </button>
        </div>
      </div>
      <ul>
      {/* Note: This maps over the 'reply' state and renders the replies using a bootstrap Card component. */}
      <div id="replies">
        {replies.map((currReply) => {
          return (
            <>
                <li key={currReply.id}>
                  <h4>@{currReply.author}</h4>
                  <h3>"{currReply.content}"</h3>
                </li>
            </>
          );
        })}
      </div>
      </ul>
    </>
  );
}

export default ViewTweet;
