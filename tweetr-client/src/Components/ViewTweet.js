import React from "react"
import { useState, useEffect } from "react";
import "../App.css";
import { Button, Card, Row, Container } from 'react-bootstrap'

function ViewTweet(routerProps) {
  const [tweet, setTweet] = useState([]);
  // This sets the replies state using the replies property on the json.object.
  const [replies, setReplies] = useState([]);

  const fetchTweet = async () => {
    try {
      const res = await fetch(`http://localhost:3000/tweets/${routerProps.match.params.id}`);
      // Note: I changed the show route on the back end to send back a json.object with 
      // a tweet-property and replies-property, which uses an ActiveRecord query to find 
      // the associated 'replies'.
      // e.g. render json: { tweet: @tweet, replies: @tweet.replies }
      const json = await res.json();
      setTweet(json.tweet)
      setReplies(json.replies)
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
            <Button className="btn btn-primary mx-2" onClick={(event) => { deleteTweet(tweet.id); }}>
              Delete
              </Button>
          </div>
        </div>
        {/* Note: This maps over the 'reply' state and renders the replies using a bootstrap Card component. */}
        <Container fluid>
          {
            replies.map((currReply) => {
              return (
                <Row key={currReply.id} className="justify-content-md-center">
                  <Card style={{ width: "200px" }} border="primary" className="m-3 shadow">
                    <Card.Body>
                      <Card.Title>{currReply.author}</Card.Title>
                      <hr />
                      <Card.Text>{currReply.content}</Card.Text>
                    </Card.Body>
                  </Card>
                </Row>
              );
            })
          }
        </Container>
      </div>
    </>
  );
};

export default ViewTweet;
