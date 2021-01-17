import { useState, useEffect } from "react";
import { useRouteMatch, Link } from "react-router-dom";
import "../App.css";

function ViewTweet() {
const [tweet, setTweet] = useState([]);
const tweetDetailRouteMatch = useRouteMatch("tweets/:id");
// console.log(useRouteMatch('tweets/:id'))
// console.log(useRouteMatch('/tweets/:id'))
// console.log(useRouteMatch('/tweets/1'))

  const fetchTweet = async () => {
    try {
      const res = await fetch(`http://localhost:3000/tweets/${tweetDetailRouteMatch.params.id}`);
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
        </>
    );
};

export default ViewTweet;