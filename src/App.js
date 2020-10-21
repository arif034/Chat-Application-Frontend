import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';
import { render } from '@testing-library/react';

class App extends Component
{
  constructor(props) {
    super(props);
    this.try1 = this.try1.bind(this);
    this.try2 = this.try2.bind(this);
  }

  try1 = () => {
    this.props.history.push('/signin');
}
try2 = () => {
  this.props.history.push('/signup');
}
  render()
  {
      return (
        <div className="App">
          <div className="container">
              <button id="b1" onClick ={this.try1}>Sign In</button>
              <Route exact path="/signin" component={SignIn}/>
          </div>
          <div className="container2">
              <button id="b2" onClick ={this.try2}>Sign Up</button>
              <Route exact path="/signup" component={SignUp}/>
          </div>
        </div>
      );
}
}
export default () => (
  <div>
     <Router>
          <Route exact path = "/" component={App} />
          <Route exact path = "/signup" component={SignUp} />
          <Route exact path = "/signin" component={SignIn} />
     </Router>
 </div>
);