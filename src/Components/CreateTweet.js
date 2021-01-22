import React from "react"
import "../App.css";
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
        <>
            <div id="create-tweet">
                        <h2>Tritillo Novus</h2>
                    <form onSubmit={createTweet} method="post">
                        <label>Titulus:</label>
                            <input type="text" name="title" ref={titleInput} />
                            <br />
                           <label>Auctor:</label>
                                <input type="text" name="author" ref={authorInput} />
                                <br />
                            <label>Contentus: </label>
                                <input  type="text" name="content" ref={contentInput} />
                                <br />
                            <button>MITTE</button>
                            <br />
                    </form>

            </div>
        </>
    );
};

export default CreateTweetForm;