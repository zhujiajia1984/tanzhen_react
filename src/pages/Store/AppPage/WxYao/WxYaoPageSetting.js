import React from 'react';
import { Form, Button, Upload, Input, Icon, Row, Col } from 'antd';
import './WxYaoPageSetting.less';

// const
const FormItem = Form.Item;

// 
export default class WxYaoPageSetting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageUrl: '',
            submitLoading: false,
        }
    }

    //
    onSubmit() {
        this.setState({ submitLoading: true });
        setTimeout(() => {
            this.setState({ submitLoading: false });
            this.props.history.push("/wxYao/page");
        }, 1000)
    }
    onCancel() {
        this.props.history.push("/wxYao/page");
    }

    render() {
        return (
            <div>
            	<div className="wxYaoTitle">
                    <div className="wxYaoTitleArea">
                        <span style={{fontSize: 16, marginBottom: 8, flex: 1}}>新建页面</span>
                    </div>
                    <span style={{color: 'rgba(0, 0, 0, 0.45)', marginBottom: 24}}>
                        可以上传页面内容
                    </span>
                </div>
                <Form layout="horizontal"
                >
                	<FormItem
		    			label="页面名称"
		    			labelCol={{span: 6, offset: 0}}
		    			wrapperCol={{span: 10, offset: 0}}
		    			className="wxYaoPageSetFormItem"
		    		>
		    			<Input />
		    		</FormItem>
		    		<FormItem
		    			label="主标题"
		    			labelCol={{span: 6, offset: 0}}
		    			wrapperCol={{span: 10, offset: 0}}
		    		>
		    			<Input placeholder="不超过6个汉字或12个英文字母" />
		    		</FormItem>
		    		<FormItem
		    			label="副标题"
		    			labelCol={{span: 6, offset: 0}}
		    			wrapperCol={{span: 10, offset: 0}}
		    		>
		    			<Input placeholder="不超过7个汉字或14个英文字母" />
		    		</FormItem>
		    		<FormItem
		    			label="Marker缩略图："
		    			labelCol={{span: 6, offset: 0}}
		    			wrapperCol={{span: 10, offset: 0}}
		    		>
		    			<Upload className="markerThumbUploader"
		    				name="avatar"
		    				accept="image/jpg,image/jpeg,image/png"
		    				listType="picture-card"
		    				showUploadList={false}
		    				// action='https://test.weiquaninfo.cn/mongo/markers/upload'
		    				// beforeUpload={this.onBeforeUpload.bind(this)}
		    				// onChange={this.onUploadChange.bind(this)}
		    			>
		    				{this.state.imageUrl
		    					?(<img src={this.state.imageUrl}
		    						style={{height: 128, width: 200}}
		    						/>)
		    					:(<div>
		    						<Icon type="plus"></Icon>
		    						<p>上传</p>
		    					</div>)
		    				}
		    			</Upload>
		    			<div style={{fontSize: 12}}>
		    				图片尺寸建议120*120，不超过200*200，图片格式限定为：jpg/jpeg/png，图片大小不超过2M
		    			</div>
				    </FormItem>
				    <FormItem
		    			label="页面链接"
		    			labelCol={{span: 6, offset: 0}}
		    			wrapperCol={{span: 10, offset: 0}}
		    		>
		    			<Input placeholder="例：http://www.wisemedia.cn" />
		    		</FormItem>
		    		<FormItem
		    		>
		    			<Row>
		    				<Col span={6}>
		    				</Col>
		    				<Col span={10}>
		    					<Button type="primary"
								    style={{width: '100px', marginRight: 24}}
								    size="large"
								    loading={this.state.submitLoading}
								    onClick={this.onSubmit.bind(this)}
								>确认</Button>
								<Button type="default"
								    style={{width: '100px'}}
								    size="large"
								    onClick={this.onCancel.bind(this)}
								>取消</Button>
		    				</Col>
		    			</Row>
                    </FormItem>
                </Form>
            </div>
        );
    }
}