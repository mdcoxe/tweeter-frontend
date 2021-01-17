import { useState, useEffect } from "react";

import "../App.css";

function ViewTweet(routerProps) {
const [tweet, setTweet] = useState([]);




  const fetchTweet = async () => {
    console.log(routerProps)
    try {
      console.log(routerProps)
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
        </>
    );
};

export default ViewTweet;
