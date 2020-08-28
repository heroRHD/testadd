import React, { Component } from 'react';
import IndexCss from './public.module.less'
class Footer extends Component {
    render() {
        return (
            <div className={IndexCss.footer}>
                <p style={{textAlign:'center',margin:0}}>
                     <span style={{margin:'3px 5px'}}><a href="www.baidu.com">关于我们</a></span> 
                     <span style={{margin:'3px 5px'}}><a href="www.baidu.com">联系我们</a></span> 
                     <span style={{margin:'3px 5px'}}><a href="www.baidu.com">隐私政策</a></span> 
                     <span style={{margin:'3px 5px'}}><a href="www.baidu.com">用户协议</a></span>
                </p>
                <p style={{textAlign:'center', margin:0}}>© 2018 Supported by ParcelOS(V61)</p>
            </div>
        );
    }
}

export default Footer;