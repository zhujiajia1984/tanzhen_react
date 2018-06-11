import React from 'react';
import './PhoneAppDetail.less';
import PageLayout from '../../components/PageLayout/PageLayout';
import { Menu, Button } from 'antd';

//
export default class PhoneAppDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: 'phone', //电话营销或精准短信
        }
    }

    componentDidMount() {
        if (typeof(this.props.location.state) != "undefined") {
            switch (this.props.location.state.type) {
                case 'sms':
                    this.setState({ type: "sms" });
                    break;
                case 'phone':
                    this.setState({ type: "phone" });
                    break;
                default:
                    break;
            }
        }
    }

    render() {
        let iconUrl = '';
        if (this.state.type == 'sms') {
            iconUrl = 'https://radar.weiquaninfo.cn/radar/assets/images/sms_icon.png';
        } else {
            iconUrl = 'https://radar.weiquaninfo.cn/radar/assets/images/phone_icon.png';
        }
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
	                                    <img src={iconUrl}
	                                        style={{width: 64, height: 64, borderRadius: 48}}
	                                    />
	                                <div className="appNameArea">
	                                    <div className="appNameAreaContent">
	                                        <span style={{fontSize: 14, fontWeight: 'bold', marginRight: 16}}>
	                                        	{
	                                        		this.state.type == 'sms' && '精准短信'
	                                        	}
	                                        	{
	                                        		this.state.type == 'phone' && '电话营销'
	                                        	}
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
			                        {
                                		this.state.type == 'phone' && 
                                		<div className="detailcontent1">
				                            <div>【1】开通要求：必须先向代理商申请小号并采购通话时长后才能开通电话营销应用；</div>
				                            <div>【2】费用构成：小号月租费 + 通话费（按分钟）；</div>
				                            <div>【3】注意事项：拨打一个小号前，请先绑定用户手机号，一次只能绑定一个手机号。；</div>
				                        </div>
                                	}
                                	{
                                		this.state.type == 'sms' &&
                                		<div className="detailcontent1">
				                            <div>【1】开通要求：必须先向代理商提交资质文件并采购短信；</div>
				                            <div>【2】计费规则：70字内（含70字）计一条，超过70字，按67字/条计费；</div>
				                            <div>【3】群发注意：每次群发最多100个；</div>
				                        </div>
                                	}
			                    </div>
			                    <div style={{fontSize: 16, fontWeight: 'bold'}}>内容规则：</div>
			                        {
                                		this.state.type == 'sms' && 
                                		<div className="detailcontent1">
				                            <div>【1】签名内容为公司或品牌名称，字数要求2-12个字符；</div>
				                            <div>【2】邀请注册、邀请成为会员、邀请加微信、加QQ群的商业性信息不能发送；</div>
				                            <div>【3】黄、赌、毒犯法等国家法律法规严格禁止的内容不能发送；</div>
				                            <div>【4】包含“股票加群、购物加群、集资贷款、改分、代办大额信用卡、信用卡提额”等疑似诈骗或类似的信息不能发送；</div>
				                        	<div>【5】超链接地址请写在短信模板中，便于审核；</div>
				                        </div>
                                	}
			                    <div>
			                        <div style={{fontSize: 16, fontWeight: 'bold'}}>功能简介：</div>
			                        {
                                		this.state.type == 'phone' && 
                                		<div className="detailcontent1">
				                        	<div>【1】人群转化：导入需要营销的人群后系统自动转化出可以短信营销的人群；</div>
				                            <div>【2】绑定商家电话：需要把小号和商家营销电话绑定，呼出都必须使用绑定的号码（支持固话）；</div>
				                            <div>【3】绑定用户电话：需要把小号和用户电话绑定，呼出号码仍为小号；</div>
				                            <div>【4】消费者回呼：即使已经解绑的消费者，仍然可以通过小号回呼；</div>
				                        </div>
                                	}
                                	{
                                		this.state.type == 'sms' &&
                                		<div className="detailcontent1">
				                        	<div>【1】人群转化：导入需要营销的人群后系统自动转化出可以短信营销的人群；</div>
				                        </div>
                                	}
			                    </div>
                        	</div>
						</div>
					</div>
				</div>
			</PageLayout>
        );
    }
}