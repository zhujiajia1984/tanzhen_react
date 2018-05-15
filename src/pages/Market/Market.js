import React from 'react';
import { Route } from 'react-router-dom';
import { Tabs, Button, Input, Table, Row, Col } from 'antd';
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
        const expandRowData = (
            <div style={{fontSize: 14}}>
				<Row gutter={16} style={{marginBottom: 10}}>
					<Col span={24}>
						<div style={{display: 'flex', marginLeft: 24}}>
							人群添加规则：
						</div>
					</Col>
				</Row>
				<Row gutter={16} style={{marginBottom: 10}}>
					<Col span={3}>
						<div style={{display: 'flex', flexDirection: 'row-reverse'}}>
							时间：
						</div>
					</Col>
					<Col span={9}>
						<div>2018-04-15 ~ 2018-05-14</div>
					</Col>
					<Col span={3}>
						<div style={{display: 'flex', flexDirection: 'row-reverse'}}>
							采集点：
						</div>
					</Col>
					<Col span={9}>
						<div>采集点1、采集点2、采集点3</div>
					</Col>
				</Row>
				<Row gutter={16} style={{marginBottom: 10}}>
					<Col span={3}>
						<div style={{display: 'flex', flexDirection: 'row-reverse'}}>
							采集范围：
						</div>
					</Col>
					<Col span={9}>
						<div>有效采集</div>
					</Col>
					<Col span={3}>
						<div style={{display: 'flex', flexDirection: 'row-reverse'}}>
							访客属性：
						</div>
					</Col>
					<Col span={9}>
						<div>新访客</div>
					</Col>
				</Row>
				<Row gutter={16} style={{marginBottom: 10}}>
					<Col span={3}>
						<div style={{display: 'flex', flexDirection: 'row-reverse'}}>
							停留时长：
						</div>
					</Col>
					<Col span={9}>
						<span>30分钟以上</span>
					</Col>
				</Row>
			</div>
        )
        return (
            <div>
            	<Route exact path={this.props.match.url + '/addCrowd'} component={MarketAdd} />
            	{
            		(this.props.match.isExact)?
					<PageLayout	selMenu={['人群管理']}
					>
						<div>
							<div className="marketTitleRow">
								<div>人群管理</div>
							</div>
							<div className="marketBody">
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
									expandedRowRender={(record) => {
										return expandRowData;
									}}
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
										sorter={(a, b)=>{
											return (a.number.length - b.number.length);
										}}
									/>
									<Column
										title="创建时间"
										dataIndex="createTime"
										sorter={(a, b)=>{
											return (a.number.length - b.number.length);
										}}
									/>
									<Column
										title="操作"
										dataIndex="action"
										render={(text, record) => (
											<span><a href="javascript:;">删除</a></span>
										)}
									/>
								</Table>
							</div>
						</div>
					</PageLayout>
	            	:""
	            }
			</div>
        );
    }
}