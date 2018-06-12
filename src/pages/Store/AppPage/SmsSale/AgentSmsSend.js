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
    Badge,
    Breadcrumb
} from 'antd';
import { Link } from 'react-router-dom';

// const
const Search = Input.Search;
const Option = Select.Option;
const { Column } = Table;

//
export default class AgentSmsSend extends React.Component {
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
                eventName: "活动名称" + i,
                status: i % 2,
                sendTime: '2017-05-06',
                sendNumber: (i + 1) * 1000,
                successNumber: (i + 1) * 1000 - i,
                kouNumber: (i + 1) * 1000 - i,
                clientName: '广告主名称' + i,
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
        // this.setState({ dlgVisible: true, dlgTitle: '人群转化' });
        this.props.history.push("/clientSmsEvent");
    }
    onSmsBind() {
        this.props.history.push("/clientSmsRecord");
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
        const expandRowData = (
            <div style={{fontSize: 14}}>
                <Row gutter={16}>
                    <Col span={24}>
                        <div style={{fontWeight: 'bold'}}>
                            短信内容：
                        </div>
                    </Col>
                </Row>
                <div className="wxYaolink">【新数网络】尊敬的用户，您创建的短信模板ID：34567已通过审核，请登录雷达系统进行使用。</div>
            </div>
        )
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
                    </Menu>
                    <div className="wxYaoContent">
                        <div style={{marginTop: '-16px', marginBottom: '8px'}}>
                            <Breadcrumb>
                                <Breadcrumb.Item><Link to="/store">应用市场</Link></Breadcrumb.Item>
                                <Breadcrumb.Item>短信活动</Breadcrumb.Item>
                             </Breadcrumb>
                        </div>
                        <div className="wxYaoBody">
                            <div className="wxYaoTitle">
                                <div className="wxYaoTitleArea">
                                    <span style={{fontSize: 16, marginBottom: 8, flex: 1, color: 'rgba(0,0,0,0.85)'}}>
                                        短信活动
                                    </span>
                                </div>
                                <span style={{color: 'rgba(0, 0, 0, 0.45)', marginBottom: 8}}>
                                    可查询所有客户的短信活动。
                                </span>
                            </div>
                            <div style={{marginBottom: 16, display: 'flex', flex: 1}}>
                                <div style={{flex: 1, display: 'flex', alignItems: 'center'}}>
                                    <span>活动总数：1000，其中已发送：500，发送中：500</span>
                                </div>
                                <div style={{display: 'flex', flexDirection: 'row-reverse', alignItems: 'center'}}>
                                    <Search
                                        placeholder="活动名称/客户名称 模糊搜索"
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
                                expandedRowRender={(record) => {
                                    return expandRowData;
                                }}
                                // rowSelection={rowSelection}
                                // pagination={this.state.pagination}
                                locale={{filterConfirm: '确认', filterReset: '清空', emptyText: '暂无数据'}}
                            >
                                <Column
                                    title="活动名称"
                                    dataIndex="eventName"
                                />
                                <Column
                                    title="客户名称"
                                    dataIndex="clientName"
                                />
                                <Column
                                    title="发送状态"
                                    dataIndex="status"
                                    filters={[{
                                        text: '发送中',
                                        value: 0
                                    },{
                                        text: '已发送',
                                        value: 1
                                    }]}
                                    filterMultiple={false}
                                    onFilter={(value, record)=>{
                                        return (record.status == value);
                                    }}
                                    render={(text)=>{
                                        if(text == 0){
                                            return <div>
                                                <Badge status="default" text="发送中" />
                                            </div>
                                        }else if(text == 1){
                                            return <Badge status="success" text="已发送" />;
                                        }
                                    }}
                                />
                                <Column
                                    title="发送人群数量"
                                    dataIndex="sendNumber"
                                />
                                <Column
                                    title="发送成功人数"
                                    dataIndex="successNumber"
                                />
                                <Column
                                    title="计费条数"
                                    dataIndex="kouNumber"
                                    sorter={(a, b)=>{
                                        return (a.kouNumber - b.kouNumber);
                                    }}
                                />
                                <Column
                                    title="发送时间"
                                    dataIndex="sendTime"
                                    sorter={(a, b)=>{
                                        return (a.sendTime - b.sendTime);
                                    }}
                                    render={(text)=>(
                                        <div title="2018-05-06 14:11:06">{text}</div>
                                    )}
                                />
                            </Table>
                        </div>
                    </div>
                </div>
            </PageLayout>
        );
    }
}