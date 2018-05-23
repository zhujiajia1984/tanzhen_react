import React from 'react';
import './PeopleImportRecord.less';
import { Table, Button, Input, Row, Col, Select, Badge } from 'antd';

//const
const { Column } = Table;

// 
export default class PeopleImportRecord extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
    }

    //
    componentDidMount() {
        let data = [];
        for (let i = 0; i < 50; i++) {
            data.push({
                key: i.toString(),
                peopleName: "人群包名称" + i,
                peopleID: i,
                spName: "营销点" + i % 10,
                spID: i,
                company: "广告主名称" + i,
                status: i,
            });
        }
        this.setState({ data: data });
    }

    render() {
        const expandRowData = (
            <div style={{fontSize: 14}}>
                <Row gutter={16}>
                    <Col span={24}>
                        <div style={{fontWeight: 'bold'}}>
                            导入详情：
                        </div>
                    </Col>
                </Row>
                <div className="wxYaolink">人群数量: 5000</div>
                <div className="wxYaolink">导入数量: 3000</div>
            </div>
        )
        return (
            <div className="peopleImportStyle">
                <div className="searchArea">
                    <Row gutter={{xs: 8, sm: 16, md: 24}}>
                        <Col xs={24} sm={24} md={12} lg={12} xl={6} className="searchItemStyle">
                            <span>人群包名称：</span>
                            <Input />
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={12} xl={6} className="searchItemStyle">
                            <span>人群包ID：</span>
                            <Input />
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={12} xl={6} style={{marginTop: 4}}>
                            <Button type="primary" style={{width: 80}}
                            >
                                搜索
                            </Button>
                        </Col>
                    </Row>
                </div>
                <Table dataSource={this.state.data}
                    bordered={false}
                    locale={{filterConfirm: '确认', filterReset: '清空', emptyText: '暂无数据'}}
                    expandedRowRender={(record) => {
                        return expandRowData;
                    }}
                >
                    <Column
                        title="人群包名称"
                        dataIndex="peopleName"
                    />
                    <Column
                        title="人群包ID"
                        dataIndex="peopleID"
                    />
                    <Column
                        title="营销点名称"
                        dataIndex="spName"
                    />
                    <Column
                        title="营销点ID"
                        dataIndex="spID"
                    />
                    <Column
                        title="广告主名称"
                        dataIndex="company"
                    />
                    <Column
                        title="导入状态"
                        dataIndex="status"
                        filters={[{
							text: '导入成功',
							value: 0
						}, {
							text: '导入中',
							value: 1
						},{
							text: '导入失败',
							value: 2
						}]}
						filterMultiple={false}
						onFilter={(value, record)=>{
							return (record.status%3)==value;
						}}
                        render={(text)=>{
						if(text%3 === 0){
							return <Badge status="success" text="导入成功" />
						}else if(text%3 === 1){
							return <Badge status="default" text="导入中" />
						}else{
							return <div title="显示导入失败原因">
								<Badge status="error" text="导入失败" />
							</div>	
						}
					}}
                    />
                </Table>
            </div>
        );
    }
}