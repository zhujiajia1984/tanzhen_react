import React from 'react';
import { Row, Col, Radio, Divider, Select } from 'antd';


// const
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const Option = Select.Option;


// 
export default class CrowdAddRule extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
				<Row gutter={{xs: 8, sm: 16, md: 24}} >
					<Col xs={24} sm={24} md={24} lg={24} xl={24}>
						<span style={{fontSize: '16px', fontWeight: 'bold'}}>按时间：</span>
					</Col>
				</Row>
				<Row gutter={{xs: 8, sm: 16, md: 24}} style={{paddingLeft: 24, marginTop: 8}}>
					<Col xs={24} sm={24} md={24} lg={24} xl={24}>
						<RadioGroup defaultValue="c">
							<RadioButton value="a">昨日</RadioButton>
							<RadioButton value="b">近7天</RadioButton>
							<RadioButton value="c">近30天</RadioButton>
							<RadioButton value="d">自定义</RadioButton>
						</RadioGroup>
					</Col>
				</Row>
				<Divider></Divider>
				<Row gutter={{xs: 8, sm: 16, md: 24}} >
					<Col xs={24} sm={24} md={24} lg={24} xl={24}>
						<span style={{fontSize: '16px', fontWeight: 'bold'}}>按采集点：</span>
					</Col>
				</Row>
				<Row gutter={{xs: 8, sm: 16, md: 24}} style={{paddingLeft: 24, marginTop: 8}}>
					<Col xs={24} sm={24} md={24} lg={24} xl={6}>
						<RadioGroup defaultValue="a">
							<RadioButton value="a">所有采集点</RadioButton>
							<RadioButton value="b">自定义</RadioButton>
						</RadioGroup>
					</Col>
					<Col xs={24} sm={24} md={24} lg={24} xl={18}>
					    <Select defaultValue="lucy" mode="multiple" style={{ width: '100%' }} >
							<Option value="jack">采集点1</Option>
							<Option value="lucy">采集点2</Option>
							<Option value="disabled">采集点3</Option>
							<Option value="Yiminghe">采集点4</Option>
						</Select>
					</Col>
				</Row>
				<Divider></Divider>
				<Row gutter={{xs: 8, sm: 16, md: 24}} >
					<Col xs={24} sm={24} md={24} lg={24} xl={24}>
						<span style={{fontSize: '16px', fontWeight: 'bold'}}>按采集范围：</span>
					</Col>
				</Row>
				<Row gutter={{xs: 8, sm: 16, md: 24}} style={{paddingLeft: 24, marginTop: 8}}>
					<Col xs={24} sm={24} md={24} lg={24} xl={24}>
						<RadioGroup defaultValue="a">
							<RadioButton value="a">全部采集</RadioButton>
							<RadioButton value="b">有效采集</RadioButton>
						</RadioGroup>
					</Col>
				</Row>
				<Divider></Divider>
				<Row gutter={{xs: 8, sm: 16, md: 24}} >
					<Col xs={24} sm={24} md={24} lg={24} xl={24}>
						<span style={{fontSize: '16px', fontWeight: 'bold'}}>按访客属性：</span>
					</Col>
				</Row>
				<Row gutter={{xs: 8, sm: 16, md: 24}} style={{paddingLeft: 24, marginTop: 8}}>
					<Col xs={24} sm={24} md={24} lg={24} xl={24}>
						<RadioGroup defaultValue="a">
							<RadioButton value="a">全部访客</RadioButton>
							<RadioButton value="b">新访客</RadioButton>
							<RadioButton value="c">老访客</RadioButton>
						</RadioGroup>
					</Col>
				</Row>
				<Divider></Divider>
				<Row gutter={{xs: 8, sm: 16, md: 24}} >
					<Col xs={24} sm={24} md={24} lg={24} xl={24}>
						<span style={{fontSize: '16px', fontWeight: 'bold'}}>按停留时长：</span>
					</Col>
				</Row>
				<Row gutter={{xs: 8, sm: 16, md: 24}} style={{paddingLeft: 24, marginTop: 8}}>
					<Col xs={24} sm={24} md={24} lg={24} xl={24}>
						<RadioGroup defaultValue="a">
							<RadioButton value="a">全部时长</RadioButton>
							<RadioButton value="b">30分钟以内</RadioButton>
							<RadioButton value="c">30分钟以上</RadioButton>
							<RadioButton value="c">1小时以上</RadioButton>
						</RadioGroup>
					</Col>
				</Row>
			</div>
        );
    }
}