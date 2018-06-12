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
export default class AgentSmsTemplate extends React.Component {
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
                beginTime: '2018-05-14',
                updateTime: '2018-05-16',
                tempName: '模板' + i,
                tempType: '会员服务',
                tempContent: '【新数雷达】模板内容{1}...',
                status: i % 3,
                tempID: '1234' + i,
                clientName: '广告主名称' + i,
            });
        }
        this.setState({ data: data });
    }


    onMenu({ item, key, keyPath }) {
        switch (key) {
            case "1":
                // 短信发送
                this.props.history.push("/agentSmsSend");
                break;
            case "2":
                // 短信模板
                this.props.history.push("/agentSmsTemplate");
                break;
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
                            模板内容：
                        </div>
                    </Col>
                </Row>
                <div className="wxYaolink">【新数网络】尊敬的用户，您创建的短信模板ID：{1}已通过审核，请登录雷达系统进行使用。</div>
            </div>
        )
        return (
            <PageLayout selMenu={['应用市场']} fullScreen={true} collapsed={true}
                topTitle="精准短信" topHelpText="使用帮助" topHelpLink="/phoneAppDetail">
                <div className="wxYaoMainStyle">
                    <Menu mode="inline" 
                        defaultSelectedKeys={['2']}
                        style={{ width: 128, backgroundColor: '#fafafa'}}
                        onClick={this.onMenu.bind(this)}
                    >
                        <Menu.Item key="1">短信活动</Menu.Item>
                        <Menu.Item key="2">短信模板</Menu.Item>
                    </Menu>
                    <div className="wxYaoContent">
                        <div style={{marginTop: '-16px', marginBottom: '8px'}}>
                            <Breadcrumb>
                                <Breadcrumb.Item><Link to="/store">应用市场</Link></Breadcrumb.Item>
                                <Breadcrumb.Item>短信模板</Breadcrumb.Item>
                             </Breadcrumb>
                        </div>
                        <div className="wxYaoBody">
                            <div className="wxYaoTitle">
                                <div className="wxYaoTitleArea">
                                    <span style={{fontSize: 16, marginBottom: 8, flex: 1, color: 'rgba(0,0,0,0.85)'}}>
                                        短信模板
                                    </span>
                                </div>
                                <span style={{color: 'rgba(0, 0, 0, 0.45)', marginBottom: 8}}>
                                    可查询所有客户的短信模板。
                                </span>
                            </div>
                            <div style={{marginBottom: 16, display: 'flex', flex: 1}}>
                                <div style={{flex: 1, display: 'flex', alignItems: 'center'}}>
                                    <span>模板总数：1000，其中已审核：500，待审核：200，审核失败： 300</span>
                                </div>
                                <div style={{display: 'flex', flexDirection: 'row-reverse', alignItems: 'center'}}>
                                    <Search
                                        placeholder="模板ID/模板名称/客户名称 模糊搜索"
                                        enterButton
                                        style={{marginLeft: 10, width: 300}}
                                    />
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
                                expandedRowRender={(record) => {
                                    return expandRowData;
                                }}
                                locale={{filterConfirm: '确认', filterReset: '清空', emptyText: '暂无数据'}}
                            >
                                <Column
                                    title="模板ID"
                                    dataIndex="tempID"
                                />
                                <Column
                                    title="模板名称"
                                    dataIndex="tempName"
                                />
                                <Column
                                    title="客户名称"
                                    dataIndex="clientName"
                                />
                                <Column
                                    title="模板类型"
                                    dataIndex="tempType"
                                />
                                <Column
                                    title="审核状态"
                                    dataIndex="status"
                                    filters={[{
                                        text: '待审核',
                                        value: 0
                                    },{
                                        text: '审核通过',
                                        value: 1
                                    }, {
                                        text: '审核失败',
                                        value: 2
                                    }]}
                                    filterMultiple={false}
                                    onFilter={(value, record)=>{
                                        return (record.status == value);
                                    }}
                                    render={(text)=>{
                                        if(text == 0){
                                            return <div title="工作日审核2小时以内">
                                                <Badge status="default" text="待审核" />
                                            </div>
                                        }else if(text == 1){
                                            return <Badge status="success" text="审核通过" />;
                                        }else{
                                            return <div title="失败原因">
                                                <Badge status="error" text="审核失败" />
                                            </div> 
                                        }
                                    }}
                                />
                                <Column
                                    title="创建时间"
                                    dataIndex="beginTime"
                                    sorter={(a, b)=>{
                                        return (a.beginTime - b.beginTime);
                                    }}
                                    render={(text)=>{
                                        return <div title="2018-05-14 11:12:23">
                                            {text}
                                        </div>
                                    }}
                                />
                                <Column
                                    title="最后更新时间"
                                    dataIndex="updateTime"
                                    sorter={(a, b)=>{
                                        return (a.updateTime - b.updateTime);
                                    }}
                                    render={(text)=>{
                                        return <div title="2018-05-14 11:12:23">
                                            {text}
                                        </div>
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