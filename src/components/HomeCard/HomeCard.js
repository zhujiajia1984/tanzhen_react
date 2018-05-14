import React from 'react';
import './HomeCard.less';
import { Row, Col, Card } from 'antd';

// const
const { Meta } = Card;
const contentWidth = 1200;

//
export default class HomeCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contentPaddingLR: 0, // 左右padding
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

    // 
    render() {
        return (
            <div className="HomeCardStyle" style={{paddingLeft: this.state.contentPaddingLR, 
            	paddingRight: this.state.contentPaddingLR, minWidth: contentWidth}}
            >
            	<Row gutter={{xs: 24, sm: 24, md: 24}} >
					<Col xs={8} sm={8} md={8} lg={8} xl={8}>
						<Card bordered={false} className="CardItemStyle"
							hoverable={true}
							cover={<img alt="example" src="https://radar.weiquaninfo.cn/radar/assets/images/homeCard2.jpg" />}
						>
							<Meta
								title="大数据营销神器"
								description="雷达感知、精准营销"
							/>
						</Card>
					</Col>
					<Col xs={8} sm={8} md={8} lg={8} xl={8}>
						<Card bordered={false} className="CardItemStyle"
							hoverable={true}
							cover={<img alt="example" src="https://radar.weiquaninfo.cn/radar/assets/images/homeCard1.jpg" />}
						>
							<Meta
								title="客流全知道"
								description="新老客流、入店客流尽在掌握"
							/>
						</Card>
					</Col>
					<Col xs={8} sm={8} md={8} lg={8} xl={8}>
						<Card bordered={false} className="CardItemStyle"
							hoverable={true}
							cover={<img alt="example" src="https://radar.weiquaninfo.cn/radar/assets/images/homeCard3.jpg" />}

						>
							<Meta
								title="客流高效转化"
								description="店铺客流管理从未如此轻松"
							/>
						</Card>
					</Col>
				</Row>
            </div>
        );
    }
}