import React from 'react';
import HomeHeader from '../../components/HomeHeader/HomeHeader';
import { Carousel } from 'antd';
import './Login.less';

//
export default class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    //
    render() {
        return (
            <div className="LoginPageStyle">
            	<HomeHeader></HomeHeader>
                <Carousel className="LoginCarousel"
                    autoplay={true}
                    autoplaySpeed={5000}
                >
                    <div className="bannerImgStyle">
                        <img src="https://radar.weiquaninfo.cn/radar/assets/images/bg11.jpg" />
                    </div>
                    <div className="bannerImgStyle">
                        <img src="https://radar.weiquaninfo.cn/radar/assets/images/bg22.jpg" />
                    </div>
                </Carousel>
                <div>333</div>
            </div>
        );
    }
}