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
        const expandRowData = (
            <div style={{fontSize: 14}}>
                <Row gutter={16}>
                    <Col span={24}>
                        <div style={{fontWeight: 'bold'}}>
                            发送内容：
                        </div>
                    </Col>
                </Row>
                <div className="wxYaolink">【新数网络】尊敬的用户，您创建的短信模板ID：{1}已通过审核，请登录雷达系统进行使用。</div>
                <Row gutter={16}>
                    <Col span={24}>
                        <div style={{fontWeight: 'bold'}}>
                            发送失败原因：
                        </div>
                    </Col>
                </Row>
                <div className="wxYaolink">超频发送</div>
            </div>
        )
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
                                </div>
                            </div>
                            <div>
                                <span>总发送人数：5000</span>
                                <span style={{marginLeft: 24}}>发送成功人数：4500</span>
                                <span style={{marginLeft: 24}}>发送失败人数：500</span>
                                <span style={{marginLeft: 24}}>总计费条数：6000</span>
                            </div>
                            <Table dataSource={this.state.data}
                                bordered={false}
                                expandedRowRender={(record) => {
                                    return expandRowData;
                                }}
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