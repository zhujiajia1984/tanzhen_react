import React from 'react';
import { Table, Button, Input, Row, Col, Modal, Select } from 'antd';
import './PeopleImport.less';

//const
const { Column } = Table;
const Option = Select.Option;


//
export default class PeopleImport extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            dlgVisible: false,
        }
    }
    //
    componentDidMount() {
        let data = [];
        for (let i = 0; i < 50; i++) {
            data.push({
                key: i.toString(),
                salePointId: i,
                salePointName: "营销点" + i % 10,
                company: "公司名" + i,
            });
        }
        this.setState({ data: data });
    }

    //
    onCloseDlg() {
        this.setState({ dlgVisible: false });
    }
    onConfirmDlg() {
        // 保存配置
        this.setState({ confirmLoading: true });
        setTimeout(() => {
            this.setState({ dlgVisible: false, confirmLoading: false });
        }, 1000);

    }
    onImportPeople() {
        this.setState({ dlgVisible: true });
    }

    //
    render() {
        return (
            <div className="peopleImportStyle">
                <div className="searchArea">
                    <Row gutter={{xs: 8, sm: 16, md: 24}}>
                        <Col xs={24} sm={24} md={12} lg={12} xl={6} className="searchItemStyle">
                            <span>营销点ID：</span>
                            <Input />
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={12} xl={6} className="searchItemStyle">
                            <span>营销点名称：</span>
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
                <Modal
                    title="人群导入"
                    visible={this.state.dlgVisible}
                    onCancel={this.onCloseDlg.bind(this)}
                    onOk={this.onConfirmDlg.bind(this)}
                    cancelText="取消"
                    okText="确定"
                    confirmLoading={this.state.confirmLoading}
                >
                    <Row gutter={8} className="peopleImportDlgRowItem">
                        <Col span={6} style={{textAlign: 'right'}}>
                            选择人群包名称：
                        </Col>
                        <Col span={18}>
                            <Select defaultValue="1" style={{ width: '100%' }}>
                                <Option value="1">未选择</Option>
                                <Option value="2">人群名1</Option>
                                <Option value="3">人群名2</Option>
                            </Select>
                        </Col>
                    </Row>
                    <Row gutter={8} className="peopleImportDlgRowItem">
                        <Col span={6} style={{textAlign: 'right'}}>
                            人群包ID：
                        </Col>
                         <Col span={18}>
                            <span>-</span>
                        </Col>
                    </Row>
                    <Row gutter={8} className="peopleImportDlgRowItem">
                        <Col span={6} style={{textAlign: 'right'}}>
                            人群数量：
                        </Col>
                         <Col span={18}>
                            <span>-</span>
                        </Col>
                    </Row>
                </Modal>
                <Table dataSource={this.state.data}
                    bordered={false}
                    locale={{filterConfirm: '确认', filterReset: '清空', emptyText: '暂无数据'}}
                >
                    <Column
                        title="营销点ID"
                        dataIndex="salePointId"
                    />
                    <Column
                        title="营销点名称"
                        dataIndex="salePointName"
                    />
                    <Column
                        title="广告主名称"
                        dataIndex="company"
                    />
                    <Column
                        title="操作"
                        dataIndex="action"
                        render={(text, record) => {
                            return <span>
                                <a href="javascript:;" onClick={this.onImportPeople.bind(this)}>
                                    人群导入
                                </a>
                            </span>
                        }}
                    />
                </Table>
            </div>
        );
    }
}