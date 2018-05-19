import React from 'react';
import './WxYao.less';
import PageLayout from '../../../../components/PageLayout/PageLayout';
import { Menu } from 'antd';
import { Route } from 'react-router-dom';
import WxYaoDevice from './WxYaoDevice';
import WxYaoPage from './WxYaoPage';
import WxYaoData from './WxYaoData';

//const

// 
export default class WxYao extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            key: ['1']
        }
    }

    //
    onMenu({ item, key, keyPath }) {
        switch (key) {
            case "1":
                // 设备配置
                localStorage.setItem('wxYaoMenuKey', '1');
                this.props.history.push("/wxYao/device");
                break;
            case "2":
                // 设备配置
                localStorage.setItem('wxYaoMenuKey', '2');
                this.props.history.push("/wxYao/page");
                break;
            case "3":
                // 数据统计
                localStorage.setItem('wxYaoMenuKey', '3');
                this.props.history.push("/wxYao/data");
                break;
            default:
                break;
        }
    }

    //
    componentDidMount() {
        let key = localStorage.getItem('wxYaoMenuKey');
        this.setState({ key: [key] });
    }

    //
    render() {
        return (
            <PageLayout selMenu={['应用市场']} fullScreen={true} collapsed={true}
                topTitle="微信摇一摇" topStatus={true}
            >
                <div className="wxYaoMainStyle">
                    <Menu mode="inline" 
                        // defaultSelectedKeys={['1']}
                        selectedKeys={[localStorage.getItem('wxYaoMenuKey')]}
                        style={{ width: 128, backgroundColor: '#fafafa'}}
                        onClick={this.onMenu.bind(this)}
                    >
                        <Menu.Item key="1">摇一摇配置</Menu.Item>
                        <Menu.Item key="2">页面配置</Menu.Item>
                        <Menu.Item key="3">数据统计</Menu.Item>
                    </Menu>
                    <Route path={this.props.match.url + '/device'} component={WxYaoDevice} />
                    <Route path={this.props.match.url + '/page'} component={WxYaoPage} />
                    <Route path={this.props.match.url + '/data'} component={WxYaoData} />
                </div>
            </PageLayout>
        );
    }
}