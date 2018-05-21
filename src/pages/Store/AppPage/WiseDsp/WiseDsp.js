import React from 'react';
import './WiseDsp.less';
import PageLayout from '../../../../components/PageLayout/PageLayout';
import { Menu } from 'antd';
import { Route } from 'react-router-dom';
import SalePoint from './SalePoint';

//
export default class WiseDsp extends React.Component {
    constructor(props) {
        super(props);
    }

    onMenu({ item, key, keyPath }) {
        switch (key) {
            case "1":
                // 设备配置
                localStorage.setItem('wisedspMenuKey', '1');
                this.props.history.push("/wisedsp/salepoint");
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <PageLayout selMenu={['应用市场']} fullScreen={true} collapsed={true}
                topTitle="新数DSP" topStatus={true} topLink="单独登录DSP"
            >
                <div className="wxYaoMainStyle">
                    <Menu mode="inline" 
                        // defaultSelectedKeys={['1']}
                        selectedKeys={[localStorage.getItem('wisedspMenuKey')]}
                        style={{ width: 128, backgroundColor: '#fafafa'}}
                        onClick={this.onMenu.bind(this)}
                    >
                        <Menu.Item key="1">人群导入</Menu.Item> 
                    </Menu>
                    <Route path={this.props.match.url + '/salepoint'} component={SalePoint} />
                </div>
            </PageLayout>
        );
    }
}