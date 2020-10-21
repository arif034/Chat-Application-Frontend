import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { render } from '@testing-library/react';

   class ChatHomePage extends Component
    {
        render()
        {
        return (
            <div><a href = "http://localhost:3000/chatHomePage">Click Me</a></div>
        )
        }
    }
    export default ChatHomePage;