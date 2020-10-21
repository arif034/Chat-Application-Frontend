import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ChatHomePage from './ChatHomePage';
import { render } from '@testing-library/react';
    class SignUp extends Component
    {

        constructor(props) {
            super(props);
            this.state = {firstname : ""};
            this.state = {lastname : ""};
            this.state = {region : ""};
            this.state = {email : ""};
            this.state = {username : ""};
            this.state = {password : ""};
            this.state = {confirmpassword : ""};
            this.try4 = this.try4.bind(this);
          }

        try4 = () => {
            
            fetch('Project/createnewuser',{
            method : 'POST',
            headers : {'Content-Type': 'application/json',
            'Accept': 'application/json'},
            body : JSON.stringify(this.state)
            }).then(r=> r.json().then(res => {
                if(res && (this.confirmpassword == this.password))
                {
                    console.log('User Created');
                    this.props.history.push('/chatHomePage');
                }
                else
                {
                    console.log('User Already present');
                    alert('User Already present. Please try Sign In !');
                }
            }

            ))
        }

        handleFirstnameChange = (e) => {
            this.setState({firstname: e.target.value});
         }
         handleLastnameChange = (e) => {
            this.setState({lastname: e.target.value});
         }
         handleRegionChange = (e) => {
            this.setState({region: e.target.value});
         }
         handleEmailChange = (e) => {
            this.setState({email: e.target.value});
         }
         handleUsernameChange = (e) => {
            this.setState({username: e.target.value});
         }
         handlePasswordChange = (e) => {
            this.setState({password: e.target.value});
         }
         handleConfirmpasswordChange = (e) => {
            this.setState({confirmpassword: e.target.value});
         }

        render()
        {
        return (
            <div>
                <h2>Sign Up</h2>
                <form>
                <p><input type = "text" placeholder = 'First Name' value={this.state.firstname} onChange={this.handleFirstnameChange}/></p>
                <p><input type = "text" placeholder = 'Last Name' value={this.state.lastname} onChange={this.handleLastnameChange}/></p>
                <p><input type = "text" placeholder = 'Region' value={this.state.region} onChange={this.handleRegionChange}/></p>
                <p><input type = "text" placeholder = 'Email' value={this.state.email} onChange={this.handleEmailChange}/></p>
                <p><input type = "text" placeholder = 'Username' value={this.state.username} onChange={this.handleUsernameChange}/></p>
                <p><input type = "text" placeholder = 'Password' value={this.state.password} onChange={this.handlePasswordChange}/></p>
                <p><input type = "text" placeholder = 'Confirm Password' value = {this.state.confirmpassword} onChange = {this.handleConfirmpasswordChange}/></p>
                </form>
                <div className = "container4">
                    <button id="b4" onClick ={this.try4}>Submit</button>
                    <Route exact path="/chatHomePage" component={ChatHomePage}/>
                </div>
            </div>
        );
        }
    }
    export default () => (
        <div>
           <Router>
                <Route exact path = '/signup' component={SignUp} />
                <Route exact path = "/chatHomePage" component={ChatHomePage} />
           </Router>
       </div>
      );