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
    message,
    Divider
} from 'antd';

// const
const Search = Input.Search;
const Option = Select.Option;
const { Column } = Table;

//
export default class AgentChargeManage extends React.Component {
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
                agentName: '广告主' + i,
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
                this.props.history.push("/agentNumberManage");
                break;
            case "2":
                // 充值管理
                this.props.history.push("/agentChargeManage");
                break;
            case "3":
                // 充值管理
                this.props.history.push("/agentBuyManage");
                break;
            default:
                break;
        }
    }

    //
    onOperate(type) {
        if (type === "bind") {
            // 充值
            this.setState({ visible: true, dlgTitle: '充值' });
        } else {
            // 清零
            this.setState({ visible: true, dlgTitle: '强制清零' });
        }
    }
    onCloseDlg() {
        this.setState({ visible: false });
    }
    onConfirmDlg() {
        this.setState({ visible: false });
        message.success("操作成功");
    }

    render() {
        const time = (
            <div title="2018-05-14 13:13:13">2018-05-14</div>
        )
        let title = "";
        let content = "";
        switch (this.state.dlgTitle) {
            case "充值":
                title = "充值时长：";
                content = <div>
                    <Input placeholder="请输入大于0的正整数"
                        addonAfter="分钟" />
                    <div style={{marginTop: 8, color: '#888888'}}>剩余可充值时长： -分钟</div>
                </div>
                break;
            case "强制清零":
                title = "提示：";
                content = <span>当前客户剩余时长为：1000分钟，确认要
                    <span style={{color: 'red'}}>强制清零</span>吗？
                </span>
                break;
            default:
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
                <div className="wxYaolink">2018-05-13 08:01:54，充值500分钟，剩余1000分钟</div>
            </div>
        )
        return (
            <PageLayout selMenu={['应用市场']} fullScreen={true} collapsed={true}
                topTitle="电话营销" topHelpText="使用帮助" topHelpLink="/phoneAppDetail">
                <div className="wxYaoMainStyle">
                    <Menu mode="inline" 
                        defaultSelectedKeys={['2']}
                        style={{ width: 128, backgroundColor: '#fafafa'}}
                        onClick={this.onMenu.bind(this)}
                    >
                        <Menu.Item key="1">小号管理</Menu.Item>
                        <Menu.Item key="2">充值管理</Menu.Item>
                        <Menu.Item key="3">采购记录</Menu.Item>
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
                                    <span style={{marginLeft: 0}}>剩余时长：5000 分钟</span>
                                </div>
                                <div style={{display: 'flex', flexDirection: 'row-reverse', alignItems: 'center'}}>
                                    <Search
                                        placeholder="客户名称 模糊搜索"
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
                                    title="客户名称"
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
                                            <a href="javascript:;">
                                                详情
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
                                        客户名称：
                                    </Col>
                                    <Col span={18}>
                                        测试公司1
                                    </Col>
                                </Row>
                                <Row gutter={8} style={{marginTop: 24}}>
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