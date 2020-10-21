import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ChatHomePage from './ChatHomePage';
import { render } from '@testing-library/react';
    class SignIn extends Component
    {
         constructor(props) {
    super(props);
    this.state = {username : ""};
    this.state = {password : ""};
    this.try3 = this.try3.bind(this);
  }
        try3 = () => {
            
            fetch('Project/validate',{
            method : 'POST',
            headers : {'Content-Type': 'application/json',
            'Accept': 'application/json'},
            body : JSON.stringify(this.state)
            }).then(r=> r.json().then(res => {
                if(res)
                {
                    console.log('User Valid');
                    this.props.history.push('/chatHomePage');
                }
                else
                {
                    console.log('User Invalid');
                    alert('User is Invalid. Please try with valid credentials !');
                }
            }

            ))
        }
        handleUsernameChange = (e) => {
            this.setState({username: e.target.value});
         }
         handlePasswordChange = (e) => {
            this.setState({password: e.target.value});
         }
        render()
        {
        return (
            <div>
                <h1>Sign In Page</h1>
                    <form>
                    <p><input type = "text" placeholder = "Username" value={this.state.username} onChange={this.handleUsernameChange}/></p>
                    <p><input type = "text" placeholder = "Password" value={this.state.password}  onChange={this.handlePasswordChange}/></p>
                    </form>
                    <div className="container3">
                    <button id="b3" onClick ={this.try3}>Sign In</button>
                    <Route exact path="/chatHomePage" component={ChatHomePage}/>
                    </div>   
            </div>
        );
        }
    }
    export default () => (
        <div>
           <Router>
                <Route exact path = "/signin" component={SignIn} />
                <Route exact path = "/chatHomePage" component={ChatHomePage} />
           </Router>
       </div>
      );




    //   axios.get('Project/fetch?id=3')
	//  		.then(response => {
	//  			console.log(response)
	//  			this.setState({ posts: response.data })
	//  		})
	//  		.catch(error => {
    //      console.log(error)
    //      this.setState({errorMsg: 'Error retrieving data'})
	//  		})