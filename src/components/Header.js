import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';



class Header extends Component {
    render() {
        const { isAuthenticated } = this.props.auth0;
        return (
            <>

                <Navbar bg="dark" variant="dark">

                    <Navbar.Brand >My Fav Watch</Navbar.Brand>

                    <Link to="/">Home</Link>
                    <Link to="/favWatch">FavWatch</Link>
                    {isAuthenticated ? <LogoutButton /> : <LoginButton />}


                </Navbar>


            </>
        )
    }
}

export default Header
