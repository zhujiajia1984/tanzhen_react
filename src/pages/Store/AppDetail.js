import React from 'react';
import './AppDetail.less';
import { Tag, Button } from 'antd';

// 
export default class AppDetail extends React.Component {
    constructor(props) {
        super(props);
        let appName = localStorage.getItem('appName');
        this.state = {
            appName: appName,
        }
    }

    // 初始化
    componentDidMount() {

    }

    //
    render() {
        let imgUrl = "";
        let appTitle = "";
        let appName = this.state.appName;
        let tag = null;
        let content = null;
        if (appName) {
            if (appName === "wxyao") {
                imgUrl = "https://radar.weiquaninfo.cn/radar/assets/images/wxyao_icon.png";
                appTitle = "微信摇一摇";
                tag = <Tag color="#fa8c16">限时免费</Tag>;
                content = <div>
                    <div>
                        <div style={{fontSize: 16, fontWeight: 'bold'}}>使用条件：</div>
                        <div className="detailcontent1">
                            <div>【1】设备型号要求：必须使用R2型号的设备（含有蓝牙模块），如果不清楚可以询问相关代理商；</div>
                            <div>【2】试用免费：开通后可免费试用一个月；</div>
                        </div>
                    </div>
                    <div>
                        <div style={{fontSize: 16, fontWeight: 'bold'}}>功能简介：</div>
                        <div className="detailcontent2">
                            <img src="https://radar.weiquaninfo.cn/radar/assets/images/wxyaojieshao.png" />
                        </div>
                    </div>
                </div>;
            } else if (appName === "wisedsp") {
                imgUrl = "https://radar.weiquaninfo.cn/radar/assets/images/dsp_icon.png";
                appTitle = "新数DSP";
                tag = <Tag color="#52c41a">免费</Tag>;
            }
        }
        return (
            <div className="appDetailStyle">
                <div className="appDetailTitle">
                    应用详情
                </div>
                <div className="appDetailContent">
                    <div className="headerContent">
                        <div className="leftArea">
                            <img src={imgUrl} 
                                style={{width: 64, height: 64, borderRadius: 48}}
                            />
                            <div className="appNameArea">
                                <div className="appNameAreaContent">
                                    <span style={{fontSize: 14, fontWeight: 'bold', marginRight: 16}}>{appTitle}</span>
                                    {tag}
                                </div>
                                <span style={{color: '#8c8c8c'}}>未开通</span>
                            </div>
                        </div>
                        <div className="rightArea">
                            <Button type="primary">开通功能</Button>
                        </div>
                    </div>
                </div>
                <div className="detailArea">
                    {content}
                </div>
            </div>
        );
    }
}