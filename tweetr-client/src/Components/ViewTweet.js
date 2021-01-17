import React from "react"
import { useState, useEffect } from "react";
import "../App.css";
import Button from 'react-bootstrap/Button'

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
      const deleteTweet = async (id) => {
        try {
          const response = await fetch(`http://localhost:3000/tweets/${id}`, {
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
      };

  useEffect(() => {
      fetchTweet();
  }, []);
    return (
      <>
        <div className="container">
          <div className="container jumbotron border border-primary rounded w-75 mt-4">
            <h1 className="display-4"> 
              {tweet.title}
            </h1>
            <p className="mb-0 ml-4 pt-2 pl-4">
              {tweet.content}
            </p>
            <hr className="my-4">
            </hr>
            <p className="my-4 text-muted font-italic font-weight-light">
              ~{tweet.author}~
            </p>
            <div className="btn-toolbar float-right" role="group" aria-label="Basic example">
              <a href={`/UpdateTweet/${tweet.id}`}>
                <Button className="btn btn-primary mx-2" >
                  Edit
                </Button>
              </a>
              <Button className="btn btn-primary mx-2" onClick={(event) => {deleteTweet(tweet.id);}}>
                Delete
              </Button>
            </div>
          </div>
        </div>
      </>
    );
};

export default ViewTweet;
