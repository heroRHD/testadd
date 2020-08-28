import React, { Component } from "react";
import IndexCss from "./public.module.less";
import { withRouter } from "react-router-dom";
import { Form, Input, Button, Checkbox, Col, Row, message } from "antd";

const layout = {
  wrapperCol: {
    span: 16,
  },
  labelCol: {
    span: 4,
  },
};

const layoutcaptcha = {
  wrapperCol: {
    span: 10,
  },
  labelCol: {
    span: 4,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const forgetLayout = {
  wrapperCol: {
    offset: 9,
    span: 12,
  },
};

const buttonLayout = {
  wrapperCol: {
    offset: 4,
    span: 16,
  },
};

@withRouter
class Content extends Component {
  constructor() {
    super();
    this.state = {
      useCaptchaToLogin: false,
      isClear: false,
    };
    this.time = React.createRef();
    this.phonenumber = React.createRef();
  }

  changeMethod = (value) => {
    this.setState({
      useCaptchaToLogin: value,
    });
  };

  onFinish = (values) => {
    console.log("Success:", values);
  };

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  changepage = () => {
    this.setState(
      {
        isClear: true,
      },
      () => {
        this.props.history.push("/regist");
      }
    );
  };

  getCaptcha = () => {
    if (this.phonenumber.current.state.value) {
      let times = 120;
      let showTime = setInterval(() => {
        if (
          this.state.useCaptchaToLogin === false ||
          this.state.isClear === true
        ) {
          // 防止在点击了获取验证码之后 点击切换 导致定时器报错
          // 设置如果切换了 就清除定时器
          // 由于let的作用域问题 不能再外部清除定时器 只能在内部做判断
          clearInterval(showTime);
        } else if (times === 0) {
          // 清除定时器
          clearInterval(showTime);
          // 重置按钮文本
          this.time.current.innerText = "获取验证码";
          //恢复点击
          this.time.current.style.cursor = "pointer";
          this.time.current.disabled = false;
        } else {
          times = times - 1;
          this.time.current.innerText = times + "S";
          //设置在倒数的时候 不可重复点击
          this.time.current.style.cursor = "not-allowed";
          this.time.current.disabled = true;
        }
      }, 1000);
    } else {
      message.error("请先填写手机号");
    }
  };
  render() {
    console.log(this.props);
    return (
      <div className={IndexCss.content}>
        <div className={IndexCss.contentleft}>
          <div className={IndexCss.loginform}>
            <h2 className={IndexCss.formtitle}>新智慧物流</h2>
            <div className={IndexCss.select_login_method}>
              <Row>
                <Col span={16} offset={4}>
                  <span
                    className={IndexCss.login_metohd}
                    style={{ float: "left" }}
                    onClick={() => this.changeMethod(false)}
                  >
                    账号密码登录
                  </span>
                  <span
                    className={IndexCss.login_metohd}
                    style={{ float: "right" }}
                    onClick={() => this.changeMethod(true)}
                  >
                    验证码登录
                  </span>
                </Col>
              </Row>
            </div>
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
                  name="phonenumber"
                  label="  "
                  rules={[
                    {
                      required: true,
                      message: "请输入您的手机号!",
                    },
                  ]}
                >
                  <Input
                    placeholder="请输入手机号"
                    style={{ height: 35, border: "none" }}
                    ref={this.phonenumber}
                  />
                </Form.Item>

                {this.state.useCaptchaToLogin ? (
                  <div style={{ position: "relative" }} className="noborder">
                    <Form.Item
                      {...layoutcaptcha}
                      name="captcha"
                      label="  "
                      rules={[
                        {
                          required: true,
                          message: "请输入验证码!",
                        },
                      ]}
                    >
                      <Input
                        placeholder="请输入六位数验证码"
                        style={{ height: 35, border: "none", borderRadius: 0 }}
                      />
                    </Form.Item>
                    <button
                      type="button"
                      className={IndexCss.btn}
                      ref={this.time}
                      onClick={this.getCaptcha}
                      style={{
                        position: "absolute",
                        height: 35,
                        width: 116,
                        border: "none",
                        borderRadius: "0 2px 2px 0",
                        top: 0,
                        left: 267,
                        backgroundColor: "white",
                        color: "#0072b4",
                      }}
                    >
                      获取验证码
                    </button>
                  </div>
                ) : (
                  <Form.Item
                    {...layout}
                    name="password"
                    label="  "
                    rules={[
                      {
                        required: true,
                        message: "请输入密码!",
                      },
                    ]}
                  >
                    <Input.Password
                      placeholder="请输入密码"
                      style={{ height: 35, border: "none" }}
                    />
                  </Form.Item>
                )}

                <Row>
                  <Col span={12}>
                    <Form.Item
                      name="remember"
                      valuePropName="checked"
                      {...tailLayout}
                    >
                      <Checkbox>记住密码</Checkbox>
                    </Form.Item>
                  </Col>

                  <Col span={12}>
                    <Form.Item {...forgetLayout}>
                      <p style={{ color: "#eaeaea" }}>忘记密码？ </p>
                    </Form.Item>
                  </Col>
                </Row>
                <Form.Item {...buttonLayout}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    style={{ width: "100%", borderRadius: 5, height: 40 }}
                  >
                    登录
                  </Button>
                  <p
                    style={{
                      textAlign: "center",
                      marginTop: 10,
                      cursor: "pointer",
                      color: "white",
                      userSelect: "none",
                    }}
                    onClick={this.changepage}
                  >
                    还没有账号？去注册 
                  </p>
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
