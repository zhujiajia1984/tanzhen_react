import React from 'react';
import './Store.less';
import PageLayout from '../../components/PageLayout/PageLayout';
import { Menu, Card, Row, Col, Tag, message } from 'antd';
import { Route } from 'react-router-dom';
import AppDetail from './AppDetail';

// const
const { Meta } = Card;

//
export default class Store extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            wxyaoStatus: false, //是否已开通微信摇一摇
            dspStatus: false, //是否已开通dsp
        }
    }
    //
    componentDidMount() {
        let wxyaoStatus = localStorage.getItem('wxyaoStauts');
        if (wxyaoStatus) {
            this.setState({ wxyaoStatus: true });
        }
    }

    // 点击APP应用
    onAppClick(type, action) {
        switch (type) {
            case "wxyao":
                // 微信摇一摇
                if (action === "detail") {
                    // 查看详情
                    localStorage.setItem('wxYaoMenuKey', '1');
                    localStorage.setItem('appName', 'wxyao');
                    this.props.history.push("/store/appDetail");
                } else if (action === "app") {
                    // 进入应用
                    if (this.state.wxyaoStatus) {
                        // 应用已经开通
                        this.props.history.push("/wxYao/device");
                    } else {
                        // 应用还未开通
                        message.warning("请先开通应用");
                    }
                }
                break;
            case "wisedsp":
                // 新数DSP
                if (this.state.dspStatus) {
                    // 已开通
                } else {
                    // 未开通
                    localStorage.setItem('appName', 'wisedsp');
                    this.props.history.push("/store/appDetail");
                }
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <PageLayout	selMenu={['应用市场']} fullScreen={true} collapsed={true}
            	topTitle="应用市场"
			>
				<div className="storeMainStyle">
					<Menu mode="inline" 
						defaultSelectedKeys={['1']}
						style={{ width: 128, backgroundColor: '#fafafa'}}
					>
						<Menu.Item key="1">全部应用</Menu.Item>
					</Menu>
					<div className="storeContentStyle">
						<Route path={this.props.match.url + '/appDetail'} component={AppDetail} />
						{
							(this.props.match.isExact)?
							<div className="storeContent">
								<div>
									<img src="https://radar.weiquaninfo.cn/radar/assets/images/dsp1.jpg"
										style={{width: '100%', height: 200}} 
									/>
								</div>
								<div className="storeBody">
									<div className="storeTitle">全部应用</div>
									<div>
										<Row gutter={{xs: 8, sm: 16, md: 24}} >
											<Col xs={24} sm={24} md={12} lg={12} xl={8}>
												<Card bordered={true} className="storeCardItem"
													hoverable={true}
													actions={[
														<div key="1" onClick={this.onAppClick.bind(this, "wxyao", "detail")}>
															<span style={{marginLeft: 8}}>查看详情</span>
														</div>,
														<div key="2" onClick={this.onAppClick.bind(this, "wxyao", "app")}>
															<span style={{marginLeft: 8}}>进入应用</span>
														</div>,
														]}
												>
													<Meta className="appMetaStyle"
														avatar={
															<img src="https://radar.weiquaninfo.cn/radar/assets/images/wxyao_icon.png"
																style={{width: 48, height: 48, borderRadius: 48}}
															/>
														}
														title="微信摇一摇"
														description="打开蓝牙，摇出优惠"
													/>
													<div className="appStatus">
														{(this.state.wxyaoStatus)?"已开通":"未开通"}
													</div>
													<div className="appPayStatus">
														<Tag color="#52c41a">免费</Tag>
													</div>
												</Card>
											</Col>
											<Col xs={24} sm={24} md={12} lg={12} xl={8}>
												<Card bordered={true} className="storeCardItem"
													hoverable={true}
													actions={[
														<div key="1" onClick={this.onAppClick.bind(this, "wisedsp")}>
															<span style={{marginLeft: 8}}>查看详情</span>
														</div>,
														<div key="2">
															<span style={{marginLeft: 8}}>进入应用</span>
														</div>,
														]}
												>
													<Meta className="appMetaStyle"
														avatar={
															<img src="https://radar.weiquaninfo.cn/radar/assets/images/dsp_icon.png"
																style={{width: 48, height: 48, borderRadius: 48}}
															/>
														}
														title="新数DSP"
														description="数据互联，用户共享"
													/>
													<div className="appStatus">{(this.state.dspStatus)?"已开通":"未开通"}</div>
													<div className="appPayStatus">
														<Tag color="#52c41a">免费</Tag>
													</div>
												</Card>
											</Col>
											<Col xs={24} sm={24} md={12} lg={12} xl={8}>
												<Card bordered={true} className="storeCardItem"
													hoverable={true}
													actions={[
														<div key="1">
															<span style={{marginLeft: 8}}>敬请期待</span>
														</div>
														]}
												>
													<Meta className="storeMore"
														avatar={
															<img src="https://radar.weiquaninfo.cn/radar/assets/images/quote_icon.png"
																style={{width: 48, height: 48, borderRadius: 48}}
															/>
														}
														description="更多应用，敬请期待"
													/>
												</Card>
											</Col>
										</Row>
									</div>
								</div>
							</div>:
							""
						}
						
					</div>
				</div>
			</PageLayout>
        );
    }
}