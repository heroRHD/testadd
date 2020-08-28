import React, { Component } from 'react'
import IndexCss from './public.module.less'
export default class PageFooter extends Component {
    render() {
        return (
            <div className={IndexCss.footer}>
                <div>
                    <div className={IndexCss.footerleft}>
                        <p>
                            <span className={IndexCss.title}>关于我们</span>
                            <span className={IndexCss.content}>公司简介</span>
                            <span className={IndexCss.content}>公司简介</span>
                        </p>

                        <p>
                            <span className={IndexCss.title}>法律说明</span>
                            <span className={IndexCss.content}>用户协议</span>
                            <span className={IndexCss.content}>隐私政策</span>
                        </p>

                        <p>
                            <span className={IndexCss.title}>友情链接</span>
                            <span className={IndexCss.content}>亚马逊全球开店</span>
                            <span className={IndexCss.content}>阿里巴巴国际交易市场</span>
                            <span className={IndexCss.content}>1688</span>
                            <span className={IndexCss.content}>全球速卖通</span>
                            <span className={IndexCss.content}>雨果网</span>
                            <span className={IndexCss.content}>敦煌网</span>
                            <span className={IndexCss.content}>Wish</span>
                            <span className={IndexCss.content}>中国供应商</span>
                        </p>
                    </div>
                    <div className={IndexCss.footerright}>
                        <p style={{ margin: 0 }}>关注新智慧物流</p>
                        <p style={{ margin: 0 }}>微信公众号</p>
                        <img src={require('../../../images/mywechat.jpg')} alt="我的微信" className={IndexCss.mywechat} />
                    </div>
                </div>
                <div className={IndexCss.footerbottom}>
                    <p className={IndexCss.pagedesc}>© 2018 Supported by ParcelOS(V61) </p>
                </div>
            </div>
        )
    }
}
