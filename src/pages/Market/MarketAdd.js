import React from 'react';
import './MarketAdd.less';
import PageLayout from '../../components/PageLayout/PageLayout';

export default class MarketAdd extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
            	<PageLayout	selMenu={['营销活动']}
				>
					<div className="marketAddTitleRow">新建人群</div>
				</PageLayout>
            </div>
        );
    }
}