import { useEffect } from "react";
import "../App.css";

function ViewTweet() {
const [tweet, setTweet] = useState([]);

  const fetchTweet = async () => {
    try {
      const res = await fetch(`https://localhost:3000/tweets/${id}`);
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