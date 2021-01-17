import "../App.css";
import { useRef } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

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
            <div className="container d-flex justify-content-center">
                <Card style={{width: "400px"}} border="primary" className="m-3 shadow">
                    <Card.Body>
                    <Card.Title className='text-center font-weight-bold'>
                        Create Tweet
                    </Card.Title> 
                    <Form onSubmit={createTweet} method="post">
                        <Form.Label>Tweet Title:</Form.Label>
                                <Form.Control type="text" name="title" ref={titleInput} />
                            <Form.Label>Tweet Author: </Form.Label>
                                <Form.Control  type="text" name="author" ref={authorInput} />
                            <Form.Label>Tweet Content: </Form.Label>
                                <Form.Control  type="text" name="content" ref={contentInput} />
                            <Button className="mt-4 float-right" type="submit"  id="submit-btn" >Send Tweet </Button>
                    </Form>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
};

export default CreateTweetForm;