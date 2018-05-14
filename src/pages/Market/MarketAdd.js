import React from 'react';
import './MarketAdd.less';
import { Steps, Divider, Button, message } from 'antd';
import PageLayout from '../../components/PageLayout/PageLayout';

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
        steps[0].content = "111";
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
            	<PageLayout	selMenu={['营销活动']}
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