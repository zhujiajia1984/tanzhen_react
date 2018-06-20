import React from 'react';
import './ClientSmsSend.less';
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
    Radio,
    Divider,
    Steps,
    Breadcrumb
} from 'antd';
import { Link } from 'react-router-dom';

// const
const Search = Input.Search;
const Option = Select.Option;
const { Column } = Table;
const Step = Steps.Step;
const { TextArea } = Input;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

//
export default class ClientSmsEvent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0,
            steps: [{
                title: '短信内容设置',
                content: 'step1 content',
            }, {
                title: '活动人群选择',
                content: 'step2 content',
            }, {
                title: '短信活动发送',
                content: 'step3 content',
            }],
            isShowPeopleResult: false,
            btnLoading: false,
            dlgVisible: false,
            selectedRowKeys: [],
        }
    }

    //
    onChangePeople() {
        this.setState({ isShowPeopleResult: true });
        setTimeout(() => {
            this.setState({ isShowPeopleResult: false });
        }, 1000)
    }

    onChange(e) {
        // console.log(e.target.value);
        if (e.target.value == 'b') {
            this.setState({ dlgVisible: true });
        }
    }

    componentDidMount() {
        // 
        let data = [];
        for (let i = 0; i < 5; i++) {
            data.push({
                key: i.toString(),
                phoneNum: '135****4567',
                phoneMac: '11223344****'
            });
        }

        //
        let steps = this.state.steps;
        steps[0].content = <div>
            <Row gutter={8} style={{marginTop:24, display: 'flex', alignItems: 'center'}}>
                <Col span={4} style={{textAlign: 'right'}}>
                    选择模板：
                </Col>
                <Col span={10}>
                    <Select defaultValue="a" showSearch style={{ width: '100%' }} >
                        <Option value="a">模板1</Option>
                        <Option value="b">模板2</Option>
                        <Option value="c">模板3</Option>
                        <Option value="d">模板4</Option>
                    </Select>
                </Col>
            </Row>
            <Row gutter={8} style={{display: 'flex', alignItems: 'center'}}>
                <Col span={4} style={{textAlign: 'right'}}>
                </Col>
                <Col span={12}>
                    <div style={{color: 'rgba(0,0,0,0.45)'}}>
                        只能选择已通过审核的模板，如果无法选择，则请先提交短信模板。
                    </div>
                </Col>
            </Row>
            <Row gutter={8} style={{marginTop:24, display: 'flex', alignItems: 'center'}}>
                <Col span={4} style={{textAlign: 'right'}}>
                    短信内容：
                </Col>
                <Col span={10}>
                    <TextArea rows={4}></TextArea>
                </Col>
            </Row>
            <Row gutter={8} style={{display: 'flex', alignItems: 'center'}}>
                <Col span={4} style={{textAlign: 'right'}}>
                </Col>
                <Col span={12}>
                    <div style={{color: 'rgba(0,0,0,0.45)'}}>
                        <div>
                            <span>当前共计</span>
                            <span style={{color: 'red'}}>8</span>
                            <span>个字（含签名），计为</span>
                            <span style={{color: 'red'}}>1</span>
                            <span>条短信。</span>
                        </div>
                        <div>70字以内计为一条（含70字），超过70字，以67字/条计费</div>
                    </div>
                </Col>
            </Row>
        </div>;
        steps[1].content = <div>
            <Row gutter={8} style={{marginTop:24, display: 'flex', alignItems: 'center'}}>
                <Col span={4} style={{textAlign: 'right'}}>
                    选择人群：
                </Col>
                <Col span={10}>
                    <Select mode="multiple" style={{ width: '100%' }} >
                        <Option value="aa">人群1</Option>
                        <Option value="bb">人群2</Option>
                        <Option value="cc">人群3</Option>
                        <Option value="dd">人群4</Option>
                    </Select>
                </Col>
            </Row>
            <Row gutter={8} style={{display: 'flex', alignItems: 'center'}}>
                <Col span={4} style={{textAlign: 'right'}}>
                </Col>
                <Col span={12}>
                    <div style={{color: 'rgba(0,0,0,0.45)'}}>
                        当前选择人群数量为：<span style={{color: 'red'}}>10000</span>
                    </div>
                </Col>
            </Row>
            <Row gutter={8} style={{marginTop:24, display: 'flex', alignItems: 'center'}}>
                <Col span={4} style={{textAlign: 'right'}}>
                    测试号码：
                </Col>
                <Col span={10}>
                    <TextArea rows={4} placeholder="15001234567, 13001234567"></TextArea>
                </Col>
            </Row>
            <Row gutter={8} style={{display: 'flex', alignItems: 'center'}}>
                <Col span={4} style={{textAlign: 'right'}}>
                </Col>
                <Col span={12}>
                    <div style={{color: 'rgba(0,0,0,0.45)'}}>
                        测试号码将会加入到人群中一起发送，多个号码用逗号作分隔，最多不超过5个号码。
                    </div>
                </Col>
            </Row>
        </div>;
        steps[2].content = <div>
            <Row gutter={8} style={{marginTop:24, display: 'flex', alignItems: 'center'}}>
                <Col span={4} style={{textAlign: 'right'}}>
                    活动名称：
                </Col>
                <Col span={10}>
                    <Input placeholder="短信活动名称" />
                </Col>
            </Row>
            <Row gutter={8} style={{marginTop:24, display: 'flex', alignItems: 'center'}}>
                <Col span={4} style={{textAlign: 'right'}}>
                    发送人群：
                </Col>
                <Col span={10}>
                    <RadioGroup onChange={this.onChange.bind(this)} defaultValue="a">
                        <RadioButton value="a">全部人群</RadioButton>
                        <RadioButton value="b">自定义人群</RadioButton>
                    </RadioGroup>
                </Col>
            </Row>
            <Row gutter={8} style={{display: 'flex', alignItems: 'center'}}>
                <Col span={4} style={{textAlign: 'right'}}>
                </Col>
                <Col span={10}>
                    <span style={{color: 'rgba(0,0,0,0.45)'}}>发送人群数量：5000</span>
                </Col>
            </Row>
            <Row gutter={8} style={{marginTop:24, display: 'flex', alignItems: 'center'}}>
                <Col span={4} style={{textAlign: 'right'}}>
                    计费条数：
                </Col>
                <Col span={10}>
                    <span style={{color: 'red', fontSize: 24}}>10000</span>
                    <span>（当前余额：15000， 发送后剩余： 5000）</span>
                </Col>
            </Row>
        </div>
        this.setState({ steps: steps, data: data });
    }

    //


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
    onSelectChange(selectedRowKeys) {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        let isShowMultiBtn = false;
        if (selectedRowKeys.length > 0) {
            isShowMultiBtn = true;
        } else {
            isShowMultiBtn = false;
        }
        this.setState({ selectedRowKeys: selectedRowKeys, isShowMultiBtn: isShowMultiBtn });
    }

    //
    onNext() {
        const current = this.state.current + 1;
        this.setState({ current: current });
    }
    onPrev() {
        const current = this.state.current - 1;
        this.setState({ current: current });
    }
    onSubmit() {
        this.setState({ btnLoading: true });
        setTimeout(() => {
            this.setState({ btnLoading: false });
            this.props.history.push("/clientSmsSend");
        }, 2000)
    }

    //
    onCloseDlg() {
        this.setState({ dlgVisible: false });
    }
    onConfirmDlg() {
        this.setState({ dlgVisible: false });
    }

    //
    onSelectChange2(selectedRowKeys) {
        this.setState({ selectedRowKeys: selectedRowKeys });
    }

    //
    render() {
        let rowSelection = {
            selectedRowKeys: this.state.selectedRowKeys,
            onChange: this.onSelectChange2.bind(this),
        };
        return (
            <PageLayout selMenu={['应用市场']} fullScreen={true} collapsed={true}
                topTitle="精准短信" topHelpText="使用帮助" topHelpLink="/phoneAppDetail">
                <div className="wxYaoMainStyle">
                    <Menu mode="inline" 
                        defaultSelectedKeys={['1']}
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
                                <Breadcrumb.Item><Link to="/clientSmsSend">短信活动</Link></Breadcrumb.Item>
                                <Breadcrumb.Item>新建活动</Breadcrumb.Item>
                             </Breadcrumb>
                        </div>
                        <div className="wxYaoBody">
                            <div className="wxYaoTitle">
                                <div className="wxYaoTitleArea">
                                    <span style={{fontSize: 16, marginBottom: 16, flex: 1, color: 'rgba(0,0,0,0.85)'}}>
                                        新建活动
                                    </span>
                                </div>
                            </div>
                             <Steps current={this.state.current}>
                                {this.state.steps.map(item => <Step key={item.title} title={item.title} />)}
                            </Steps>
                            <div className="steps-content">
                                {this.state.steps[this.state.current].content}
                            </div>
                            <Divider />
                            <div className="steps-action">
                            {
                                this.state.current < this.state.steps.length - 1
                                &&
                                <Button type="primary" onClick={this.onNext.bind(this)}>下一步</Button>
                            }
                            {
                                this.state.current === this.state.steps.length - 1
                                &&
                                <Button type="primary" onClick={this.onSubmit.bind(this)}
                                    loading={this.state.btnLoading}
                                >
                                    立即发送
                                </Button>
                            }
                            {
                                this.state.current > 0
                                &&
                                <Button style={{ marginLeft: 8 }} onClick={this.onPrev.bind(this)}>
                                    上一步
                                </Button>
                            }
                            </div>
                            <Modal
                                title="自定义人群"
                                visible={this.state.dlgVisible}
                                onCancel={this.onCloseDlg.bind(this)}
                                onOk={this.onConfirmDlg.bind(this)}
                                cancelText="取消"
                                okText="确定"
                                // footer={null}
                            >
                                <div style={{marginBottom: 16, display: 'flex', flex: 1}}>
                                    <div style={{flex: 1, display: 'flex', alignItems: 'center'}}>
                                        <span style={{marginLeft: 12}}>
                                            已选中<span style={{color: 'red'}}>0</span>项
                                        </span>
                                        <a href="javascript:;" style={{marginLeft: 8}}>清空选中</a>
                                    </div>
                                    <div style={{display: 'flex', flexDirection: 'row-reverse', alignItems: 'center'}}>
                                        <Search
                                            placeholder="用户手机号/MAC"
                                            enterButton
                                            style={{marginLeft: 10, width: 200}}
                                        />
                                    </div>
                                </div>
                                <Table dataSource={this.state.data} bordered={true}
                                    rowSelection={rowSelection}
                                >
                                    <Column
                                        title="用户手机号"
                                        dataIndex="phoneNum"
                                    />
                                    <Column
                                        title="用户MAC"
                                        dataIndex="phoneMac"
                                    />
                                </Table>
                            </Modal>
                        </div>
                    </div>
                </div>
            </PageLayout>
        );
    }
}