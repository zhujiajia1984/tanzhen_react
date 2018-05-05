import React from 'react';
import { Carousel } from 'antd';
import './HomeCarousel.less';

export default class HomeCarousel extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="HomeCarouselStyle">
        		<Carousel autoplay={false} autoplaySpeed={5000}>
					<div className="bannerStyle banner1">
						<span className="bannerText">123</span>
					</div>
					<div className="bannerStyle">
						<span>234</span>
					</div>
				</Carousel>
        	</div>
        );
    }
}