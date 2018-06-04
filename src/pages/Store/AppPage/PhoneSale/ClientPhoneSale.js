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
    Card,
    Icon,
    Steps,
    Badge
} from 'antd';

// const
const Search = Input.Search;
const Option = Select.Option;
const { Column } = Table;
const { Meta } = Card;
const Step = Steps.Step;


//
export default class ClientPhoneSale extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            dlgTitle: '绑定通话',
            dlgVisible: false,
            dlgConfirmLoading: false,
        }
    }

    componentDidMount() {
        let data = [];
        for (let i = 0; i < 50; i++) {
            data.push({
                key: i.toString(),
                phoneNumber: "130****543" + i % 10,
                phoneMAC: '00ec0ac8278' + i % 10,
                phoneStatus: i,
                detail: '备注' + i,
                callNum: i,
            });
        }
        this.setState({ data: data });
    }


    onMenu({ item, key, keyPath }) {
        switch (key) {
            case "1":
                // 小号管理
                this.props.history.push("/clientPhoneSale");
                break;
            case "2":
                // 采购管理
                this.props.history.push("/clientBuyManage");
                break;
            case "3":
                // 通话记录
                this.props.history.push("/clientPhoneRecord");
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
    onPhoneBind() {
        this.setState({ dlgVisible: true, dlgTitle: '绑定通话' });
    }
    onLoadPeople() {
        this.setState({ dlgVisible: true, dlgTitle: '人群转化' });
    }
    onEditSalePhone() {
        this.setState({ dlgVisible: true, dlgTitle: '商家电话绑定' });
    }

    render() {
        const expandRowData = (
            <div style={{fontSize: 14}}>
                <Row gutter={16}>
                    <Col span={24}>
                        <div style={{fontWeight: 'bold'}}>
                            通话记录：
                        </div>
                    </Col>
                </Row>
                <div className="wxYaolink">通话3分钟，开始时间：2018-05-17 12:12</div>
                <div className="wxYaolink">通话5分钟，开始时间：2018-05-14 12:16</div>
            </div>
        )
        const title = <div style={{display: 'flex', alignItems: 'center'}}>
            <Icon type="clock-circle" style={{fontSize: 24, color: '#2fb26a'}}/>
            <span style={{marginLeft: 12, color:'rgba(0, 0, 0, 0.65)', fontSize: 12}}>剩余通话时长： </span>
            <span style={{color: 'black', fontSize: 18, fontWeight: 'bold'}}>1000</span>
            <span style={{marginLeft: 12, color:'rgba(0, 0, 0, 0.65)', fontSize: 12}}>
                分钟
            </span>
            <span style={{marginLeft: 12, color:'red', fontSize: 12}}>
                请先绑定商家电话或用户手机号！
            </span>
        </div>
        const clientPhoneNum = <div style={{color: 'black'}}>
            <span>13524776543</span>
            <a href="javascript:;" style={{marginLeft: 6}}>
                <Icon type="edit" style={{color: 'rgba(0, 0, 0, 0.65)'}} 
                    onClick={this.onEditSalePhone.bind(this)}
                />
            </a>
        </div>
        const clientPhoneNumDesp = <div style={{display: 'flex', justifyContent: 'center'}}>
            <span>商家电话</span>
        </div>
        const smallPhoneNum = <div style={{color: 'black', fontSize: 20, width: 250}}>
            <span>15017650321(通话中...)</span>
        </div>
        const smallPhoneNumDesp = <div style={{display: 'flex', justifyContent: 'center'}}>
            <span>小号</span>
        </div>
        const userPhoneNum = <div style={{color: 'black'}}>
            <span>135****3456</span>
        </div>
        const userPhoneNumDesp = <div style={{display: 'flex', justifyContent: 'center'}}>
            <span>用户手机</span>
        </div>
        return (
            <PageLayout selMenu={['应用市场']} fullScreen={true} collapsed={true}
                topTitle="电话营销" topHelpText="使用帮助" topHelpLink="/phoneAppDetail">
                <div className="wxYaoMainStyle">
                    <Menu mode="inline" 
                        defaultSelectedKeys={['1']}
                        style={{ width: 128, backgroundColor: '#fafafa'}}
                        onClick={this.onMenu.bind(this)}
                    >
                        <Menu.Item key="1">电销管理</Menu.Item>
                        <Menu.Item key="2">采购记录</Menu.Item>
                        <Menu.Item key="3">通话记录</Menu.Item>
                    </Menu>
                    <div className="wxYaoContent">
                        <Card bordered={false} className="storeCardItem"
                            title={title}
                        >
                            <div>
                                <Steps progressDot current={2}>
                                    <Step title={clientPhoneNum}
                                        description={clientPhoneNumDesp} />
                                    <Step title={smallPhoneNum}
                                        description={smallPhoneNumDesp} />
                                    <Step title={userPhoneNum}
                                        description={userPhoneNumDesp} />
                                </Steps>
                            </div>
                        </Card>
                        <div className="wxYaoBody" style={{marginTop: 8}}>
                            <div style={{marginBottom: 16, display: 'flex', flex: 1}}>
                                <div style={{flex: 1, display: 'flex', alignItems: 'center'}}>
                                    <Button type="primary" onClick={this.onLoadPeople.bind(this)}>人群转化</Button>
                                    <span style={{marginLeft: 12}}>人群包名称：昨日新访客+前日新访客</span>
                                    <span style={{marginLeft: 12}}>人群数量：5000</span>
                                    <span style={{marginLeft: 12}}>转化手机数：2000</span>
                                </div>
                                <div style={{display: 'flex', flexDirection: 'row-reverse', alignItems: 'center'}}>
                                    <Search
                                        placeholder="手机MAC 模糊搜索"
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
                                    (this.state.dlgTitle == "绑定通话") &&
                                    <div>
                                        <Row gutter={8}>
                                            <Col span={24}>
                                                <span>确认要绑定当前用户吗？</span>
                                            </Col>
                                        </Row>
                                        <Row gutter={8}>
                                            <Col span={24}>
                                                <span style={{color: 'rgba(0,0,0,0.45)', fontSize: 12}}>
                                                    绑定后拨打小号即可和用户进行通话。
                                                </span>
                                            </Col>
                                        </Row>
                                    </div>
                                }
                                {
                                    (this.state.dlgTitle == "人群转化") &&
                                    <div>
                                        <Row gutter={8}>
                                            <Col span={6} style={{textAlign: 'right'}}>
                                                选择人群
                                            </Col>
                                            <Col span={18}>
                                                <Select
                                                    mode="multiple"
                                                    style={{width: '100%'}}
                                                >
                                                    <Option key={1} value="p1">人群1</Option>
                                                    <Option key={2} value="p2">人群2</Option>
                                                    <Option key={3} value="p3">人群3</Option>
                                                    <Option key={4} value="p4">人群4</Option>
                                                </Select>
                                            </Col>
                                        </Row>
                                    </div>
                                }
                                {
                                    (this.state.dlgTitle == "商家电话绑定") &&
                                    <div>
                                        <Row gutter={8}>
                                            <Col span={6} style={{textAlign: 'right'}}>
                                                <span>商家电话：</span>
                                            </Col>
                                            <Col span={18}>
                                                <Input />
                                            </Col>
                                        </Row>
                                        <Row gutter={8}>
                                            <Col span={6} style={{textAlign: 'right'}}>
                                            </Col>
                                            <Col span={18} style={{marginTop: 8}}>
                                                <div style={{color: 'rgba(0,0,0,0.45)', fontSize: 12}}>
                                                    支持固话和手机号，固话格式为：021-68879927
                                                </div>
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
                                    title="手机MAC"
                                    dataIndex="phoneMAC"
                                />
                                <Column
                                    title="手机号"
                                    dataIndex="phoneNumber"
                                />
                                <Column
                                    title="已通话次数"
                                    dataIndex="callNum"
                                    sorter={(a, b)=>{
                                        return (a.callNum - b.callNum);
                                    }}
                                />
                                <Column
                                    title="状态"
                                    dataIndex="phoneStatus"
                                    filters={[{
                                        text: '已绑定',
                                        value: 0
                                    }]}
                                    filterMultiple={false}
                                    onFilter={(value, record)=>{
                                        return (record.phoneStatus == value);
                                    }}
                                    render={(text)=>{
                                        if(text == 0){
                                            return <Badge status="success" text="已绑定" />
                                        }else{
                                            return "-";
                                        }
                                    }}
                                />
                                <Column
                                    title="备注"
                                    dataIndex="detail"
                                />
                                <Column
                                    title="操作"
                                    dataIndex="action"
                                    render={() => {
                                        return <span>
                                            <a href="javascript:;" onClick={this.onPhoneBind.bind(this)}>
                                                绑定
                                            </a>
                                        </span>
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