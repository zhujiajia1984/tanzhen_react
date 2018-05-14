import React from 'react';
import { Route } from 'react-router-dom';
import { Tabs, Button, Input, Table } from 'antd';
import './Market.less';
import PageLayout from '../../components/PageLayout/PageLayout';
import MarketAdd from './MarketAdd';


// const
const TabPane = Tabs.TabPane;
const Search = Input.Search;
const { Column } = Table;

//
export default class Market extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [], // 表格数据
        }
    }

    // 初始化
    componentDidMount() {
        let data = [];
        for (let i = 0; i < 50; i++) {
            data.push({
                key: i.toString(),
                name: "test" + i,
                id: "12345" + i,
                number: 7000 + i,
                createTime: "2018-05-14 11:49:0" + i % 60,
            });
        }
        this.setState({ data: data });
    }

    // 新建人群
    onAddCrowd() {
        this.props.history.push("/market/addCrowd");
    }

    // 
    render() {
        return (
            <div>
            	<Route exact path={this.props.match.url + '/addCrowd'} component={MarketAdd} />
            	{
            		(this.props.match.isExact)?
					<PageLayout	selMenu={['营销活动']}
					>
						<div>
							<div className="marketTitleRow">
								<div>营销列表</div>
							<div className="marketDetail">
								<a href="javascript:;">功能详情</a>
							</div>
							</div>
							<div className="card-container">
								<Tabs type="card" defaultActiveKey="2">
									<TabPane tab="营销列表" key="1">
										<p>测试</p>
									</TabPane>
									<TabPane tab="营销人群" key="2">
										<div style={{marginBottom: 16, display: 'flex', flex: 1}}>
											<div style={{flex: 1, display: 'flex', alignItems: 'center'}}>
												<Button type="primary" onClick={this.onAddCrowd.bind(this)}>新增人群</Button>
											</div>
											<div style={{display: 'flex', flexDirection: 'row-reverse', alignItems: 'center'}}>
												<Search
													placeholder="人群包名称搜索"
													enterButton
													style={{marginLeft: 10}}
												/>
											</div>
										</div>
										<Table dataSource={this.state.data}
											bordered={false}
										>
											<Column
												title="人群包名称"
												dataIndex="name"
											/>
											<Column
												title="人群包ID"
												dataIndex="id"
											/>
											<Column
												title="人群数量"
												dataIndex="number"
											/>
											<Column
												title="创建时间"
												dataIndex="createTime"
											/>
											<Column
												title="操作"
												dataIndex="action"
												render={(text, record) => (
													<span><a href="javascript:;">删除</a></span>
												)}
											/>
										</Table>
									</TabPane>
								</Tabs>
							</div>
						</div>
					</PageLayout>
	            	:""
	            }
			</div>
        );
    }
}