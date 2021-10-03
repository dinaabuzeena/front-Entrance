import React, { Component } from 'react'
import { withAuth0 } from '@auth0/auth0-react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import FavWatch from './components/FavWatch';
import Login from './components/Login';


export class App extends Component {
  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      <>

        <Router>
          <Header/>
          <Switch>
            <Route exact path="/">
            { isAuthenticated?<Home/>:<Login/> }
            </Route>


            <Route exact path="/favWatch">
            { isAuthenticated?<FavWatch/>:<Login/> }
            </Route>
            <Footer/>
          </Switch>
        </Router>




        {/* @todo show login button and hide the list for unauthenticated users */}
        {/* @todo show logout button and show items list components for authenticated users */}
      </>
    )
  }
}

export default withAuth0(App);
