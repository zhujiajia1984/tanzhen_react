import React from 'react';
import './WxYaoDevice.less';
import { Table, Button, Input, Badge, Row, Col, Divider, Modal, Select, Tag } from 'antd';

//const
const { Column } = Table;
const Search = Input.Search;
const Option = Select.Option;


export default class WxYaoDevice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            visible: false,
            confirmLoading: false,
        }
    }

    componentDidMount() {
        let data = [];
        for (let i = 0; i < 50; i++) {
            data.push({
                key: i.toString(),
                deviceid: '1000' + i,
                mac: "11:22:33:44:55:6" + i % 10 + "(test" + i + ")",
                pageNum: i % 5,
                status: i,
                devstatus: i % 2,
                createTime: "2018-05-14 11:49:0" + i % 60,
            });
        }
        this.setState({ data: data });
    }

    // 新增配置
    onAddDevice() {
        this.setState({ visible: true });
    }
    onCloseDlg() {
        this.setState({ visible: false });
    }
    onConfirmDlg() {
        // 保存配置
        this.setState({ confirmLoading: true });
        setTimeout(() => {
            this.setState({ visible: false, confirmLoading: false });
        }, 1000);

    }

    render() {
        const expandRowData = (
            <div style={{fontSize: 14}}>
            	<Row gutter={16}>
					<Col span={24}>
						<div style={{fontWeight: 'bold'}}>
							蓝牙信息：
						</div>
					</Col>
				</Row>
				<div className="wxYaolink">uuid: FDA50693-A4E2-4FB1-AFCF-C6EB07647825</div>
				<div className="wxYaolink">major: 10001</div>
				<div className="wxYaolink">minor: 10002</div>
				<Row gutter={16}>
					<Col span={24}>
						<div style={{fontWeight: 'bold', marginTop: 12}}>
							关联页面：
						</div>
					</Col>
				</Row>
				<div className="wxYaolink">
					<span style={{marginRight: 8}}>1：http://radar.wisemedia.cn</span>
					<a href="http://radar.wisemedia.cn" target="_blank">预览</a>
				</div>
				<div className="wxYaolink">
					<span style={{marginRight: 8}}>2：http://www.wisemedia.cn</span>
					<a href="http://www.wisemedia.cn" target="_blank">预览</a>
				</div>
				<div className="wxYaolink" style={{color: 'rgba(0, 0, 0, 0.45)'}}>如果配置了多个页面，则摇出的页面以随机的方式出现</div>
			</div>
        )
        return (
            <div className="wxYaoContent">
				<div className="wxYaoBody">
					<div className="wxYaoTitle">
						<div className="wxYaoTitleArea">
							<span style={{fontSize: 16, marginBottom: 8, flex: 1}}>摇一摇配置</span>
						</div>
						<span style={{color: 'rgba(0, 0, 0, 0.45)', marginBottom: 24}}>
							必须是含有蓝牙模块并支持ibeacon协议的R2雷达设备才能够进行配置，其他类型设备配置无效。
						</span>
					</div>
					<div style={{marginBottom: 16, display: 'flex', flex: 1}}>
						<div style={{flex: 1, display: 'flex', alignItems: 'center'}}>
							<Button type="primary" onClick={this.onAddDevice.bind(this)}>新增配置</Button>
						</div>
						<div style={{display: 'flex', flexDirection: 'row-reverse', alignItems: 'center'}}>
							<Search
								placeholder="蓝牙ID/雷达名称/雷达设备号模糊搜索"
								enterButton
								style={{marginLeft: 10, width: 300}}
							/>
						</div>
					</div>
					<Modal
						title="新增配置"
						visible={this.state.visible}
						onCancel={this.onCloseDlg.bind(this)}
						onOk={this.onConfirmDlg.bind(this)}
						cancelText="取消"
						okText="确定"
						confirmLoading={this.state.confirmLoading}
					>
						<Row gutter={8}>
							<Col span={6} style={{textAlign: 'right'}}>
								选择关联的雷达：
							</Col>
							<Col span={18}>
								<Select defaultValue="1" style={{ width: '100%' }}>
									<Option value="1">未选择</Option>
									<Option value="2">11:22:33:44:55:66</Option>
									<Option value="3" disabled>22:33:44:55:66:77</Option>
								</Select>
							</Col>
						</Row>
					</Modal>
					<Table dataSource={this.state.data}
							bordered={false}
							expandedRowRender={(record) => {
								return expandRowData;
							}}
							locale={{filterConfirm: '确认', filterReset: '清空', emptyText: '暂无数据'}}
						>
							<Column
								title="蓝牙ID"
								dataIndex="deviceid"
							/>
							<Column
								title="关联雷达(设备号/名称)"
								dataIndex="mac"
							/>
							<Column
								title="关联页面数"
								dataIndex="pageNum"
								sorter={(a, b)=>{
									return (a.pageNum.length - b.pageNum.length);
								}}
							/>
							<Column
								title="蓝牙状态"
								dataIndex="status"
								filters={[{
									text: '配置成功',
									value: 0
								}, {
									text: '配置中',
									value: 1
								},{
									text: '配置失败',
									value: 2
								}]}
								filterMultiple={false}
								onFilter={(value, record)=>{
									return (record.status%3)==value;
								}}
								render={(text)=>{
									if(text%3 === 0){
										return <Badge status="success" text="配置成功" />
									}else if(text%3 === 1){
										return <Badge status="default" text="配置中" />
									}else{
										return <div title="显示配置失败原因">
											<Badge status="error" text="配置失败" />
										</div>	
									}
								}}
							/>
							<Column
								title="摇一摇状态"
								dataIndex="devstatus"
								filters={[{
									text: '已激活',
									value: 0
								}, {
									text: '未激活',
									value: 1
								}]}
								filterMultiple={false}
								onFilter={(value, record)=>{
									return (record.status%2)==value;
								}}
								render={(text)=>{
									if(text%2 === 0){
										return <Badge status="success" text="已激活" />
									}else{
										return <Badge status="default" text="未激活" />
									}
								}}
							/>
							<Column
								title="创建时间"
								dataIndex="createTime"
								sorter={(a, b)=>{
									return (a.createTime.length - b.createTime.length);
								}}
							/>
							<Column
								title="操作"
								dataIndex="action"
								render={(text, record) => {
									return <span>
										<a href="javascript:;">页面关联</a>
										<Divider type="vertical" />
										<a href="javascript:;">删除</a>
									</span>
								}}
							/>
						</Table>
				</div>
			</div>
        );
    }
}