import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = (props) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      <Link to="/login">Login</Link><br/>
      <Link to="/signup">Sign up!</Link>
    </nav>
  );
  const personalGreeting = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Greetings {props.currentUser.username}!</h2>
      <button className="header-button" onClick={props.logout}>Log Out</button>
    </hgroup>
  );
  return props.currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;
