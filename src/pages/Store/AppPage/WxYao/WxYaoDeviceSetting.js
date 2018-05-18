import React from 'react';
import { Card, Icon, Modal, Row, Col, Select, Button } from 'antd';

//
const { Meta } = Card;
const Option = Select.Option;

//
export default class WxYaoDeviceSetting extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                visible: false,
                confirmLoading: false,
            }
        }

        //
        onAddPage() {
            this.setState({ visible: true });
        }
        onCloseDlg() {
            this.setState({ visible: false });
        }
        onConfirmDlg() {
            // 保存配置
            this.setState({ confirmLoading: true });
            setTimeout(() => {
                this.setState({ visible: false, confirmLoading: false });
            }, 1000);

        }
        onBackPage() {
            this.props.history.push("/wxYao/device");
        }
        onWxYaoPage() {
            localStorage.setItem('wxYaoMenuKey', '2');
            this.props.history.push("/wxYao/page");
        }

        //
        render() {
                return (
                    <div className="wxYaoDeviceSetting">
            	<div className="wxYaoTitle">
					<div className="wxYaoTitleArea">
						<span style={{fontSize: 16, marginBottom: 8, flex: 1}}>页面配置</span>
					</div>
					<span style={{color: 'rgba(0, 0, 0, 0.45)', marginBottom: 24}}>
						可绑定页面或解绑页面，基础版最多可配置两个页面。
					</span>
				</div>
				<Modal
						title="绑定页面"
						visible={this.state.visible}
						onCancel={this.onCloseDlg.bind(this)}
						onOk={this.onConfirmDlg.bind(this)}
						cancelText="取消"
						okText="确定"
						confirmLoading={this.state.confirmLoading}
					>
						<Row gutter={8} style={{marginBottom: 8}}>
							<Col span={6} style={{textAlign: 'right'}}>
								选择页面：
							</Col>
							<Col span={18}>
								<Select defaultValue="1" style={{ width: '100%' }}>
									<Option value="1">未选择</Option>
									<Option value="2">新数网络</Option>
									<Option value="3">新数雷达</Option>
								</Select>
							</Col>
						</Row>
						<Row gutter={8}>
							<Col span={6} style={{textAlign: 'right'}}>
							</Col>
							<Col span={18}>
								<span style={{color: '#bfbfbf'}}>还没页面？</span>
								<a href="javascript:;" onClick={this.onWxYaoPage.bind(this)}>去创建页面</a>
							</Col>
						</Row>
					</Modal>
				<div className="wxYaoDeviceSettingBody">
					<Card
						style={{ width: 500, marginRight: 100}}
						actions={[
							<div key="1" onClick={this.onAddPage.bind(this)}>
								<span style={{marginLeft: 8}}>绑定页面</span>
							</div>,
							<div key="2">
								<span style={{marginLeft: 8}}>取消绑定</span>
							</div>
						]}
					>
						<Meta
							avatar={
								<img src="https://radar.weiquaninfo.cn/radar/assets/images/logo-120-120.jpg" 
									style={{width: 120, height: 120}}
								/>
							}
							title="新数网络"
							description={
								(<div>
									<div style={{paddingBottom: 8}}>数字广告营销</div>
									<div>内容链接：http://www.wisemdia.cn</div>
								</div>)
							}
						/>
					</Card>
					<Card
						style={{ width: 500 }}
						actions={[
							<div key="1" onClick={this.onAddPage.bind(this)}>
								<span style={{marginLeft: 8}}>绑定页面</span>
							</div>,
                    <div key="2">
								<span style={{marginLeft: 8}}>取消绑定</span>
							</div>
                ]
            } >
            <Meta
							avatar={
								<div className="wxYaoCardBg">
									<span style={{color: "#8c8c8c"}}>无</span>
								</div>
				        }
				        title = "主标题"
				        description = "副标题" /
            >
            <
            /Card>
                        
            < /
        div > 
        	<Button style={{marginTop: 24}} onClick={this.onBackPage.bind(this)}>返回</Button>
        < /
        div >
    );
}
}