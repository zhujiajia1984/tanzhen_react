import React from 'react';
import './SalePoint.less';
import { Form, Input, Icon, Button, Row, Col, Tabs } from 'antd';
import PeopleImport from '../../../../components/WiseDspApp/PeopleImport/PeopleImport';
import PeopleImportRecord from '../../../../components/WiseDspApp/PeopleImportRecord/PeopleImportRecord';

// const
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;

// 
export default class SalePoint extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDspLogin: false,
            submitLoginLoading: false,
        }
    }

    //
    componentDidMount() {
        let isDspLogin = localStorage.getItem('isDspLogin');
        if (isDspLogin) {
            this.setState({ isDspLogin: true });
        } else {
            this.setState({ isDspLogin: false });
        }
    }

    //
    onBack() {
        this.props.history.push("/store");
    }
    onLogin() {
        this.setState({ submitLoginLoading: true });
        setTimeout(() => {
            localStorage.setItem('isDspLogin', true);
            this.setState({
                submitLoginLoading: false,
                isDspLogin: true
            });
        }, 1000)
    }

    render() {
        return (
            <div className="dspSpMainStyle">
                <div className="dspSpContent">
                    {
                        (this.state.isDspLogin)?
                        <div className="wiseDspLoginedPage">
                            <Tabs defaultActiveKey="1">
                                <TabPane tab="人群导入" key="1">
                                    <PeopleImport></PeopleImport>
                                </TabPane>
                                <TabPane tab="导入记录" key="2">
                                    <PeopleImportRecord></PeopleImportRecord>
                                </TabPane>
                            </Tabs>
                        </div>:
                        <div className="wiseDspLoginPage">
                            <div className="wxYaoTitle">
                                <div className="wxYaoTitleArea">
                                    <span style={{fontSize: 16, marginBottom: 8, flex: 1}}>新数灯塔授权</span>
                                </div>
                                <span style={{color: 'rgba(0, 0, 0, 0.45)', marginBottom: 24}}>
                                    使用新数灯塔账号和密码对新数雷达平台进行授权，授权成功后即可使用相应功能。
                                </span>
                            </div>
                            <div className="wiseDspLoginBody">
                                <Form>
                                    <FormItem
                                        label="灯塔账号"
                                        labelCol={{span: 6, offset: 0}}
                                        wrapperCol={{span: 10, offset: 0}}
                                    >
                                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                                            placeholder="请输入账号"
                                            size="large"
                                            // onChange={this.onAccountChange.bind(this)}
                                        />
                                    </FormItem>
                                    <FormItem 
                                        label="灯塔密码"
                                        labelCol={{span: 6, offset: 0}}
                                        wrapperCol={{span: 10, offset: 0}}
                                     >
                                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                                            placeholder="请输入密码"
                                            size="large"
                                            type="password"
                                            // onChange={this.onPwdChange.bind(this)}
                                        />
                                    </FormItem>
                                    <FormItem
                                    >
                                       <Row>
                                            <Col span={6}>
                                            </Col>
                                            <Col span={10}>
                                                <Button type="primary"
                                                    style={{width: '100px', marginRight: 24}}
                                                    size="large"
                                                    loading={this.state.submitLoginLoading}
                                                    onClick={this.onLogin.bind(this)}
                                                >确认</Button>
                                                <a href="javascript:;" 
                                                    onClick={this.onBack.bind(this)}
                                                    style={{color: 'rgba(0, 0, 0, 0.45)'}}
                                                >返回应用市场</a>
                                            </Col>
                                        </Row>
                                    </FormItem>
                                </Form>
                            </div>
                        </div>
                    }
                </div>
            </div>
        );
    }
}