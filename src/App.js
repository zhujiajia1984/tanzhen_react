import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect
} from 'react-router-dom';
import './App.less';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Device from './pages/Device/Device';
import Market from './pages/Market/Market';
import Store from './pages/Store/Store';
import StorePhone from './pages/Store/StorePhone';
import PhoneAppDetail from './pages/Store/PhoneAppDetail';
import NumberManage from './pages/Store/AppPage/PhoneSale/NumberManage';
import ChargeManage from './pages/Store/AppPage/PhoneSale/ChargeManage';
import AgentNumberManage from './pages/Store/AppPage/PhoneSale/AgentNumberManage';
import AgentChargeManage from './pages/Store/AppPage/PhoneSale/AgentChargeManage';
import AgentBuyManage from './pages/Store/AppPage/PhoneSale/AgentBuyManage';
import ClientBuyManage from './pages/Store/AppPage/PhoneSale/ClientBuyManage';
import ClientPhoneSale from './pages/Store/AppPage/PhoneSale/ClientPhoneSale';
import ClientPhoneRecord from './pages/Store/AppPage/PhoneSale/ClientPhoneRecord';
import ClientSmsSend from './pages/Store/AppPage/SmsSale/ClientSmsSend';
import ClientSmsTemplate from './pages/Store/AppPage/SmsSale/ClientSmsTemplate';
import ClientSmsTempManage from './pages/Store/AppPage/SmsSale/ClientSmsTempManage';
import ClientSmsRecord from './pages/Store/AppPage/SmsSale/ClientSmsRecord';
import ClientSmsEvent from './pages/Store/AppPage/SmsSale/ClientSmsEvent';
import ClientSmsBuyManage from './pages/Store/AppPage/SmsSale/ClientSmsBuyManage';
import MarketSmsSend from './pages/Store/AppPage/SmsSale/MarketSmsSend';
import MarketSmsTemplate from './pages/Store/AppPage/SmsSale/MarketSmsTemplate';
import AgentSmsSend from './pages/Store/AppPage/SmsSale/AgentSmsSend';
import AgentSmsTemplate from './pages/Store/AppPage/SmsSale/AgentSmsTemplate';
import WxYao from './pages/Store/AppPage/WxYao/WxYao';
import WiseDsp from './pages/Store/AppPage/WiseDsp/WiseDsp';

// 
export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    //
    render() {
        // <Router>
        // <Router basename="/radar/shop">
        return (
            <Router>
                <div className="AppFontFamily">
                    <Route exact path="/" render={()=>(<Redirect to="/market" />)} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/index" component={Home} />
                    <Route exact path="/device" component={Device} />
                    <Route path="/market" component={Market} />
                    <Route path="/store" component={StorePhone} />
                    <Route path="/phoneAppDetail" component={PhoneAppDetail} />
                    <Route path="/numberManage" component={NumberManage} />
                    <Route path="/chargeManage" component={ChargeManage} />
                    <Route path="/agentNumberManage" component={AgentNumberManage} />
                    <Route path="/agentChargeManage" component={AgentChargeManage} />
                    <Route path="/agentBuyManage" component={AgentBuyManage} />
                    <Route path="/clientPhoneSale" component={ClientPhoneSale} />
                    <Route path="/clientBuyManage" component={ClientBuyManage} />
                    <Route path="/clientPhoneRecord" component={ClientPhoneRecord} />
                    <Route path="/clientSmsSend" component={ClientSmsSend} />
                    <Route path="/clientSmsTemplate" component={ClientSmsTemplate} />
                    <Route path="/clientSmsTempManage" component={ClientSmsTempManage} />
                    <Route path="/clientSmsRecord" component={ClientSmsRecord} />
                    <Route path="/clientSmsEvent" component={ClientSmsEvent} />
                    <Route path="/clientSmsBuyManage" component={ClientSmsBuyManage} />
                    <Route path="/marketSmsSend" component={MarketSmsSend} />
                    <Route path="/marketSmsTemplate" component={MarketSmsTemplate} />
                    <Route path="/agentSmsSend" component={AgentSmsSend} />
                    <Route path="/agentSmsTemplate" component={AgentSmsTemplate} />
                    <Route path="/wxYao" component={WxYao} />
                    <Route path="/wisedsp" component={WiseDsp} />
                </div>
            </Router>
        );
    }
}