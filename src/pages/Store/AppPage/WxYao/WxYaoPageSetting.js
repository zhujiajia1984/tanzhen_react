import React from 'react';

export default class WxYaoPageSetting extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
            	<div className="wxYaoTitle">
                    <div className="wxYaoTitleArea">
                        <span style={{fontSize: 16, marginBottom: 8, flex: 1}}>新建页面</span>
                    </div>
                    <span style={{color: 'rgba(0, 0, 0, 0.45)', marginBottom: 24}}>
                        可以上传页面内容
                    </span>
                </div>
            </div>
        );
    }
}