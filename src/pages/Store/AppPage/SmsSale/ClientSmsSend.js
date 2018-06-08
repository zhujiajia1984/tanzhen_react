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
    message,
} from 'antd';

// const
const Search = Input.Search;
const Option = Select.Option;
const { Column } = Table;

//
export default class ClientSmsSend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            dlgTitle: '人群转化',
            visible: false,
            selectedRowKeys: [],
            isShowMultiBtn: false,
            pagination: {
                showSizeChanger: true,
                pageSizeOptions: ['10', '50', '100']
            }
        }
    }

    componentDidMount() {
        let data = [];
        for (let i = 0; i < 50; i++) {
            data.push({
                key: i.toString(),
                phoneNumber: "130****543" + i % 10,
                phoneMAC: '00ec0a' + i % 10 + '****',
                callNum: i,
                detail: '备注' + i,
            });
        }
        this.setState({ data: data });
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
    onLoadPeople() {
        this.setState({ dlgVisible: true, dlgTitle: '人群转化' });
    }
    onSmsBind() {
        this.setState({ dlgVisible: true, dlgTitle: '绑定通话' });
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
    render() {
        const rowSelection = {
            selectedRowKeys: this.state.selectedRowKeys,
            onChange: this.onSelectChange.bind(this),
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
                        <Menu.Item key="1">短信发送</Menu.Item>
                        <Menu.Item key="2">短信模板</Menu.Item>
                        <Menu.Item key="3">发送记录</Menu.Item>
                    </Menu>
                    <div className="wxYaoContent">
                        <div className="wxYaoBody">
                            <div style={{marginBottom: 16, display: 'flex', flex: 1}}>
                                <div style={{flex: 1, display: 'flex', alignItems: 'center'}}>
                                    <span style={{color:'rgba(0, 0, 0, 0.65)', fontSize: 12}}>
                                        短信剩余条数：
                                    </span>
                                    <span style={{color: 'black', fontSize: 18, fontWeight: 'bold'}}>
                                        5000
                                    </span>
                                </div>
                            </div>
                            <div style={{marginBottom: 16, display: 'flex', flex: 1}}>
                                <div style={{flex: 1, display: 'flex', alignItems: 'center'}}>
                                    <Button type="primary" onClick={this.onLoadPeople.bind(this)}>人群转化</Button>
                                    <span style={{marginLeft: 12}}>人群包名称：昨日新访客+前日新访客</span>
                                    <span style={{marginLeft: 12}}>人群数量：5000</span>
                                    <span style={{marginLeft: 12}}>转化手机数：2000</span>
                                </div>
                                <div style={{display: 'flex', flexDirection: 'row-reverse', alignItems: 'center'}}>
                                    <Search
                                        placeholder="手机MAC/手机号 模糊搜索"
                                        enterButton
                                        style={{marginLeft: 10, width: 300}}
                                    />
                                </div>
                            </div>
                            {
                                this.state.isShowMultiBtn && 
                                <div>
                                    <Button type="primary" onClick={this.onLoadPeople.bind(this)}>
                                        批量发送短信
                                    </Button>
                                    <span style={{marginLeft: 12}}>已选中3条记录</span>
                                </div>
                            }
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
                            </Modal>
                            <Table dataSource={this.state.data}
                                bordered={false}
                                rowSelection={rowSelection}
                                pagination={this.state.pagination}
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
                                    title="已发送次数"
                                    dataIndex="callNum"
                                    sorter={(a, b)=>{
                                        return (a.callNum - b.callNum);
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
                                            <a href="javascript:;" onClick={this.onSmsBind.bind(this)}>
                                                发送短信
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