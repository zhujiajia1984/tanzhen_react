import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect
} from 'react-router-dom';
import './App.less';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Device from './pages/Device/Device';

// 
export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    //
    render() {
        // <Router>
        // <Router basename="/radar/shop">
        return (
            <Router>
                <div className="AppFontFamily">
                    <Route exact path="/" render={()=>(<Redirect to="/login" />)} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/index" component={Home} />
                    <Route exact path="/device" component={Device} />
                </div>
            </Router>
        );
    }
}