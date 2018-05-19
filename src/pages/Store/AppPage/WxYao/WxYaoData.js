import React from 'react';
import './WxYaoData.less';
import { Tabs } from 'antd';

//
const TabPane = Tabs.TabPane;

export default class WxYaoData extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="wxYaoDataStyle">
            	<div className="wxYaoDataWrapper">
            		<Tabs defaultActiveKey="huizong">
                        <TabPane tab="汇总统计" key="huizong">
                           <div>汇总统计</div>
                        </TabPane>
                    </Tabs>
            	</div>
            </div>
        );
    }
}