import React from 'react';
import './Store.less';
import PageLayout from '../../components/PageLayout/PageLayout';

// const

//
export default class Store extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <PageLayout	selMenu={['应用市场']} fullScreen={true} collapsed={true}
			>
				<div >
					<span>应用市场</span>
				</div>
			</PageLayout>
        );
    }
}