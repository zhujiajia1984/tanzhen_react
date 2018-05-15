import React from 'react';
import './Store.less';
import PageLayout from '../../components/PageLayout/PageLayout';
import { Menu, Card, Row, Col } from 'antd';

// const
const { Meta } = Card;

//
export default class Store extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
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
										<Col xs={24} sm={24} md={24} lg={12} xl={6}>
											<Card bordered={true} className="storeCardItem"
												hoverable={true}
												cover={
													<div className="wxyao_cover">
														<img src="https://radar.weiquaninfo.cn/radar/assets/images/wxyao_icon.png"
															style={{width: 64, height: 64}}/>
														<span>微信 | 摇一摇周边</span>
													</div>
												}
											>
												<Meta
													title="微信摇一摇"
													description="打开蓝牙，摇出优惠"
												/>
											</Card>
										</Col>
										<Col xs={24} sm={24} md={24} lg={12} xl={6}>
											<Card bordered={true} className="storeCardItem"
												hoverable={true}
												cover={
													<div className="wxyao_cover">
														<img src="https://radar.weiquaninfo.cn/radar/assets/images/dsp_icon.png"
															style={{width: 64, height: 64}}/>
														<span>新数 | DSP互联</span>
													</div>
												}
											>
												<Meta
													title="新数DSP"
													description="数据互联，用户共享"
												/>
											</Card>
										</Col>
										<Col xs={24} sm={24} md={24} lg={12} xl={6}>
											<Card bordered={true} className="storeCardItem"
												hoverable={true}
												cover={
													<div className="wxyao_cover quote_cover">
														<img src="https://radar.weiquaninfo.cn/radar/assets/images/quote_icon.png"
															style={{width: 64, height: 64}}/>
														<span>更多应用，敬请期待</span>
													</div>
												}
											>
												<Meta
													title="-"
													description="-"
												/>
											</Card>
										</Col>
										<Col xs={24} sm={24} md={24} lg={12} xl={6}>
											<Card bordered={true} className="storeCardItem"
												hoverable={true}
												cover={
													<div className="wxyao_cover quote_cover">
														<img src="https://radar.weiquaninfo.cn/radar/assets/images/quote_icon.png"
															style={{width: 64, height: 64}}/>
														<span>更多应用，敬请期待</span>
													</div>
												}
											>
												<Meta
													title="-"
													description="-"
												/>
											</Card>
										</Col>
									</Row>
								</div>
							</div>
						</div>
					</div>
				</div>
			</PageLayout>
        );
    }
}