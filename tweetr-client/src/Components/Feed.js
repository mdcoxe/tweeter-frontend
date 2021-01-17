import React from "react"
import { useState, useEffect } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';

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

  useEffect(() => {
    fetchTweets();
  }, []);

  return (
    <div className="home">
      <h1 className="text-primary">Tweetr Feed</h1>
        <div className="  bg-white">
        {tweets.map((tweet) => {
          return (
            <Card style={{width: "400px"}} border="primary" className="m-3 shadow" key={tweet.id}>
              <Card.Body>
                <Card.Title className='text-center font-weight-bold'>
                  <Link to={`/ViewTweet/${tweet.id}`}>
                    {tweet.title}
                  </Link>
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted font-italic font-weight-light" >
                ~{tweet.author}
                </Card.Subtitle>
                <Card.Text className="text-dark ">{tweet.content}</Card.Text>
              </Card.Body>
            </Card>
          );
        })}
        </div>
      
    </div>
  );
}

export default Feed;
