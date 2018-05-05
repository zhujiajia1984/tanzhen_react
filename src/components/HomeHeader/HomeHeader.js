import React from 'react';
import './HomeHeader.less';
import { withRouter } from 'react-router';

// const
const contentWidth = 1200;

//
class HomeHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contentPaddingLR: 0, // 顶部左右padding
            headerFullWidth: false, // 顶部是否固定1200px（当窗口小于1200px时）
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
            let remain = (width - contentWidth) / 2;
            this.setState({ contentPaddingLR: remain, headerFullWidth: false });
        } else {
            this.setState({ contentPaddingLR: 0, headerFullWidth: true });
        }
    }

    // 点击菜单事件
    menuItemClick({ item, key, keyPath }) {
        switch (key) {
            case "home":
                this.props.history.push('/');
                break;
            case "wxAccount":
                console.log("wxAccount");
                break;
            case "wxMiniApp":
                console.log("wxMiniApp");
                break;
            default:
                break;
        }
    }

    // 进入新数官网
    onHomePage() {
        window.open("http://www.wisemedia.cn");
    }

    //
    render() {
        return (
            <div className="HomeHeaderStyle" 
                style={{paddingLeft: this.state.contentPaddingLR, 
                    paddingRight: this.state.contentPaddingLR, width: (this.state.headerFullWidth)?contentWidth:'100%'
                }}
            >
                <div className="HomeHeaderArea"
                >
                    <div className="leftArea">
                        <div className="logoArea">
                            <img src="https://weiquaninfo.cn/images/homepage/homepage_logo.png"
                                alt="logo" style={{width: '100%', height: '100%'}} 
                            />
                        </div>
                    </div>
                    <div className="rightArea">
                        <a href="javascript:;" className="about_us"
                            onClick={this.onHomePage.bind(this)}>关于我们</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(HomeHeader);