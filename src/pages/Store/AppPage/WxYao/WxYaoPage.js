import React from 'react';
import './WxYaoPage.less';
import WxYaoPageSetting from './WxYaoPageSetting';
import { Route } from 'react-router-dom';
import { Table, Button, Input, Badge, Row, Col, Divider, Modal, Select, Tag } from 'antd';

//const
const { Column } = Table;
const Search = Input.Search;
const Option = Select.Option;


// 
export default class WxYaoPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            pagination: {
                defaultPageSize: 10,
            },
        }
    }

    componentDidMount() {
        let data = [];
        for (let i = 0; i < 50; i++) {
            data.push({
                key: i.toString(),
                pageName: '页面名称' + i,
                picture: i,
                mainTitle: '主标题' + i,
                subTitle: '副标题' + i,
                devNum: i % 50,
                createTime: "2018-05-14 11:49:0" + i % 60,
                lastModified: "2018-05-14 11:49:0" + i % 60,
            });
        }
        this.setState({ data: data });
    }

    //
    onAddPage() {
        this.props.history.push("/wxYao/page/setting");
    }

    render() {
        const time = (
            <div title="2018-05-14 13:13:13">2018-05-14</div>
        )
        const expandRowData = (
            <div style={{fontSize: 14}}>
                <Row gutter={16}>
                    <Col span={24}>
                        <div style={{fontWeight: 'bold'}}>
                            页面链接：
                        </div>
                    </Col>
                </Row>
                <div className="wxYaolink">
                    <span style={{marginRight: 8}}>1：http://radar.wisemedia.cn</span>
                    <a href="http://radar.wisemedia.cn" target="_blank">预览</a>
                </div>
                <Row gutter={16}>
                    <Col span={24}>
                        <div style={{fontWeight: 'bold', marginTop: 12}}>
                            绑定设备：
                        </div>
                    </Col>
                </Row>
                <div className="wxYaolink">
                    <span style={{marginRight: 8}}>11:22:33:44:55:66(名称1)</span>
                </div>
                <div className="wxYaolink">
                    <span style={{marginRight: 8}}>11:22:33:44:55:66(名称2)</span>
                </div>
            </div>
        )
        return (
            <div className="wxYaoPageStyle">
                <div className="wxYaoPageContent">
                    <Route path={this.props.match.url + '/setting'} component={WxYaoPageSetting} />
                    {
                        (this.props.match.isExact)?
                        <div className="wxYaoPageBody">
                            <div className="wxYaoTitle">
                                <div className="wxYaoTitleArea">
                                    <span style={{fontSize: 16, marginBottom: 8, flex: 1}}>页面配置</span>
                                </div>
                                <span style={{color: 'rgba(0, 0, 0, 0.45)', marginBottom: 24}}>
                                    可以创建页面并在摇一摇配置中绑定页面。已绑定的页面无法删除，需要先取消页面绑定后才能删除。
                                </span>
                            </div>
                            <div style={{marginBottom: 16, display: 'flex', flex: 1}}>
                                <div style={{flex: 1, display: 'flex', alignItems: 'center'}}>
                                    <Button type="primary" onClick={this.onAddPage.bind(this)}>新增页面</Button>
                                </div>
                                <div style={{display: 'flex', flexDirection: 'row-reverse', alignItems: 'center'}}>
                                    <Search
                                        placeholder="页面名称/主标题/副标题模糊搜索"
                                        enterButton
                                        style={{marginLeft: 10, width: 300}}
                                    />
                                </div>
                            </div>
                            <Table dataSource={this.state.data}
                                bordered={false}
                                locale={{filterConfirm: '确认', filterReset: '清空', emptyText: '暂无数据'}}
                                expandedRowRender={(record) => {
                                    return expandRowData;
                                }}
                                pagination={this.state.pagination}
                            >
                                <Column
                                    title="缩略图"
                                    dataIndex="picture"
                                    render={(text)=>{
                                        return <img src="https://radar.weiquaninfo.cn/radar/assets/images/logo-120-120.jpg"
                                            style={{width: 48, height: 48}}
                                        />;
                                    }}
                                />
                                <Column
                                    title="页面名称"
                                    dataIndex="pageName"
                                />
                                <Column
                                    title="主标题"
                                    dataIndex="mainTitle"
                                />
                                <Column
                                    title="副标题"
                                    dataIndex="subTitle"
                                />
                                <Column
                                    title="已绑定设备数"
                                    dataIndex="devNum"
                                    sorter={(a, b)=>{
                                        return (a.devNum.length - b.devNum.length);
                                    }}
                                />
                                <Column
                                    title="创建时间"
                                    dataIndex="createTime"
                                    sorter={(a, b)=>{
                                        return (a.createTime.length - b.createTime.length);
                                    }}
                                    render={(text)=>{
                                        return time;
                                    }}
                                />
                                <Column
                                    title="最后更新时间"
                                    dataIndex="lastModified"
                                    sorter={(a, b)=>{
                                        return (a.lastModified.length - b.lastModified.length);
                                    }}
                                    render={(text)=>{
                                        return time;
                                    }}
                                />
                                <Column
                                    title="操作"
                                    dataIndex="action"
                                    render={(text, record) => {
                                        return <span>
                                            <a href="javascript:;" onClick={this.onAddPage.bind(this)}>
                                                修改
                                            </a>
                                            <Divider type="vertical" />
                                            <a href="javascript:;">删除</a>
                                        </span>
                                    }}
                                />
                            </Table>
                        </div>:""
                    }
                </div>
            </div>
        );
    }
}