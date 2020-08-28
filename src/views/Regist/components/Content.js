import React, { Component } from 'react';
import IndexCss from './public.module.less'
import { Form, Input, Button, message } from 'antd';
import { withRouter } from 'react-router-dom'
const layout = {
    wrapperCol: {
        span: 16,
    },
    labelCol:{
        span:4
    }
};

const layoutcaptcha = {
    wrapperCol: {
        span: 10
    },
    labelCol:{
        span:4
    }
}

const buttonLayout = {
    wrapperCol: {
        offset: 4,
        span: 16,
    },
}


@withRouter

class Content extends Component {
    constructor() {
        super()
        this.state = {
            times: 120,
            isclear: false
        }
        this.time = React.createRef()
        this.phonenumber = React.createRef()
    }
    onFinish = (values) => {
        console.log('Success:', values);
    };

    onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    getCaptcha = () => {
        if (this.phonenumber.current.state.value) {
            let times = 120
            let showTime = setInterval(() => {
                if (this.state.isclear === true) {
                    clearInterval(showTime)
                } else if (times === 0) {
                    // 清除定时器
                    clearInterval(showTime)
                    // 重置按钮文本
                    this.time.current.innerText = "获取验证码"
                    //恢复点击
                    this.time.current.style.cursor = 'pointer'
                    this.time.current.disabled = false
                } else {
                    times = times - 1;
                    this.time.current.innerText = times + "S"
                    //设置在倒数的时候 不可重复点击
                    this.time.current.style.cursor = 'not-allowed'
                    this.time.current.disabled = true
                }
            }, 1000);
        } else {
            message.error('请先填写手机号');
        }
    }

    changepages=()=>{
        this.setState({
            isclear:true
        },()=>{
            this.props.history.push('/login')
        })
    }

    render() {
        console.log(this.props);
        return (
            <div className={IndexCss.content}>
                <div className={IndexCss.contentleft}>
                    <div className={IndexCss.loginform}>
                        <h2 className={IndexCss.formtitle}>新智慧物流</h2>

                        <div className={IndexCss.login_form}>
                            <Form
                                name="basic"
                                labelAlign="right"
                                colon={false}
                                initialValues={{
                                    remember: true,
                                }}
                                onFinish={this.onFinish}
                                onFinishFailed={this.onFinishFailed}
                            >
                                <Form.Item
                                    {...layout}
                                    name="username"
                                    label=" "
                                    rules={[
                                        {
                                            required: true,
                                            message: '请输入单位名称!',
                                        },
                                    ]}
                                >
                                    <Input placeholder="请输入单位名称(公司名)" style={{ height: 35, border: 'none' }} ref={this.phonenumber} />
                                </Form.Item>

                                <Form.Item
                                    {...layout}
                                    name="email"
                                    label=" "
                                >
                                    <Input type="email" placeholder="请输入邮箱" style={{ height: 35, border: 'none' }} ref={this.phonenumber} />
                                </Form.Item>


                                <Form.Item
                                    {...layout}
                                    name="phonenumber"
                                    label=" "
                                    rules={[
                                        {
                                            required: true,
                                            message: '请输入您的手机号!',
                                        },
                                    ]}
                                >
                                    <Input placeholder="请输入手机号" style={{ height: 35, border: 'none' }} ref={this.phonenumber} />
                                </Form.Item>

                                <Form.Item
                                    {...layout}
                                    label=" "
                                    name="password"
                                    rules={[
                                        {
                                            required: true,
                                            message: '请输入密码!',
                                        },
                                    ]}
                                >
                                    <Input.Password placeholder="请输入密码" style={{ height: 35, border: 'none' }} />
                                </Form.Item>

                                <div style={{ position: 'relative' }} className='noborder'>
                                    <Form.Item
                                        {...layoutcaptcha}
                                        name="captcha"
                                        label=" "
                                        rules={[
                                            {
                                                required: true,
                                                message: '请输入验证码!',
                                            },
                                        ]}
                                    >
                                        <Input placeholder="请输入六位数验证码" style={{ height: 35, border: 'none', borderRadius: 0 }} />
                                    </Form.Item>
                                    <button
                                        type='button'
                                        className={IndexCss.btn}
                                        ref={this.time}
                                        onClick={this.getCaptcha}
                                        style={{
                                            position: 'absolute',
                                            height: 35,
                                            width: 115,
                                            border: 'none',
                                            borderRadius: 0,
                                            top: 0,
                                            left: 268,
                                            backgroundColor: 'white',
                                            color: '#0072b4',
                                        }}>
                                        获取验证码
                                        </button>
                                </div>

                                <Form.Item {...buttonLayout}>
                                    <Button type="primary" htmlType="submit" style={{ width: '100%', borderRadius: 5, height: 40 }}>
                                        注册
                                    </Button>
                                    <p style={{ 
                                        textAlign: 'center', 
                                        marginTop: 10, 
                                        cursor: 'pointer', 
                                        color: 'white' ,
                                        userSelect:'none'
                                        }} onClick={this.changepages} > 前往登录 >> </p>
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                </div>

                <div className={IndexCss.contentright}>
                    <div className={IndexCss.desc}>
                        <p className={IndexCss.descleft}>科技支持</p>
                        <p className={IndexCss.descright}>智慧物流</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;