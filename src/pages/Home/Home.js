import React from 'react';
import PageLayout from '../../components/PageLayout/PageLayout';

//
export default class Home extends React.Component {
	constructor(props) {
		super(props);
	}

	//
	render() {
		return (
			<div>
				<PageLayout	selMenu={['系统首页']}
				>
				</PageLayout>
			</div>
		);
	}
}