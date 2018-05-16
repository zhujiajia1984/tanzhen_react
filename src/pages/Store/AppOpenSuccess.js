import React from 'react';
import './AppOpenSuccess.less';
import { Icon, Button } from 'antd';

export default class AppOpenSuccess extends React.Component {
    constructor(props) {
        super(props);
    }

    onDetail() {
        this.props.history.push("/store");
    }

    render() {
        return (
            <div className="appSuccessBody">
            	<Icon type="check-circle" style={{color: "#2fb26a", fontSize: 72, marginBottom: 24}} />
            	<span className="appSuccessTitle">应用开通成功</span>
            	<span className="appSuccessDesp">使用期限：2018年5月16日 - 2019年5月16日</span>
            	<div className="appSuccessActions">
            		<Button type="primary" style={{marginRight: 24}}
            			onClick={this.onDetail.bind(this)}
            		>
            			进入应用
            		</Button>
            	</div>
            	
            </div>
        );
    }
}