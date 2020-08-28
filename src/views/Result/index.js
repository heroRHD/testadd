import React, { Component } from "react";
import { EnvironmentOutlined, ArrowUpOutlined } from "@ant-design/icons";
import IndexCss from "./index.module.less";
import { SelectCity } from "./components";
import { connect } from "react-redux";
import SearchBar from "./components/SearchBar";
import ResultItem from "./components/ResultItem";
import PageFooter from "./components/PageFooter";
import { BackTop, Layout } from "antd";
const { Header, Content, Footer } = Layout;

const style = {
  height: 40,
  width: 40,
  lineHeight: "40px",
  borderRadius: "50%",
  backgroundColor: "#1088e9",
  color: "#fff",
  textAlign: "center",
  fontSize: 14,
};

class index extends Component {
  constructor() {
    super();
    this.state = {
      showCity: false,
    };
  }
  render() {
    return (
      <Layout className={IndexCss.layout}>
        <Header
          style={{ backgroundColor: "#eeeeee", padding: 0 }}
          className={IndexCss.header}
        >
          <div className={IndexCss.headercontainer}>
            <div>
              <span className={IndexCss.headeritem} style={{ paddingLeft: 0 }}>
                首页
              </span>
              <span className={`${IndexCss.colorful} ${IndexCss.headeritem}`}>
                物流产品列表
              </span>
            </div>
            <div>
              <span className={IndexCss.headeritem}> 当前城市</span>
              <span
                onMouseEnter={() => {
                  this.setState({
                    showCity: true,
                  });
                }}
                onMouseLeave={() => {
                  this.setState({
                    showCity: false,
                  });
                }}
                className={`${IndexCss.colorful} ${IndexCss.position} ${IndexCss.headeritem}`}
                style={{ cursor: "pointer" }}
              >
                <EnvironmentOutlined /> {this.props.city.checkedCity}
                {this.state.showCity && <SelectCity />}
              </span>
            </div>
          </div>
        </Header>

        <Content className={IndexCss.content}>
          <div className={IndexCss.contentcontainer}>
            <SearchBar />
            <ResultItem />
            {/* <div style={{width:'100%',height:200,backgroundColor:'red'}}></div>
                        <div style={{width:'100%',height:200,backgroundColor:'red'}}></div>
                        <div style={{width:'100%',height:200,backgroundColor:'red'}}></div>
                        <div style={{width:'100%',height:200,backgroundColor:'red'}}></div> */}
          </div>
        </Content>

        <Footer className={IndexCss.footer}>
          <div className={IndexCss.footercontainer}>
            <PageFooter />
          </div>
          <BackTop>
            <div style={style}>
              <ArrowUpOutlined />
            </div>
          </BackTop>
        </Footer>
      </Layout>
    );
  }
}

// 使用redux将数据装进props中供使用
const mapStateToProps = (state) => {
  return {
    city: state.city,
  };
};

export default connect(mapStateToProps)(index);
