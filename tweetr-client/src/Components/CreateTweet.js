import "../App.css";
import { Link } from "react-router-dom";
import { useRef } from "react";

const CreateTweetForm = (props) => {
        const titleInput = useRef(null);
        const authorInput = useRef(null);
        const contentInput = useRef(null);
    
        const createTweet = async (event) => {
            event.preventDefault();
            const title = titleInput.current.value;
            const author = authorInput.current.value;
            const content = contentInput.current.value;
            const body = JSON.stringify({
                title,
                author,
                content
            });
    
            event.currentTarget.reset();
    
            try {
                const response = await fetch('http://localhost:3000/tweets',
                {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json",
                    },
                    body: body,
                }
              );
    
              props.history.push('/feed')
            } catch (error) {
                console.error(error)
            }
        }

    return (
        // Add a nav here
        <>
        <h1>Create Tweet</h1> 
            <form onSubmit={createTweet} method="post">
            <label>Tweet Title:</label>
                    <input type="text" name="title" ref={titleInput} />
                <label>Tweet Author:</label>
                    <input type="text" name="author" ref={authorInput} />
                <label>Tweet Content:</label>
                    <input type="text" name="content" ref={contentInput} />
                    <input type="submit" value="Send Tweet" id="submit-btn" />
            </form> 
        </>
    );
};

export default CreateTweetForm;