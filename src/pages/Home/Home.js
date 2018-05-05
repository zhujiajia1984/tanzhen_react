import React from 'react';
import PageLayout from '../../components/PageLayout/PageLayout';
import { Row, Col, Card } from 'antd';
import './Home.less';

//
export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    //
    render() {
        return (
            <div>
				<PageLayout	selMenu={['实时雷达']}
				>
					<div className="HomeContent">
						<Row gutter={{xs: 8, sm: 16, md: 24}} >
							<Col xs={24} sm={24} md={24} lg={24} xl={18}>
								<Card title="实时访客" bordered={false} style={{ width: '100%', marginBottom: 24 }}>
									<span>设备概况</span>
								</Card>
							</Col>
							<Col xs={24} sm={24} md={24} lg={24} xl={6}>
								<Card title="设备状态" bordered={false} style={{ width: '100%', marginBottom: 24 }}>
									<span>设备状态</span>
								</Card>
								<Card title="设备状态" bordered={false} style={{ width: '100%', marginBottom: 24 }}>
									<span>设备状态</span>
								</Card>
							</Col>
						</Row>
					</div>
				</PageLayout>
			</div>
        );
    }
}