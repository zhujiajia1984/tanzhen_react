import React from 'react';
import './PhoneAppDetail.less';
import PageLayout from '../../components/PageLayout/PageLayout';
import { Menu, Button } from 'antd';

//
export default class PhoneAppDetail extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<PageLayout selMenu={['应用市场']} fullScreen={true} collapsed={true}
            	topTitle="应用市场">
				<div className="storePhoneStyle">
					<Menu mode="inline" 
						defaultSelectedKeys={['1']}
						style={{ width: 128, backgroundColor: '#fafafa'}}
					>
						<Menu.Item key="1">全部应用</Menu.Item>
					</Menu>
					<div className="storePhoneContent">
						<div>
							<div className="wxYaoTitle">
								<div className="wxYaoTitleArea">
									<span style={{fontSize: 16, marginBottom: 8, flex: 1}}>应用详情</span>
								</div>
								<span style={{color: 'rgba(0, 0, 0, 0.45)', marginBottom: 24}}>
									可查询应用详情。
								</span>
							</div>
							<div className="appDetailContent" style={{marginTop: 0}}>
	                            <div className="headerContent">
	                                <div className="leftArea">
	                                    <img src="https://radar.weiquaninfo.cn/radar/assets/images/phone_icon.png"
	                                        style={{width: 64, height: 64, borderRadius: 48}}
	                                    />
	                                <div className="appNameArea">
	                                    <div className="appNameAreaContent">
	                                        <span style={{fontSize: 14, fontWeight: 'bold', marginRight: 16}}>
	                                        	电话营销
	                                        </span>
	                                    </div>
	                                        <span style={{color: '#8c8c8c'}}>已开通</span>
	                                    </div>
	                                </div>
	                                <div className="rightArea">
	                                	<Button type="primary">进入应用</Button>
	                                </div>
	                            </div>
                        	</div>
                        	<div className="detailArea">
                            	<div>
			                        <div style={{fontSize: 16, fontWeight: 'bold'}}>使用条件：</div>
			                        <div className="detailcontent1">
			                            <div>【1】开通要求：必须先向代理商申请小号并采购通话时长后才能开通电话营销应用；</div>
			                            <div>【2】费用构成：小号月租费 + 通话费（按分钟）；</div>
			                            <div>【3】注意事项：通话费指的是小号服务费，不包含电话费用，电话费用单独和运营商结算；</div>
			                        </div>
			                    </div>
			                    <div>
			                        <div style={{fontSize: 16, fontWeight: 'bold'}}>功能简介：</div>
			                        <div className="detailcontent1">
			                        	<div>【1】导入人群：导入需要营销的人群后系统自动转化出可以电话营销的人群；</div>
			                            <div>【2】绑定营销电话：需要把小号和营销电话绑定，呼出都必须使用绑定的号码；</div>
			                            <div>【3】绑定消费者电话：需要把小号和消费者电话绑定，呼出号码仍为小号；</div>
			                            <div>【4】消费者回呼：即使已经解绑的消费者，仍然可以通过小号回呼；</div>
			                        </div>
			                    </div>
                        	</div>
						</div>
					</div>
				</div>
			</PageLayout>
		);
	}
}
