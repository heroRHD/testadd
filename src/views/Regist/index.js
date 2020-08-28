import React, { Component } from 'react'
import IndexCss from './index.module.less'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
export default class index extends Component {
    render() {
        return (
            <div className={IndexCss.login}>
                <Header />
                <Content />
                <Footer />
            </div>
        )
    }
}
