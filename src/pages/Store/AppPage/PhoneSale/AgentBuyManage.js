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
} from 'antd';

// const
const Search = Input.Search;
const Option = Select.Option;
const { Column } = Table;

//
export default class AgentBuyManage extends React.Component {
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
                buyRecord: '1000' + i,
                numberStatus: i % 2,
                agentName: '代理商' + i,
                buyTime: "2019-05-14  11:49:0" + i % 60,
                lastModified: "2018-05-14 11:49:0" + i % 60,
                area: '城市名称' + i,
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
                        <Menu.Item key="1">小号管理</Menu.Item>
                        <Menu.Item key="2">充值管理</Menu.Item>
                        <Menu.Item key="3">采购记录</Menu.Item>
                    </Menu>
                    <div className="wxYaoContent">
                        <div className="wxYaoBody">
                            <div className="wxYaoTitle">
                                <div className="wxYaoTitleArea">
                                    <span style={{fontSize: 16, marginBottom: 8, flex: 1}}>采购记录</span>
                                </div>
                                <span style={{color: 'rgba(0, 0, 0, 0.45)', marginBottom: 24}}>
                                    显示通话时长的采购记录。
                                </span>
                            </div>
                            <div style={{marginBottom: 16, display: 'flex', flex: 1}}>
                                <div style={{flex: 1, display: 'flex', alignItems: 'center'}}>
                                    <span style={{marginLeft: 0}}>采购总次数：5次</span>
                                    <span style={{marginLeft: 12}}>采购总时长：5000分钟</span>
                                </div>
                            </div>
                            <Table dataSource={this.state.data}
								bordered={false}
								locale={{filterConfirm: '确认', filterReset: '清空', emptyText: '暂无数据'}}
							>
								<Column
									title="采购时间"
									dataIndex="buyTime"
									sorter={(a, b)=>{
										return (a.buyTime.length - b.buyTime.length);
									}}
								/>
								<Column
									title="采购时长（分钟）"
									dataIndex="buyRecord"
									sorter={(a, b)=>{
										return (a.buyRecordlength - b.buyRecord.length);
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