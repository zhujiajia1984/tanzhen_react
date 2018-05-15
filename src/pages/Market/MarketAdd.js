import React from 'react';
import './MarketAdd.less';
import { Steps, Divider, Button, message, Input } from 'antd';
import PageLayout from '../../components/PageLayout/PageLayout';
import CrowdAddRule from '../../components/CrowdAddRule/CrowdAddRule';

// const
const Step = Steps.Step;

//
export default class MarketAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0,
            steps: [{
                title: '人群添加规则',
                content: 'step1 content',
            }, {
                title: '确认人群规则',
                content: 'step2 content',
            }, {
                title: '保存当前人群',
                content: 'step3 content',
            }],
            btnLoading: false,
        }
    }

    //
    componentDidMount() {
        let steps = this.state.steps;
        steps[0].content = <CrowdAddRule></CrowdAddRule>;
        steps[1].content = <div>
            <div><span style={{fontWeight: 'bold'}}>时间： </span><span>2018年4月15日 ~ 2018年5月14日</span></div>
            <div style={{marginTop: 24}}><span style={{fontWeight: 'bold'}}>采集点：</span><span>采集点1、采集点2</span></div>
            <div style={{marginTop: 24}}><span style={{fontWeight: 'bold'}}>采集范围：</span><span>全部采集</span></div>
            <div style={{marginTop: 24}}><span style={{fontWeight: 'bold'}}>访客属性：</span><span>新访客</span></div>
            <div style={{marginTop: 24}}><span style={{fontWeight: 'bold'}}>停留时长：</span><span>全部时长</span></div>
        </div>;
        steps[2].content = <div>
            <div style={{display: 'flex'}}>
                <span style={{display: 'flex', alignItems:'center'}}>人群包的名称为：</span>
                <Input style={{width:200}}/>
            </div>
            <div style={{marginTop: 24}}><span>符合规则的人群数量为：</span><span style={{fontWeight: 'bold', fontSize: 20}}>8000</span></div>
            <div style={{color: '#888888', marginTop: 24}}><span>点击“立即保存”即可保存为人群包，或点击“上一步”返回进行修改。</span></div>
        </div>
        this.setState({ steps: steps });
    }

    //
    onNext() {
        const current = this.state.current + 1;
        this.setState({ current: current });
    }
    onPrev() {
        const current = this.state.current - 1;
        this.setState({ current: current });
    }
    onSubmit() {
        this.setState({ btnLoading: true });
        setTimeout(() => {
            message.success("人群保存成功", 1, () => {
                this.setState({ btnLoading: false });
                this.props.history.push("/market");
            })
        }, 2000)
    }

    render() {
        return (
            <div>
                <PageLayout selMenu={['人群管理']}
                >
                    <div className="marketAdd">
                        <div className="marketAddTitleRow">新建人群</div>
                        <Steps current={this.state.current}>
                            {this.state.steps.map(item => <Step key={item.title} title={item.title} />)}
                        </Steps>
                        <Divider />
                        <div className="steps-content">
                            {this.state.steps[this.state.current].content}
                        </div>
                        <Divider />
                        <div className="steps-action">
                        {
                            this.state.current < this.state.steps.length - 1
                            &&
                            <Button type="primary" onClick={this.onNext.bind(this)}>下一步</Button>
                        }
                        {
                            this.state.current === this.state.steps.length - 1
                            &&
                            <Button type="primary" onClick={this.onSubmit.bind(this)}
                                loading={this.state.btnLoading}
                            >
                                立即保存
                            </Button>
                        }
                        {
                            this.state.current > 0
                            &&
                            <Button style={{ marginLeft: 8 }} onClick={this.onPrev.bind(this)}>
                                上一步
                            </Button>
                        }
                        </div>
                    </div>
                </PageLayout>
            </div>
        );
    }
}