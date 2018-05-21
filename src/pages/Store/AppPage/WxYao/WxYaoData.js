import React from 'react';
import './WxYaoData.less';
import { Tabs, Card, Row, Col, DatePicker } from 'antd';
// import echarts from 'echarts';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/legendScroll';

//
const TabPane = Tabs.TabPane;
const { RangePicker } = DatePicker;

export default class WxYaoData extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // 基于准备好的dom，初始化echarts实例
        this.myChart1 = echarts.init(document.getElementById('wxYaoChart1'));
        // 绘制图表
        this.myChart1.setOption({
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'line',
                },
            },
            legend: {
                left: 'center',
                top: 'top',
                data: [{
                    name: '摇周边人数'
                }, {
                    name: '摇周边人次'
                }]
            },
            xAxis: {
                data: ['2018-05-14', '2018-05-15', '2018-05-16', '2018-05-17', '2018-05-18', '2018-05-19', '2018-05-20']
            },
            yAxis: {
                type: 'value',
                splitNumber: 2,
                boundaryGap: ['0', '10%'],
                splitLine: {
                    show: true,
                    lineStyle: {
                        type: 'dotted'
                    }
                },
            },
            series: [{
                name: '摇周边人数',
                type: 'bar',
                barWidth: '50%',
                data: [5, 20, 36, 10, 10, 20, 18],
                itemStyle: {
                    normal: {
                        color: '#2fb26a',
                    }
                },
            }, {
                name: '摇周边人次',
                type: 'line',
                data: [10, 40, 60, 18, 22, 41, 32],
                itemStyle: {
                    normal: {
                        color: '#2fb26a',
                    }
                },
            }]
        });
        // 基于准备好的dom，初始化echarts实例
        this.myChart2 = echarts.init(document.getElementById('wxYaoChart2'));
        // 绘制图表
        this.myChart2.setOption({
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'line',
                },
            },
            legend: {
                left: 'center',
                top: 'top',
                data: [{
                    name: '点击人数'
                }, {
                    name: '点击次数'
                }]
            },
            xAxis: {
                data: ['2018-05-14', '2018-05-15', '2018-05-16', '2018-05-17', '2018-05-18', '2018-05-19', '2018-05-20']
            },
            yAxis: {
                type: 'value',
                splitNumber: 2,
                boundaryGap: ['0', '10%'],
                splitLine: {
                    show: true,
                    lineStyle: {
                        type: 'dotted'
                    }
                },
            },
            series: [{
                name: '点击人数',
                type: 'bar',
                barWidth: '50%',
                data: [5, 20, 36, 10, 10, 20, 18],
                itemStyle: {
                    normal: {
                        color: '#3AA1FF',
                    }
                },
            }, {
                name: '点击次数',
                type: 'line',
                data: [10, 40, 60, 18, 22, 41, 32],
                itemStyle: {
                    normal: {
                        color: '#3AA1FF',
                    }
                },
            }]
        });
        //
        window.addEventListener('resize', this.onWindowResize.bind(this));
    }
    // 
    componentWillUnmount() {
        window.removeEventListener('resize', this.onWindowResize.bind(this));

    }
    // 
    onWindowResize() {
        if (this.myChart1) {
            this.myChart1.resize();
        }
        if (this.myChart2) {
            this.myChart2.resize();
        }
    }

    render() {
        const wxYaoDataAciton = (
            <div className="wxYaoDataCardAction">
				<span className="wxYaoActionSel active">近7天</span>
				<span className="wxYaoActionSel">近30天</span>
				<RangePicker style={{marginRight: 24}}/>
			</div>
        )
        return (
            <div className="wxYaoDataStyle">
            	<div className="wxYaoDataWrapper">
            		<Tabs defaultActiveKey="huizong">
                        <TabPane tab="汇总统计" key="huizong">
							<Card title="昨日数据" className="wxYaoDataTongjiTitle">
								<Row gutter={16}>
									<Col span={6} className="wxYaoDataColItem">
										<div className="wxYaoDataContentItem">
											<span style={{color: 'rgba(0,0,0,.45)'}}>
												摇周边人数
											</span>
											<span style={{color: 'rgba(0,0,0,.85)', fontSize: 24}}>
												20
											</span>
										</div>
									</Col>
									<Col span={6} className="wxYaoDataColItem">
										<div className="wxYaoDataContentItem">
											<span style={{color: 'rgba(0,0,0,.45)'}}>
												摇周边次数
											</span>
											<span style={{color: 'rgba(0,0,0,.85)', fontSize: 24}}>
												100
											</span>
										</div>
									</Col>
									<Col span={6} className="wxYaoDataColItem">
										<div className="wxYaoDataContentItem">
											<span style={{color: 'rgba(0,0,0,.45)'}}>
												点击人数
											</span>
											<span style={{color: 'rgba(0,0,0,.85)', fontSize: 24}}>
												10
											</span>
										</div>
									</Col>
									<Col span={6} className="wxYaoDataColItem">
										<div className="wxYaoDataContentItem">
											<span style={{color: 'rgba(0,0,0,.45)'}}>
												点击次数
											</span>
											<span style={{color: 'rgba(0,0,0,.85)', fontSize: 24}}>
												50
											</span>
										</div>
									</Col>
								</Row>
							</Card>
							<Card title="摇周边趋势图" extra={wxYaoDataAciton} style={{marginBottom: 24}}>
								<div style={{height: 400, width: '100%'}} id="wxYaoChart1">abc</div>
							</Card>
							<Card title="点击趋势图" extra={wxYaoDataAciton}>
								<div style={{height: 400, width: '100%'}} id="wxYaoChart2">abc</div>
							</Card>
                        </TabPane>
                    </Tabs>
            	</div> 
            </div>
        );
    }
}