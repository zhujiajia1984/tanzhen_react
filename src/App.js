import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom';
import './App.less';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';

// 
export default class App extends React.Component {
	constructor(props) {
		super(props);
	}

	//
	render() {
		// <Router>
		// <Router basename="/radar">
		return (
			<Router>
                <div className="AppFontFamily">
                    <Switch>
                        <Route exact path="/" component={Login}/>
                        <Route exact path="/index" component={Home}/>
                    </Switch>
                </div>
           </Router>
		);
	}
}