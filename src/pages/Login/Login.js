import React from 'react';
import './Login.less';
import HomeHeader from '../../components/HomeHeader/HomeHeader';
import HomeCarousel from '../../components/HomeCarousel/HomeCarousel';
import LoginArea from '../../components/LoginArea/LoginArea';
import HomeCard from '../../components/HomeCard/HomeCard';

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
                <LoginArea></LoginArea>
                <HomeCard></HomeCard>
            </div>
        );
    }
}