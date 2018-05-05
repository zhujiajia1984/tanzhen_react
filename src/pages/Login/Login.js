import React from 'react';
import './Login.less';
import HomeHeader from '../../components/HomeHeader/HomeHeader';
import HomeCarousel from '../../components/HomeCarousel/HomeCarousel';

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
                <HomeCarousel></HomeCarousel>
            </div>
        );
    }
}