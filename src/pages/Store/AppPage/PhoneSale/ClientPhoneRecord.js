import React from 'react';
import './ChargeManage.less';
import PageLayout from '../../../../components/PageLayout/PageLayout';
import {
    Menu,
    DatePicker,
    Input,
    Select,
    Table,
    message,
    Button,
} from 'antd';

// const
const Search = Input.Search;
const Option = Select.Option;
const dateFormat = 'YYYY/MM/DD';
const { Column } = Table;
import moment from 'moment';
const { RangePicker } = DatePicker;

//
export default class ClientPhoneRecord extends React.Component {
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
                beginTime: '2018-05-14 11:0' + i,
                callTime: '1000' + i,
                mac: '11:22:33:44:5' + i % 10,
                detail: '备注' + i,
                number: '1352488654' + i % 10,
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
                // 充值管理
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

    render() {
        return (
            <PageLayout selMenu={['应用市场']} fullScreen={true} collapsed={true}
                topTitle="电话营销" topHelpText="使用帮助" topHelpLink="/phoneAppDetail">
                <div className="wxYaoMainStyle">
                    <Menu mode="inline" 
                        defaultSelectedKeys={['3']}
                        style={{ width: 128, backgroundColor: '#fafafa'}}
                        onClick={this.onMenu.bind(this)}
                    >
                        <Menu.Item key="1">电销管理</Menu.Item>
                        <Menu.Item key="2">采购记录</Menu.Item>
                        <Menu.Item key="3">通话记录</Menu.Item>
                    </Menu>
                    <div className="wxYaoContent">
                        <div className="wxYaoBody">
                            <div className="wxYaoTitle">
                                <div className="wxYaoTitleArea">
                                    <span style={{fontSize: 16, marginBottom: 8, flex: 1}}>通话记录</span>
                                </div>
                                <span style={{color: 'rgba(0, 0, 0, 0.45)', marginBottom: 24}}>
                                    显示通话明细，默认为近一个月的通话明细。
                                </span>
                            </div>
                            <div style={{marginBottom: 16, display: 'flex', flex: 1}}>
                                <div style={{flex: 1, display: 'flex', alignItems: 'center'}}>
                                    <span style={{marginLeft: 0}}>通话开始时间：</span>
                                    <RangePicker
                                      defaultValue={[moment('2018/06/04', dateFormat), moment('2018/06/10', dateFormat)]}
                                      format={dateFormat}
                                    />
                                    <Button type="primary" style={{marginLeft: 8}}>查询</Button>
                                    <span style={{marginLeft: 12}}>总通话时长：30000分钟</span>
                                </div>
                            </div>
                            <Table dataSource={this.state.data}
                                bordered={false}
                                locale={{filterConfirm: '确认', filterReset: '清空', emptyText: '暂无数据'}}
                            >
                                <Column
                                    title="通话开始时间"
                                    dataIndex="beginTime"
                                    sorter={(a, b)=>{
                                        return (a.beginTime.length - b.beginTime.length);
                                    }}
                                />
                                <Column
                                    title="通话时长（分钟）"
                                    dataIndex="callTime"
                                    sorter={(a, b)=>{
                                        return (a.callTime.length - b.callTime.length);
                                    }}
                                />
                                <Column
                                    title="商家电话"
                                    dataIndex="number"
                                />
                                <Column
                                    title="用户手机MAC"
                                    dataIndex="mac"
                                />
                                <Column
                                    title="备注"
                                    dataIndex="detail"
                                />
                            </Table>
                        </div>
                    </div>
                </div>
            </PageLayout>
        );
    }
}