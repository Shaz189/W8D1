import React from "react";
import GreetingContainer from './greeting/greeting_container';
import { HashRouter, Link, Route } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import BenchIndexContainer from './benches/bench_index_container';
import SearchContainer from './search/search_container';


const App = () => {
  return (
    <div>
      <section>
        <h1>BenchBnB</h1>
        <GreetingContainer />
        <Link to="/benches">Check Out Some Benches</Link>
      </section>
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <Route exact path="/" component={SearchContainer} />
    </div>
  );
};

export default App;
