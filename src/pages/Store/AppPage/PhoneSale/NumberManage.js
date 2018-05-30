import React from 'react';
import './NumberManage.less';
import PageLayout from '../../../../components/PageLayout/PageLayout';
import {
    Menu,
    Modal,
    Row,
    Col,
    Button,
    Input,
    Select,
    Table,
    Badge,
    Divider,
    Switch,
    DatePicker
} from 'antd';

// const
const Search = Input.Search;
const Option = Select.Option;
const { Column } = Table;

//
export default class NumberManage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            dlgTitle: '绑定管理',
            visible: false,
        }
    }

    componentDidMount() {
        let data = [];
        for (let i = 0; i < 50; i++) {
            data.push({
                key: i.toString(),
                number: '1701234567' + i,
                numberStatus: i % 2,
                agentName: '代理商' + i,
                validTime: "2019-05-14",
                lastModified: "2018-05-14 11:49:0" + i % 60,
            });
        }
        this.setState({ data: data });
    }

    //
    onMenu({ item, key, keyPath }) {
        switch (key) {
            case "1":
                // 小号管理
                this.props.history.push("/numberManage");
                break;
            case "2":
                // 充值管理
                this.props.history.push("/chargeManage");
                break;
            default:
                break;
        }
    }

    //
    onOperate(type) {
        if (type === "bind") {
            this.setState({ visible: true, dlgTitle: '绑定管理' });
        } else if (type === "status") {
            this.setState({ visible: true, dlgTitle: '状态管理' });
        } else {
            this.setState({ visible: true, dlgTitle: '有效期管理' });
        }
    }
    onCloseDlg() {
        this.setState({ visible: false });
    }
    onConfirmDlg() {
        this.setState({ visible: false });

    }

    render() {
        const time = (
            <div title="2018-05-14 13:13:13">2018-05-14</div>
        )
        let title = "";
        let content = "";
        switch (this.state.dlgTitle) {
            case "绑定管理":
                title = "选择代理商：";
                content = <Select defaultValue="1" style={{ width: '100%' }}>
							<Option value="1">未选择</Option>
							<Option value="2">代理商名称1</Option>
							<Option value="3">代理商名称2</Option>
						</Select>
                break;
            case "状态管理":
                title = "小号状态：";
                content = <Switch defaultChecked />
                break;
            case "有效期管理":
                title = "截止日期：";
                content = <DatePicker placeholder="截止日期"/>
                break;
        }
        return (
            <PageLayout selMenu={['应用市场']} fullScreen={true} collapsed={true}
            	topTitle="电话营销">
				<div className="wxYaoMainStyle">
					<Menu mode="inline" 
                        defaultSelectedKeys={['1']}
                        style={{ width: 128, backgroundColor: '#fafafa'}}
                        onClick={this.onMenu.bind(this)}
                    >
                        <Menu.Item key="1">小号管理</Menu.Item>
                        <Menu.Item key="2">充值管理</Menu.Item>
                    </Menu>
                    <div className="wxYaoContent">
                    	<div className="wxYaoBody">
                    		<div className="wxYaoTitle">
								<div className="wxYaoTitleArea">
									<span style={{fontSize: 16, marginBottom: 8, flex: 1}}>小号管理</span>
								</div>
								<span style={{color: 'rgba(0, 0, 0, 0.45)', marginBottom: 24}}>
									可以对已申请到的小号进行绑定、解绑等管理。
								</span>
							</div>
							<div style={{marginBottom: 16, display: 'flex', flex: 1}}>
								<div style={{flex: 1, display: 'flex', alignItems: 'center'}}>
									<Button type="primary" >刷新小号</Button>
								</div>
								<div style={{display: 'flex', flexDirection: 'row-reverse', alignItems: 'center'}}>
									<Search
										placeholder="蓝牙ID/雷达名称/雷达设备号模糊搜索"
										enterButton
										style={{marginLeft: 10, width: 300}}
									/>
								</div>
							</div>
							<Table dataSource={this.state.data}
								bordered={false}
								locale={{filterConfirm: '确认', filterReset: '清空', emptyText: '暂无数据'}}
							>
								<Column
									title="小号号码"
									dataIndex="number"
								/>
								<Column
									title="小号状态"
									dataIndex="numberStatus"
									filters={[{
										text: '正常',
										value: 0
									}, {
										text: '停用',
										value: 1
									}]}
									filterMultiple={false}
									onFilter={(value, record)=>{
										return (record.numberStatus==value);
									}}
									render={(text)=>{
										if(text === 0){
											return <Badge status="success" text="正常" />
										}else{
											return <Badge status="error" text="停用" />
										}
									}}
								/>
								<Column
									title="已绑定代理商"
									dataIndex="agentName"
									sorter={(a, b)=>{
										return (a.agentName.length - b.agentName.length);
									}}
									render={(text)=>{
										if(text === "代理商0" || text === "代理商1"){
											return "-"
										}else{
											return text
										}
									}}
								/>
								<Column
									title="小号截止有效期"
									dataIndex="validTime"
									sorter={(a, b)=>{
										return (a.validTime.length - b.validTime.length);
									}}
								/>
								<Column
									title="最后更新时间"
									dataIndex="lastModified"
									sorter={(a, b)=>{
										return (a.lastModified.length - b.lastModified.length);
									}}
									render={(text)=>{
										return time;
									}}
								/>
								<Column
									title="操作"
									dataIndex="action"
									render={(text, record) => {
										return <span>
											<a href="javascript:;" onClick={this.onOperate.bind(this, 'bind')}>
												绑定管理
											</a>
											<Divider type="vertical" />
											<a href="javascript:;" onClick={this.onOperate.bind(this, 'status')}>
												状态管理
											</a>
											<Divider type="vertical" />
											<a href="javascript:;" onClick={this.onOperate.bind(this, 'validTime')}>
												有效期
											</a>
										</span>
									}}
								/>
							</Table>
							<Modal
								title={this.state.dlgTitle}
								visible={this.state.visible}
								onCancel={this.onCloseDlg.bind(this)}
								onOk={this.onConfirmDlg.bind(this)}
								cancelText="取消"
								okText="确定"
							>
								<Row gutter={8}>
									<Col span={6} style={{textAlign: 'right'}}>
										{title}
									</Col>
									<Col span={18}>
										{content}
									</Col>
								</Row>
							</Modal>
                    	</div>
                    </div>
				</div>
			</PageLayout>
        );
    }
}