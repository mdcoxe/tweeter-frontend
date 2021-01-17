import React from "react"
import "../App.css";
import { useRef } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const UpdateTweetForm = (routerProps) => {
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
            const response = await fetch(`http://localhost:3000/tweets/${routerProps.match.params.id}`,
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
            <div className="container d-flex justify-content-center">
                <Card style={{width: "400px"}} border="primary" className="m-3 shadow">
                    <Card.Body>
                    <Card.Title className='mx-3 text-center font-weight-bold'>
                        Update Tweet
                    </Card.Title >
                    <Form onSubmit={updateTweet} method="put">
                        <Form.Label>Tweet Title:</Form.Label>
                            <Form.Control type="text" name="title" ref={updateTitleInput} />
                        <Form.Label>Tweet Author:</Form.Label>
                            <Form.Control type="text" name="author" ref={updateAuthorInput} />
                        <Form.Label>Tweet Content:</Form.Label>
                            <Form.Control type="text" name="content" ref={updateContentInput} />
                        <Button className="mt-4 float-right" type="submit" value="Update Tweet" id="submit-btn">Update tweets
                        </Button>
                    </Form> 
                    </Card.Body>
                </Card>
            </div>
        </>
    );
};

export default UpdateTweetForm;