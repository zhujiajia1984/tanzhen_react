import React from 'react';
import './ClientSmsTemplate.less';
import PageLayout from '../../../../components/PageLayout/PageLayout';
import {
    Menu,
    DatePicker,
    Input,
    Select,
    Table,
    message,
    Button,
    Card,
    Row,
    Col,
    Modal,
    Badge,
    Divider,
    Icon,
    Breadcrumb
} from 'antd';
import { Link } from 'react-router-dom';

// const
const Search = Input.Search;
const Option = Select.Option;
const dateFormat = 'YYYY/MM/DD';
const { Column } = Table;
import moment from 'moment';
const { RangePicker } = DatePicker;

//
export default class ClientSmsRecord extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            dlgTitle: '短信签名',
            visible: false,
        }
    }

    componentDidMount() {
        let data = [];
        for (let i = 0; i < 50; i++) {
            data.push({
                key: i.toString(),
                sendTime: '2018-05-14 11:02:1' + i % 10,
                receiveNumber: '139****1345',
                sendStatus: i % 2,
                content: '【新数雷达】欢迎注册雷达平台账号，您的验证码为0145，...',
                chargeNum: i % 2 + 1,
                receiveMAC: '1122334' + i % 10 + '****',
                eventName: '活动名称' + i,
            });
        }
        this.setState({ data: data });
    }


    onMenu({ item, key, keyPath }) {
        switch (key) {
            case "1":
                // 短信发送
                this.props.history.push("/clientSmsSend");
                break;
            case "2":
                // 短信模板
                this.props.history.push("/clientSmsTemplate");
                break;
            case "3":
                // 发送记录
                this.props.history.push("/clientSmsRecord");
                break;
            case "4":
                // 采购记录
                this.props.history.push("/clientSmsBuyManage");
            default:
                break;
        }
    }

    //
    onCloseDlg() {
        this.setState({ dlgVisible: false });
    }
    onConfirmDlg() {
        this.setState({ dlgConfirmLoading: true });
        setTimeout(() => {
            this.setState({ dlgVisible: false, dlgConfirmLoading: false });
            message.success("操作成功");
        }, 1000)
    }
    //
    onEditSign() {
        this.setState({ dlgVisible: true, dlgTitle: '短信签名' });
    }
    onBindPhone() {
        this.setState({ dlgVisible: true, dlgTitle: '审核结果通知手机号设置' });
    }
    onTemplate(type) {
        this.props.history.push("/clientSmsTempManage", { type: type });
    }

    render() {
        let smsSignTitle = <div>
            <span>短信签名</span>
            <span style={{marginLeft: 12, fontSize: 12 , color: 'rgba(0, 0, 0, 0.45)'}}>
                显示在短信的【】中
            </span>
        </div>
        return (
            <PageLayout selMenu={['应用市场']} fullScreen={true} collapsed={true}
                topTitle="精准短信" topHelpText="使用帮助" topHelpLink="/phoneAppDetail">
                <div className="wxYaoMainStyle">
                    <Menu mode="inline" 
                        defaultSelectedKeys={['3']}
                        style={{ width: 128, backgroundColor: '#fafafa'}}
                        onClick={this.onMenu.bind(this)}
                    >
                        <Menu.Item key="1">短信活动</Menu.Item>
                        <Menu.Item key="2">短信模板</Menu.Item>
                        <Menu.Item key="3">发送记录</Menu.Item>
                        <Menu.Item key="4">采购记录</Menu.Item>
                    </Menu>
                    <div className="wxYaoContent">
                        <div style={{marginTop: '-16px', marginBottom: '8px'}}>
                            <Breadcrumb>
                                <Breadcrumb.Item><Link to="/store">应用市场</Link></Breadcrumb.Item>
                                <Breadcrumb.Item>发送记录</Breadcrumb.Item>
                             </Breadcrumb>
                        </div>
                        <div className="wxYaoBody">
                            <div className="wxYaoTitle">
                                <div className="wxYaoTitleArea">
                                    <span style={{fontSize: 16, marginBottom: 8, flex: 1, color: 'rgba(0,0,0,0.85)'}}>
                                        发送记录
                                    </span>
                                </div>
                                <span style={{color: 'rgba(0, 0, 0, 0.45)', marginBottom: 24}}>
                                    可查询短信发送记录。
                                </span>
                            </div>
                            <div style={{marginBottom: 16, display: 'flex', flex: 1}}>
                                <div style={{flex: 1, display: 'flex', alignItems: 'center'}}>
                                    <span style={{marginLeft: 0}}>发送时间：</span>
                                    <RangePicker
                                      defaultValue={[moment('2018/06/10', dateFormat), moment('2018/06/10', dateFormat)]}
                                      format={dateFormat}
                                    />
                                    <span style={{marginLeft: 24}}>接收号码/接收MAC/活动名称：</span>
                                    <Input style={{width: 180}}/>
                                    <Button type="primary" style={{marginLeft: 24}}>查询</Button>
                                    <span style={{marginLeft: 12}}>总计费条数：30000</span>
                                </div>
                            </div>
                            <Modal
                                title={this.state.dlgTitle}
                                visible={this.state.dlgVisible}
                                onCancel={this.onCloseDlg.bind(this)}
                                onOk={this.onConfirmDlg.bind(this)}
                                cancelText="取消"
                                okText="确定"
                                confirmLoading={this.state.dlgConfirmLoading}
                            >
                                {
                                    (this.state.dlgTitle == "短信签名") &&
                                    <div>
                                        <Row gutter={8}>
                                            <Col span={6} style={{textAlign: 'right'}}>
                                                短信签名：
                                            </Col>
                                            <Col span={18}>
                                                <Input />
                                            </Col>
                                        </Row>
                                        <Row gutter={8} style={{marginTop: 8}}>
                                            <Col span={6} style={{textAlign: 'right'}}>
                                            </Col>
                                            <Col span={18}>
                                                <span style={{color: 'rgba(0, 0, 0, 0.45)'}}>
                                                    公司或品牌名称，限2-12个字符，不能为纯数字。
                                                </span>
                                            </Col>
                                        </Row>
                                    </div>
                                }
                                {
                                    (this.state.dlgTitle == "审核结果通知手机号设置") &&
                                    <div>
                                        <Row gutter={8}>
                                            <Col span={6} style={{textAlign: 'right'}}>
                                                手机号：
                                            </Col>
                                            <Col span={18}>
                                                <Input />
                                            </Col>
                                        </Row>
                                        <Row gutter={8} style={{marginTop: 24}}>
                                            <Col span={6} style={{textAlign: 'right'}}>
                                                验证码：
                                            </Col>
                                            <Col span={12} style={{paddingRight: 0}}>
                                                <Input />
                                            </Col>
                                            <Col span={6} style={{paddingLeft: 0}}>
                                                <Button type="primary" ghost style={{width: '100%'}}>
                                                    获取验证码
                                                </Button>
                                            </Col>
                                        </Row>
                                        <Row gutter={8} style={{marginTop: 24}}>
                                            <Col span={6} style={{textAlign: 'right'}}>
                                                登录密码：
                                            </Col>
                                            <Col span={18}>
                                                <Input />
                                            </Col>
                                        </Row>
                                    </div>
                                }
                            </Modal>
                            <Table dataSource={this.state.data}
                                bordered={false}
                                locale={{filterConfirm: '确认', filterReset: '清空', emptyText: '暂无数据'}}
                            >
                                <Column
                                    title="发送时间"
                                    dataIndex="sendTime"
                                />
                                <Column
                                    title="接收号码"
                                    dataIndex="receiveNumber"
                                />
                                <Column
                                    title="接收MAC"
                                    dataIndex="receiveMAC"
                                />
                                <Column
                                    title="活动名称"
                                    dataIndex="eventName"
                                />
                                <Column
                                    title="发送状态"
                                    dataIndex="sendStatus"
                                    filters={[{
                                        text: '成功',
                                        value: 1
                                    },{
                                        text: '失败',
                                        value: 0
                                    }]}
                                    filterMultiple={false}
                                    onFilter={(value, record)=>{
                                        return (record.sendStatus == value);
                                    }}
                                    render={(text)=>{
                                        if(text == 0){
                                            return <div title="鼠标悬停显示具体失败原因">
                                                <Badge status="error" text="失败" />
                                            </div>
                                        }else if(text == 1){
                                            return <Badge status="success" text="成功" />;
                                        }
                                    }}
                                />
                                <Column
                                    title="发送内容"
                                    dataIndex="content"
                                    render={(text)=>(
                                        <div title="显示全部内容">{text}</div>
                                    )}
                                />
                                <Column
                                    title="计费条数"
                                    dataIndex="chargeNum"
                                    sorter={(a, b)=>{
                                        return (a.beginTime - b.beginTime);
                                    }}
                                />
                            </Table>
                        </div>
                    </div>
                </div>
            </PageLayout>
        );
    }
}