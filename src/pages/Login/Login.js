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
            <div>
            	<HomeHeader></HomeHeader>
                <Carousel className="LoginCarousel"
                    autoplay={true}
                    autoplaySpeed={5000}
                >
                    <div><h3>1</h3></div>
                    <div><h3>2</h3></div>
                    <div><h3>3</h3></div>
                    <div><h3>4</h3></div>
                </Carousel>
            </div>
        );
    }
}