import React, { Component } from 'react';
import IndexCss from './MyCard.module.less'
import { SendOutlined } from '@ant-design/icons'


class MyCard extends Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        return (
            <div className={IndexCss.cardcontainer}>
                <div className={IndexCss.cardheader}>
                    <p className={IndexCss.companyname}>{this.props.info.companyname}</p>
                </div>
                <div className={IndexCss.cardbody}>
                    <div className={IndexCss.bodytop}>
                        <div className={IndexCss.country}>
                            <img src={this.props.info.orignicon} alt="" className={IndexCss.logo} />
                            <span className={IndexCss.countryname}>{this.props.info.orignname}</span>
                        </div>
                        <div className={IndexCss.transporticon}>
                            <span><SendOutlined /></span>
                        </div>
                        <div className={IndexCss.country}>
                            <img src={require('../../../../images/DE_49.gif')} alt="" className={IndexCss.logo} />
                            <span className={IndexCss.countryname} >{this.props.info.endname}</span>
                        </div>
                    </div>

                    <div >
                        <div className={IndexCss.bodybottom}>
                            <span className={IndexCss.bottomitem} >运输方式:<span className={IndexCss.emphasis}>{this.props.info.transport}</span></span>
                            <span className={IndexCss.bottomitem1}>时效:<span className={IndexCss.emphasis}>{this.props.info.aging}</span></span>
                        </div>

                        <div className={IndexCss.bodybottom}>
                            <span className={IndexCss.bottomitem}>起订量:
                                <span className={IndexCss.emphasis}>
                                    <span style={{ color: '#0072b4', margin: '0 2px' }}>{this.props.info.leastorder}</span>
                                    {this.props.info.price}
                                </span>
                            </span>

                            {this.props.info.homepick &&
                                <span className={IndexCss.bottomitem1}><span className={`${IndexCss.emphasis} ${IndexCss.homepick}`}>支持上门揽货</span></span>}
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default MyCard;