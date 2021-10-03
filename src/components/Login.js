import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';

export class Login extends Component {

    render() {
       
        return (
            <>
                <Card style={{ width: '18rem' }}>

                    <Card.Body>
                        <Card.Title>LOG IN </Card.Title>
                        <Card.Text>
                            Click below to log in
                        </Card.Text>
                       <LoginButton/>
                    </Card.Body>
                </Card>
            </>
        )
    }
}

export default withAuth0(Login)
