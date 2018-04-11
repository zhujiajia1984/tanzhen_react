import React from 'react';
import ReactDOM from 'react-dom';
import './color.less';
import { Button } from 'antd';

ReactDOM.render(
	// <h1 className="textColor">Hello, world!222</h1>,
	<div>
	    <Button type="primary">Primary</Button>
	    <Button>Default</Button>
	    <Button type="dashed">Dashed</Button>
	    <Button type="danger">Danger</Button>
	</div>,
	document.getElementById('root')
);