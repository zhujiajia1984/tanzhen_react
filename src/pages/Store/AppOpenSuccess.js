import React from 'react';
import './AppOpenSuccess.less';
import { Icon, Button } from 'antd';

export default class AppOpenSuccess extends React.Component {
    constructor(props) {
        super(props);
    }

    onDetail() {
        localStorage.setItem('wxYaoMenuKey', '1');
        this.props.history.push("/wxYao/device");
    }

    render() {
        return (
            <div className="appSuccessBody">
            	<Icon type="check-circle" style={{color: "#2fb26a", fontSize: 72, marginBottom: 24}} />
            	<span className="appSuccessTitle">应用开通成功</span>
            	<span className="appSuccessDesp">基础版免费使用</span>
            	<div className="appSuccessActions">
            		<Button type="primary"
            			onClick={this.onDetail.bind(this)}
            		>
            			进入应用
            		</Button>
            	</div>
            	
            </div>
        );
    }
}