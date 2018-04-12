import React from 'react';
import PageLayout from '../../components/PageLayout/PageLayout';

//
export default class Device extends React.Component {
	constructor(props) {
		super(props);
	}

	//
	render() {
		return (
			<div>
				<PageLayout	selMenu={['雷达管理']}
				>
				</PageLayout>
			</div>
		);
	}
}