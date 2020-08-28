import React, { Component } from 'react'
import IndexCss from './public.module.less'
// import { PhoneOutlined } from '@ant-design/icons'
export default class Header extends Component {
    render() {
        return (
            <div className={IndexCss.headercontainer}>
                <div className={IndexCss.headerleft}>
                    <img src={require("../../../images/logo_w.png")} alt="" className={IndexCss.logoimg}/>
                    <div>
                        <p className={`${IndexCss.logodesc} ${IndexCss.logotitle}`}>新智慧物流科技</p>
                        <p className={IndexCss.logodesc}>物流系统服务商</p>
                    </div>
                </div>

                <div className={IndexCss.headerright}>
                    {/* <span className={IndexCss.phone}>联系电话:</span> */}
                     {/* <span className={IndexCss.phonenumber}><PhoneOutlined /> 123-4567-8912</span> */}
                </div>
            </div>
        )
    }
}
