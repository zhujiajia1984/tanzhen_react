import React from 'react';
import './LoginArea.less';
import { Form, Input, Icon, Button } from 'antd';
import { withRouter } from 'react-router';

// const
const contentWidth = 1200;
const FormItem = Form.Item;

// 
class LoginArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            right: 0, // 右边距离
            isLoginLoading: false, // 是否登陆中状态
            account: "", // 当前账号
            password: "", // 当前密码
            help: "", // 错误信息
        }
    }

    // init
    componentDidMount() {
        this.setContentPaddingLR();
        // 绑定事件
        window.addEventListener('resize', this.onWindowResize.bind(this));
    }

    // close
    componentWillUnmount() {
        // 解绑事件
        window.removeEventListener('resize', this.onWindowResize.bind(this));
    }

    // window resize event
    onWindowResize(e) {
        this.setContentPaddingLR();
    }

    // 设置顶部内容的padding
    setContentPaddingLR() {
        let width = document.getElementById('root').clientWidth;
        if (width > contentWidth) {
            // 大屏幕
            let remain = (width - contentWidth) / 2;
            this.setState({ right: remain });
        } else {
            // 小屏幕
            this.setState({ right: width - contentWidth });
        }
    }

    // 点击登录按钮
    onLogin() {
        this.setState({ isLoginLoading: true });
        setTimeout(() => {
            let help = "";
            // if (this.state.password.length === 0 || this.state.account.length === 0) {
            //     help = "请输入账号或密码"
            // }
            this.setState({ isLoginLoading: false });
            this.props.history.push("/index");
        }, 200)
    }

    // 账号和密码填入
    onAccountChange(e) {
        this.setState({ account: e.target.value });
    }
    onPwdChange(e) {
        this.setState({ password: e.target.value });
    }

    //
    render() {
        return (
            <div className="LoginAreaStyle" style={{right: this.state.right}}>
                <div className="loginTitle">
                    <span>登录雷达平台</span>
                </div>
                <Form>
                    <FormItem
                    >
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                            placeholder="账号名/邮箱/手机号"
                            size="large"
                            onChange={this.onAccountChange.bind(this)}
                        />
                    </FormItem>
                    <FormItem help={this.state.help}>
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                            placeholder="请输入密码"
                            size="large"
                            type="password"
                            onChange={this.onPwdChange.bind(this)}
                        />
                    </FormItem>
                    <FormItem style={{marginBottom: 0}}>
                        <Button 
                            type="primary"
                            style={{width: '100%'}}
                            size="large"
                            loading={this.state.isLoginLoading}
                            onClick={this.onLogin.bind(this)}
                        >登录</Button>
                        <div className="forgetPwdStyle">
                            <a>忘记密码</a>
                        </div> 
                    </FormItem>
                </Form>
            </div>
        );
    }
}

export default withRouter(LoginArea);