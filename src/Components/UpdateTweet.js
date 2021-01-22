import React from "react"
import "../App.css";
import { useRef } from 'react'

const UpdateTweetForm = (routerProps) => {
    const url = "https://tweetr-backend.herokuapp.com"
    const updateTitleInput = useRef(null);
    const updateAuthorInput = useRef(null);
    const updateContentInput = useRef(null);

    const updateTweet = async (event) => {
        event.preventDefault();
        const title = updateTitleInput.current.value;
        const author = updateAuthorInput.current.value;
        const content = updateContentInput.current.value;
        const body = JSON.stringify({
            title,
            author,
            content
        });

        event.currentTarget.reset();

        try {
            const response = await fetch(`${url}/tweets/${routerProps.match.params.id}`,
            {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                },
                body: body,
            }
          );

          routerProps.history.push('/feed')
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            <div id="create-tweet">
                        <h2>Tritillo Renovatio</h2>
                    <form onSubmit={updateTweet} method="post">
                        <label>Titulus:</label>
                            <input type="text" name="title" ref={updateTitleInput} />
                            <br />
                           <label>Auctor:</label>
                                <input type="text" name="author" ref={updateAuthorInput} />
                                <br />
                            <label>Contentus: </label>
                                <input  type="text" name="content" ref={updateContentInput} />
                                <br />
                            <button>MITTE</button>
                            <br />
                    </form>
            </div>
        </>
    );
};

export default UpdateTweetForm;