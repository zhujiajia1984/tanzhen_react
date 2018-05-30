import React from 'react';
import './ChargeManage.less';
import PageLayout from '../../../../components/PageLayout/PageLayout';
import { Menu, Card, Row, Col, } from 'antd';

//
export default class ChargeManage extends React.Component {
	constructor(props) {
		super(props);
	}

	onMenu({ item, key, keyPath }) {
        switch (key) {
            case "1":
                // 小号管理
                this.props.history.push("/numberManage");
                break;
            case "2":
                // 充值管理
                this.props.history.push("/chargeManage");
                break;
            default:
                break;
        }
    }

	render() {
		return (
			<PageLayout selMenu={['应用市场']} fullScreen={true} collapsed={true}
            	topTitle="电话营销">
				<div className="wxYaoMainStyle">
					<Menu mode="inline" 
                        defaultSelectedKeys={['2']}
                        style={{ width: 128, backgroundColor: '#fafafa'}}
                        onClick={this.onMenu.bind(this)}
                    >
                        <Menu.Item key="1">小号管理</Menu.Item>
                        <Menu.Item key="2">充值管理</Menu.Item>
                    </Menu>
				</div>
			</PageLayout>
		);
	}
}
