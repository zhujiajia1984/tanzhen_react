import React from 'react';
import {
	Layout,
	Menu,
	Icon,
	Dropdown,
	Avatar
} from 'antd';
import './PageLayout.less';
import imgLogo from '../../../assets/images/logo.png';
import PropTypes from 'prop-types';
import menu from '../../../assets/menu/menu.json';
import { Link } from 'react-router-dom';

// const
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;
const Item = Menu.Item;

//
export default class PageLayout extends React.Component {
	constructor(props) {
		super(props);
		// read collapsed
		let collapsedInit = localStorage.getItem('collapsed');
		if (!collapsedInit) {
			collapsedInit = false;
		} else {
			collapsedInit = (collapsedInit == "true") ? true : false;
		}
		// state 
		this.state = {
			collapsed: collapsedInit,
		};
	}

	// 侧边栏伸缩
	onCollapse(collapsed) {
		this.setState({ collapsed: collapsed });
		localStorage.setItem('collapsed', collapsed);
	}


	//
	render() {
		return (
			<Layout className="PageLayout">
				<Sider width={256}
					collapsible={true}
					// breakpoint="md"
					className="siderBar"
					collapsed={this.state.collapsed}
					onCollapse={this.onCollapse.bind(this)}
				>
					<div className="logo">
						<img src={imgLogo} style={{width: 32, height: 32}} />
						<h1>Wise Radar</h1>
					</div>
					<Menu theme="dark" 
						defaultSelectedKeys={this.props.selMenu}
						defaultOpenKeys={this.props.openMenu}
						mode="inline"
						style={{padding: '16px 0px'}}
					>
						{
							menu.map((item)=>{
								return (item.type=="main")
								?<Item key={item.name}>
									<Link to={item.path}>
										<Icon type={item.icon} />
										<span>{item.name}</span>
									</Link>
								</Item>
								:<SubMenu key={item.name}
									title={<span><Icon type={item.icon} /><span>{item.name}</span></span>}
								>
									{
										item.items.map((item)=>{
											return <Item key={item.name}>
													<Link to={item.path}>
														<span>{item.name}</span>
													</Link>
												</Item>
										})
									}
								</SubMenu>
							})
						}
					</Menu>
				</Sider>
				<Layout>
					<Header className="topNavi">
						<div className="topLeft">
							<span>{this.props.selMenu}</span>
						</div>
						<div className="topRight">
							<Dropdown overlay={
								<Menu>
									<Item style={{width: 160}} key="profile">
										<Icon type="user" style={{marginRight: 8}}/>个人中心
									</Item>
									<Menu.Divider />
									<Item style={{width: 160}} key="logout">
										<Icon type="logout" style={{marginRight: 8}}/>退出登录
									</Item>
								</Menu>
							}>
								<span className="dropdown-link" style={{padding: "0px 12px"}}>
									<Avatar size="small" icon="user" />
									<span style={{marginLeft: 5}}>微信昵称</span>
								</span>
							</Dropdown>
						</div>
					</Header>
					<Content style={{margin: "24px 24px 0px 24px", height: '100%'}}>
						{this.props.children}
					</Content>
					<Footer style={{ textAlign: 'center' }}>
						Ant Design ©2016 Created by Ant UED
					</Footer>
        		</Layout>
			</Layout>
		);
	}
}

// 传入参数值定义
PageLayout.propTypes = {
	children: PropTypes.element.isRequired,
	selMenu: PropTypes.array.isRequired,
	openMenu: PropTypes.array,
};
PageLayout.defaultProps = {
	selMenu: ['系统首页'],
};