import { useContext, useState, useEffect } from 'react';
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { Card, Form, Button, Alert } from 'react-bootstrap';
import { fetchComments, sendComment } from '../http/commentAPI';
import { NavLink } from 'react-router-dom';
import { LOGIN_ROUTE } from '../utils/consts';

export const Comments = observer((props) => {
    const {device, user} = useContext(Context);
    let [ comments, setComments ] = useState([]);
    let [ userComment, setUserComment ] = useState('');

    useEffect(() => {
        fetchComments(props.deviceId).then(c => setComments(c));
        console.log(comments);
    }, []);

    function toComment() {
        console.log({text: userComment, deviceId: props.deviceId})
        sendComment({text: userComment, deviceId: props.deviceId});
    }

    return (
        <div>
            <h2>Comments</h2>
            { user.isAuth ?
            <>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Type your comment:</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Your comment..." onChange={(e) => setUserComment(e.target.value)} />
                </Form.Group>
                <Button variant="primary" size="sm" onClick={toComment}>
                    Send
                </Button>
            </>
            :
            <Alert variant='primary'>
                You need to login or register to comment this device. {' '}
                <NavLink to={process.env.PUBLIC_URL + LOGIN_ROUTE} style={{textDecoration: 'none'}}>
                    Login
                </NavLink>
            </Alert>
            }
            
            {comments.map((e, i) => 
            <Card key={i} className="mt-2">
                <Card.Body>
                    <Card.Title>{'Author: ' + e.user.username}</Card.Title>
                    <Card.Text>
                    {e.text}
                    </Card.Text>
                    <Card.Subtitle className="mb-2 text-muted">{(new Date(e.timestamp.replace(' ', 'T'))).toLocaleString()}</Card.Subtitle>
                </Card.Body>
            </Card>
            )}
            
        </div>
    );
});