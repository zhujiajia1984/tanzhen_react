import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom';
import './App.less';
import Home from './pages/Home';

// 
export default class App extends React.Component {
	constructor(props) {
		super(props);
	}

	//
	render() {
		return (
			// <Router basename="/radar">
			<Router>
                <div className="AppFontFamily">
                    <Switch>
                        <Route exact path="/" component={Home}/>
                    </Switch>
                </div>
           </Router>
		);
	}
}