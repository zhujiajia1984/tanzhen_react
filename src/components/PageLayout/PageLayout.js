import React from 'react';
import { Layout, Menu, Icon, Breadcrumb } from 'antd';
import './PageLayout.less';
import imgLogo from '../../../assets/images/logo.png';

// const
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

//
export default class PageLayout extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			collapsed: false,
		};
	}

	// 侧边栏伸缩
	onCollapse(collapsed) {
		this.setState({ collapsed: collapsed });
	}

	//
	render() {
		return (
			<Layout className="PageLayout">
				<Sider width={256}
					collapsible={true}
					// breakpoint="md"
					className="siderBar"
					onCollapse={this.onCollapse.bind(this)}
					collapsed={this.state.collapsed}
					// trigger={null}
				>
					<div className="logo">
						<img src={imgLogo} style={{width: 32, height: 32}} />
						{
							(this.state.collapsed)?'':<h1>Wise Radar</h1>
						}
					</div>
					<Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" style={{padding: '16px 0px'}}>
						<Menu.Item key="1">
			              <Icon type="pie-chart" />
			              <span>Option 1</span>
			            </Menu.Item>
			            <SubMenu
			              key="sub1"
			              title={<span><Icon type="user" /><span>User</span></span>}
			            >
			              <Menu.Item key="3">Tom</Menu.Item>
			              <Menu.Item key="4">Bill</Menu.Item>
			              <Menu.Item key="5">Alex</Menu.Item>
			            </SubMenu>
					</Menu>
				</Sider>
				<Layout>
					<Header style={{ background: '#fff', padding: 0 }}>
						abc
					</Header>
					<Content style={{ margin: '0 16px' }}>
						<Breadcrumb style={{ margin: '16px 0' }}>
							<Breadcrumb.Item>User</Breadcrumb.Item>
							<Breadcrumb.Item>Bill</Breadcrumb.Item>
						</Breadcrumb>
						<div style={{ padding: 24, background: '#fff', minHeight: 360, marginBottom: 500}}>
							Bill is a cat.
						</div>
					</Content>
					<Footer style={{ textAlign: 'center' }}>
						Ant Design ©2016 Created by Ant UED
					</Footer>
        		</Layout>
			</Layout>
		);
	}
}