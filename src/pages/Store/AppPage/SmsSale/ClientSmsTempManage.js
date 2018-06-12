import React from 'react';
import './ClientSmsTemplate.less';
import PageLayout from '../../../../components/PageLayout/PageLayout';
import {
    Menu,
    Input,
    Select,
    message,
    Button,
    Row,
    Col,
    Modal,
    Radio,
    Table,
    Breadcrumb
} from 'antd';
import { Link } from 'react-router-dom';

// const
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const Option = Select.Option;
const { TextArea } = Input;
const { Column } = Table;

//
export default class ClientSmsTempManage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dlgTitle: '短信签名',
            visible: false,
            data: [],
        }
    }

    componentDidMount() {
        if (typeof(this.props.location.state) != "undefined") {
            switch (this.props.location.state.type) {
                case 'add':
                    this.setState({ type: "add" });
                    break;
                case 'edit':
                    this.setState({ type: "edit" });
                    break;
                default:
                    break;
            }
        }
        // 
        let data = [];
        for (let i = 0; i < 5; i++) {
            data.push({
                key: i.toString(),
                content: '新订单通知：您有一个新订单{1}，请及时登录处理。'
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
    onBack() {
        this.props.history.push("/clientSmsTemplate");
    }
    onImportLib() {
        this.setState({ dlgVisible: true, dlgTitle: '快捷模板库' });
    }

    render() {
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
                        <Menu.Item key="3">发送记录</Menu.Item>
                        <Menu.Item key="4">采购记录</Menu.Item>
                    </Menu>
                    <div className="wxYaoContent">
                        <div style={{marginTop: '-16px', marginBottom: '8px'}}>
                            <Breadcrumb>
                                <Breadcrumb.Item><Link to="/store">应用市场</Link></Breadcrumb.Item>
                                <Breadcrumb.Item><Link to="/clientSmsTemplate">短信模板</Link></Breadcrumb.Item>
                                <Breadcrumb.Item>新建模板</Breadcrumb.Item>
                             </Breadcrumb>
                        </div>
                        <div className="wxYaoBody">
                            <div className="wxYaoTitle">
                                <div className="wxYaoTitleArea">
                                    <span style={{fontSize: 16, marginBottom: 16, flex: 1, color: 'rgba(0,0,0,0.85)'}}>
                                        {
                                            this.state.type == "add" && "新建模板"
                                        }
                                        {
                                            this.state.type == "edit" && "编辑模板"
                                        }
                                    </span>
                                </div>
                            </div>
                            <div>
                                <Row gutter={8} style={{display: 'flex', alignItems: 'center'}}>
                                    <Col span={4} style={{textAlign: 'right'}}>
                                        模板名称：
                                    </Col>
                                    <Col span={10}>
                                        <Input placeholder="12个字符以内，备注用" />
                                    </Col>
                                </Row>
                                <Row gutter={8} style={{marginTop:24, display: 'flex', alignItems: 'center'}}>
                                    <Col span={4} style={{textAlign: 'right'}}>
                                        模板类型：
                                    </Col>
                                    <Col span={10}>
                                        <span>会员服务模板</span>
                                    </Col>
                                </Row>
                                <Row gutter={8} style={{marginTop:24, display: 'flex', alignItems: 'center'}}>
                                    <Col span={4} style={{textAlign: 'right'}}>
                                        短信签名：
                                    </Col>
                                    <Col span={10}>
                                        <span>新数网络</span>
                                    </Col>
                                </Row>
                                <Row gutter={8} style={{marginTop:24, display: 'flex', alignItems: 'center'}}>
                                    <Col span={4} style={{textAlign: 'right'}}>
                                        短信模板：
                                    </Col>
                                    <Col span={10}>
                                        <a href="javascript:;" onClick={this.onImportLib.bind(this)}>导入快捷模板库</a>
                                        <div style={{position: 'relative'}}>
                                            <TextArea rows={4}></TextArea>
                                            <div style={{position: 'absolute', right: 22, bottom: 1, color: 'rgba(0,0,0,0.45)'}}>
                                                退订回TD
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                <Row gutter={8} style={{display: 'flex', alignItems: 'center'}}>
                                    <Col span={4} style={{textAlign: 'right'}}>
                                    </Col>
                                    <Col span={10}>
                                        <div style={{color: 'rgba(0,0,0,0.45)'}}>
                                            <div>
                                                <span>可带链接，建议转化为短链接发送。当前共计</span>
                                                <span style={{color: 'red'}}>10</span>
                                                <span>个字（含签名），含有变量的情况下以实际发送长度为准</span>
                                            </div>
                                            <div>70字以内计为一条（含70字），超过70字，以67字/条计费，会员服务模板尾部自动会加入“退订回TD”</div>
                                        </div>
                                    </Col>
                                </Row>
                                <Row gutter={8} style={{marginTop:24, display: 'flex', alignItems: 'center'}}>
                                    <Col span={4} style={{textAlign: 'right'}}>
                                    </Col>
                                    <Col span={10}>
                                        <Button type="primary" onClick={this.onBack.bind(this)}>
                                            确认
                                        </Button>
                                        <Button type="default" onClick={this.onBack.bind(this)}
                                            style={{marginLeft: 24}}>
                                            取消
                                        </Button>
                                    </Col>
                                </Row>
                            </div>
                            <Modal
                                title={this.state.dlgTitle}
                                visible={this.state.dlgVisible}
                                onCancel={this.onCloseDlg.bind(this)}
                                onOk={this.onConfirmDlg.bind(this)}
                                cancelText="取消"
                                okText="确定"
                                footer={null}
                                confirmLoading={this.state.dlgConfirmLoading}
                            >
                                {
                                    (this.state.dlgTitle == "快捷模板库") &&
                                    <div>
                                        <Table dataSource={this.state.data} bordered={true}
                                        >
                                            <Column
                                                title="模板内容"
                                                dataIndex="content"
                                            />
                                            <Column
                                                title="操作"
                                                dataIndex="action"
                                                render={(text, record) => {
                                                    return <span>
                                                        <a href="javascript:;">
                                                            导入
                                                        </a>
                                                    </span>
                                                }}
                                            />
                                        </Table>
                                    </div>
                                }
                            </Modal>
                        </div>
                    </div>
                </div>
            </PageLayout>
        );
    }
}