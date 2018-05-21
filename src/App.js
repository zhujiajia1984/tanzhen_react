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
import Market from './pages/Market/Market';
import Store from './pages/Store/Store';
import WxYao from './pages/Store/AppPage/WxYao/WxYao';
import WiseDsp from './pages/Store/AppPage/WiseDsp/WiseDsp';

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
                    <Route exact path="/" render={()=>(<Redirect to="/market" />)} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/index" component={Home} />
                    <Route exact path="/device" component={Device} />
                    <Route path="/market" component={Market} />
                    <Route path="/store" component={Store} />
                    <Route path="/wxYao" component={WxYao} />
                    <Route path="/wisedsp" component={WiseDsp} />
                </div>
            </Router>
        );
    }
}