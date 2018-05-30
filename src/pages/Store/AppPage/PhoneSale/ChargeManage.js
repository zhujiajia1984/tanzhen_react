import React from 'react';
import './ChargeManage.less';
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
export default class ChargeManage extends React.Component {
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
                phoneNumber: i + 1,
                numberStatus: i % 2,
                agentName: '代理商' + i,
                leftTime: (i + 1) * 1000,
                lastModified: "2018-05-14 11:49:0" + i % 60,
                area: '地级市',
            });
        }
        this.setState({ data: data });
    }

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
        const expandRowData = (
            <div style={{fontSize: 14}}>
                <Row gutter={16}>
                    <Col span={24}>
                        <div style={{fontWeight: 'bold'}}>
                            操作记录：
                        </div>
                    </Col>
                </Row>
                <div className="wxYaolink">2018-05-14 12:12:13，充值1000分钟，剩余2000分钟</div>
                <div className="wxYaolink">2018-05-13 08:01:54，强制清零，剩余0分钟</div>
            </div>
        )
        return (
            <PageLayout selMenu={['应用市场']} fullScreen={true} collapsed={true}
                topTitle="电话营销">
                <div className="wxYaoMainStyle">
                    <Menu mode="inline" 
                        defaultSelectedKeys={['2']}
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
                                    <span style={{fontSize: 16, marginBottom: 8, flex: 1}}>充值管理</span>
                                </div>
                                <span style={{color: 'rgba(0, 0, 0, 0.45)', marginBottom: 24}}>
                                    可以对客户的剩余通话时长进行充值和清零，单位为分钟。
                                </span>
                            </div>
                            <div style={{marginBottom: 16, display: 'flex', flex: 1}}>
                                <div style={{flex: 1, display: 'flex', alignItems: 'center'}}>
                                    <Button type="primary" >刷新代理商</Button>
                                    <span style={{marginLeft: 12}}>剩余时长：- 分钟</span>
                                </div>
                                <div style={{display: 'flex', flexDirection: 'row-reverse', alignItems: 'center'}}>
                                    <Search
                                        placeholder="号码/区域/代理商 模糊搜索"
                                        enterButton
                                        style={{marginLeft: 10, width: 300}}
                                    />
                                </div>
                            </div>
                            <Table dataSource={this.state.data}
                                bordered={false}
                                expandedRowRender={(record) => {
                                    return expandRowData;
                                }}
                                locale={{filterConfirm: '确认', filterReset: '清空', emptyText: '暂无数据'}}
                            >
                                <Column
                                    title="代理商名称"
                                    dataIndex="agentName"
                                />
                                <Column
                                    title="已绑小号数量"
                                    dataIndex="phoneNumber"
                                    sorter={(a, b)=>{
                                        return (a.phoneNumber.length - b.phoneNumber.length);
                                    }}
                                />
                                <Column
                                    title="剩余通话时长(分钟)"
                                    dataIndex="leftTime"
                                    sorter={(a, b)=>{
                                        return (a.leftTime.length - b.leftTime.length);
                                    }}
                                />
                                <Column
                                    title="最后充值时间"
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
                                                充值
                                            </a>
                                            <Divider type="vertical" />
                                            <a href="javascript:;" onClick={this.onOperate.bind(this, 'validTime')}>
                                                强制清零
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