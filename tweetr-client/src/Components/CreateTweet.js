import "../App.css";
import { Link } from "react-router-dom";
import { useRef } from "react";

function CreateTweet() {
    // This is going to be a form
    // const createTweetForm = (props) => {
    //     const tweetInput = useRef(null);

    //     const createTweet = async (event) => {
    //         event.preventDefault();
    //         const tweet = tweetInput.current.value;

    //         const body = JSON.stringify({
    //             tweet
    //           });

    //           event.currentTarget.reset();

    //           try {
    //             const response = await fetch(
    //               "",
    //               {
    //                 method: "POST",
    //                 headers: {
    //                   "Content-type": "application/json",
    //                 },
    //                 body: body,
    //               }
    //             );
          
    //             props.history.push("/Feed");
    //             alert("Tweet Sent!");
    //           } catch (error) {
    //             console.error(error);
    //           }
    //     }
    // };

    return (
        // Add a nav here
        <>
        <h1>Create Tweet</h1> 
            <form onSubmit={CreateTweet} method="post">
                <label>Tweet Text:</label>
                    {/* <input type="text" name="tweet" ref={tweetInput} /> */}
                    <input type="submit" value="Send Tweet" id="submit-btn" />
            </form> 
        </>
    );
};

export default CreateTweet;