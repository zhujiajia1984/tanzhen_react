import React from 'react';
import { Carousel } from 'antd';
import './HomeCarousel.less';

// const
const contentWidth = 1200;

export default class HomeCarousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contentPaddingLR: 0, // 顶部左右padding
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
            this.setState({ contentPaddingLR: remain });
        } else {
            this.setState({ contentPaddingLR: 0 });
        }
    }

    //
    render() {
        return (
            <div className="HomeCarouselStyle">
        		<Carousel autoplay={false} autoplaySpeed={5000}>
					<div className="bannerStyle banner1">
						<span className="bannerText" style={{paddingLeft: this.state.contentPaddingLR, 
							paddingRight: this.state.contentPaddingLR}}
						>
                    	客流雷达-大数据营销神器
                    	</span>
                        <span className="bannerDesp" style={{paddingLeft: this.state.contentPaddingLR, 
                            paddingRight: this.state.contentPaddingLR}}
                        >
                        入店客流感知、精准营销推送等多种智能营销方式
                        </span>
					</div>
					<div className="bannerStyle banner2">
						<span className="bannerText" style={{paddingLeft: this.state.contentPaddingLR, 
							paddingRight: this.state.contentPaddingLR}}
						>
                    	店铺客流，尽在掌握
                    	</span>
                        <span className="bannerDesp" style={{paddingLeft: this.state.contentPaddingLR, 
                            paddingRight: this.state.contentPaddingLR}}
                        >
                        客流分析和统计、客流热区展示等多维度客流数据
                        </span>
					</div>
				</Carousel>
        	</div>
        );
    }
}