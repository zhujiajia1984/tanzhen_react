import React from 'react';
import './StorePhone.less';
import PageLayout from '../../components/PageLayout/PageLayout';
import { Menu, Card, Row, Col, Tag, } from 'antd';

// const
const { Meta } = Card;

//
export default class StorePhone extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{
                    title: '电话营销',
                    desp: '雷达电销，简单实用',
                    status: '已开通',
                    tag: '运营',
                    icon: 'https://radar.weiquaninfo.cn/radar/assets/images/phone_icon.png'
                },
                {
                    title: '电话营销',
                    desp: '雷达电销，简单实用',
                    status: '已开通',
                    tag: '代理商',
                    icon: 'https://radar.weiquaninfo.cn/radar/assets/images/phone_icon.png'
                }, {
                    title: '电话营销',
                    desp: '雷达电销，简单实用',
                    status: '已开通',
                    tag: '广告主',
                    icon: 'https://radar.weiquaninfo.cn/radar/assets/images/phone_icon.png'
                },
                {
                    title: '精准短信',
                    desp: '短信营销，精准触达',
                    status: '已开通',
                    tag: '精准短信新数运营',
                    icon: 'https://radar.weiquaninfo.cn/radar/assets/images/sms_icon.png'
                },
                {
                    title: '精准短信',
                    desp: '短信营销，精准触达',
                    status: '已开通',
                    tag: '精准短信代理商',
                    icon: 'https://radar.weiquaninfo.cn/radar/assets/images/sms_icon.png'
                },
                {
                    title: '精准短信',
                    desp: '短信营销，精准触达',
                    status: '已开通',
                    tag: '精准短信广告主',
                    icon: 'https://radar.weiquaninfo.cn/radar/assets/images/sms_icon.png'
                },
                {
                    title: '微信摇一摇',
                    desp: '打开蓝牙，摇出优惠',
                    status: '已开通',
                    tag: '微信摇一摇广告主',
                    icon: 'https://radar.weiquaninfo.cn/radar/assets/images/wxyao_icon.png'
                },
            ],
        }
    }

    //
    onDetail(title) {
        if (title == "精准短信") {
            this.props.history.push("/phoneAppDetail", { type: 'sms' });
        }
        if (title == "电话营销") {
            this.props.history.push("/phoneAppDetail", { type: 'phone' });
        }

    }
    onEnterApp(type) {
        switch (type) {
            case "运营":
                this.props.history.push("/numberManage");
                break;
            case "代理商":
                this.props.history.push("/agentNumberManage");
                break;
            case "广告主":
                this.props.history.push("/clientPhoneSale");
                break;
            case "精准短信广告主":
                this.props.history.push("/clientSmsSend");
                break;
            case "精准短信新数运营":
                this.props.history.push("/marketSmsSend");
                break;
            case "精准短信代理商":
                this.props.history.push("/agentSmsSend");
                break;
            case "微信摇一摇广告主":
                localStorage.setItem('wxYaoMenuKey', '1');
                this.props.history.push("/wxYao");
                break;
            default:
                break;
        }
    }

    //
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
                        <div className="storePhoneBody">
                            <div className="wxYaoTitle">
                                <div className="wxYaoTitleArea">
                                    <span style={{fontSize: 16, marginBottom: 8, flex: 1}}>全部应用</span>
                                </div>
                                <span style={{color: 'rgba(0, 0, 0, 0.45)', marginBottom: 24}}>
                                    可显示、开通并管理全部应用。
                                </span>
                            </div>
                            <Row gutter={{xs: 8, sm: 16, md: 24}} >
                                {
                                    this.state.data.map((item, index)=>(
                                        <Col xs={24} sm={24} md={12} lg={12} xl={8} key={index}>
                                            <Card bordered={true} className="storeCardItem"
                                                hoverable={true} 
                                                actions={[
                                                    <div key="1" onClick={this.onDetail.bind(this, item.title)}>
                                                        <span style={{marginLeft: 8}}>查看详情</span>
                                                    </div>,
                                                    <div key="2" onClick={this.onEnterApp.bind(this, item.tag)}>
                                                        <span style={{marginLeft: 8}}>进入应用</span>
                                                    </div>,
                                                    ]}
                                            >
                                                <Meta className="appMetaStyle"
                                                    avatar={
                                                        <img src={item.icon}
                                                            style={{width: 48, height: 48, borderRadius: 48}}
                                                        />
                                                    }
                                                    title={item.title}
                                                    description={item.desp}
                                                />
                                                <div className="appStatus">
                                                    {item.status}
                                                </div>
                                                <div className="appPayStatus">
                                                    <Tag color="#52c41a">{item.tag}</Tag>
                                                </div>
                                            </Card>
                                        </Col>
                                    ))
                                }
                            </Row>
                        </div>
                    </div>
                </div>
            </PageLayout>
        );
    }
}