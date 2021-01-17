import "../App.css";
import { useRef } from 'react'

const UpdateTweetForm = (props) => {
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
            const response = await fetch(``,
            {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                },
                body: body,
            }
          );

          props.history.push('/tweets')
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
        <h1>Update Tweet</h1>
        <form onSubmit={updateTweet} method="post">
                <label>Tweet Title:</label>
                    <input type="text" name="title" ref={updateTitleInput} />
                <label>Tweet Author:</label>
                    <input type="text" name="author" ref={updateAuthorInput} />
                <label>Tweet Content:</label>
                    <input type="text" name="content" ref={updateContentInput} />
                <input type="submit" value="Update Tweet" id="submit-btn" />
            </form> 
        </>
    );
};

export default UpdateTweetForm;