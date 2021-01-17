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
      <h1>Feed</h1>
      <button type="button">
                <Link to={'/CreateTweet'}>NEW TWEET</Link>
              </button>
      <ul>
        {tweets.map((tweet) => {
          return (
            <li key={tweet.id}>
              {tweet.author}
              <br />
              {tweet.content}
              <br />
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
    </>
  );
}

export default Feed;
