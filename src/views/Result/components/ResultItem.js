import React, { Component } from 'react';
import { Row, Col } from 'antd'
import IndexCss from './public.module.less'
import MyCard from './mycard/MyCard'
class ResultItem extends Component {
    constructor() {
        super()
        this.state = {
            result: [
                {   
                    key:1,
                    companyname: '深圳市宝通达国际货运代理有限公司',
                    orignicon: '../../../../images/CN_86.gif',
                    orignname: '中国',
                    endicon: '../../../../images/DE_49.gif',
                    endname: '德国',
                    transport: '海运',
                    aging: '12-15天',
                    leastorder: '0KG',
                    price: '￥20/KG起',
                    homepick: true
                },{
                    key:2,
                    companyname: '深圳市华路物流有限公司',
                    orignicon: 'assets/images/CN_86.gif',
                    orignname: '中国',
                    endicon: 'assets/images/JP_81.gif',
                    endname: '日本',
                    transport: '空运',
                    aging: '4-5天',
                    leastorder: '100CBM',
                    price: '￥1150/CBM起',
                    homepick: true
                },{
                    key:3,
                    companyname: '深圳市宝通达国际货运代理有限公司',
                    orignicon: 'assets/images/CN_86.gif',
                    orignname: '中国',
                    endicon: 'assets/images/DE_49.gif',
                    endname: '德国',
                    transport: '海运',
                    aging: '12-15天',
                    leastorder: '10KG',
                    price: '8/KG起',
                    homepick: true
                },{   
                    key:4,
                    companyname: '深圳市宝通达国际货运代理有限公司',
                    orignicon: '../../../images/CN_86.gif',
                    orignname: '中国',
                    endicon: '../../../images/CN_86.gif',
                    endname: '德国',
                    transport: '海运',
                    aging: '12-15天',
                    leastorder: '0KG',
                    price: '￥20/KG起',
                    homepick: true
                },{
                    key:5,
                    companyname: '深圳市华路物流有限公司',
                    orignicon: 'assets/images/CN_86.gif',
                    orignname: '中国',
                    endicon: 'assets/images/JP_81.gif',
                    endname: '日本',
                    transport: '空运',
                    aging: '4-5天',
                    leastorder: '100CBM',
                    price: '￥1150/CBM起',
                    homepick: true
                },{
                    key:6,
                    companyname: '深圳市宝通达国际货运代理有限公司',
                    orignicon: 'assets/images/CN_86.gif',
                    orignname: '中国',
                    endicon: 'assets/images/DE_49.gif',
                    endname: '德国',
                    transport: '海运',
                    aging: '12-15天',
                    leastorder: '10KG',
                    price: '8/KG起',
                    homepick: true
                },{   
                    key:7,
                    companyname: '深圳市宝通达国际货运代理有限公司',
                    orignicon: '../../../images/CN_86.gif',
                    orignname: '中国',
                    endicon: '../../../images/CN_86.gif',
                    endname: '德国',
                    transport: '海运',
                    aging: '12-15天',
                    leastorder: '0KG',
                    price: '￥20/KG起',
                    homepick: true
                },{
                    key:8,
                    companyname: '深圳市华路物流有限公司',
                    orignicon: 'assets/images/CN_86.gif',
                    orignname: '中国',
                    endicon: 'assets/images/JP_81.gif',
                    endname: '日本',
                    transport: '空运',
                    aging: '4-5天',
                    leastorder: '100CBM',
                    price: '￥1150/CBM起',
                    homepick: true
                
                },{
                    key:9,
                    companyname: '深圳市宝通达国际货运代理有限公司',
                    orignicon: 'assets/images/CN_86.gif',
                    orignname: '中国',
                    endicon: 'assets/images/DE_49.gif',
                    endname: '德国',
                    transport: '海运',
                    aging: '12-15天',
                    leastorder: '10KG',
                    price: '8/KG起',
                    homepick: true
                },{
                    key:6,
                    companyname: '深圳市宝通达国际货运代理有限公司',
                    orignicon: 'assets/images/CN_86.gif',
                    orignname: '中国',
                    endicon: 'assets/images/DE_49.gif',
                    endname: '德国',
                    transport: '海运',
                    aging: '12-15天',
                    leastorder: '10KG',
                    price: '8/KG起',
                    homepick: true
                },{   
                    key:7,
                    companyname: '深圳市宝通达国际货运代理有限公司',
                    orignicon: '../../../images/CN_86.gif',
                    orignname: '中国',
                    endicon: '../../../images/CN_86.gif',
                    endname: '德国',
                    transport: '海运',
                    aging: '12-15天',
                    leastorder: '0KG',
                    price: '￥20/KG起',
                    homepick: true
                },{
                    key:8,
                    companyname: '深圳市华路物流有限公司',
                    orignicon: 'assets/images/CN_86.gif',
                    orignname: '中国',
                    endicon: 'assets/images/JP_81.gif',
                    endname: '日本',
                    transport: '空运',
                    aging: '4-5天',
                    leastorder: '100CBM',
                    price: '￥1150/CBM起',
                    homepick: true
                },{
                    key:9,
                    companyname: '深圳市宝通达国际货运代理有限公司',
                    orignicon: 'assets/images/CN_86.gif',
                    orignname: '中国',
                    endicon: 'assets/images/DE_49.gif',
                    endname: '德国',
                    transport: '海运',
                    aging: '12-15天',
                    leastorder: '10KG',
                    price: '8/KG起',
                    homepick: true
                }
            ]
        }
    }
    render() {
        return (
            <div className={IndexCss.resultitem}>
                <Row gutter={[32,16]}>
                    {
                        this.state.result.map(item => {
                            return (
                                <Col span={8} key={item.key}>
                                    <MyCard info={item} />
                                </Col>
                            )
                        })
                    }
                </Row>
            </div>
        );
    }
}

export default ResultItem;