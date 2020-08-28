import React, { Component } from 'react'
import { changecity, changearea } from '../../../redux/actions/city'
import IndexCss from './public.module.less'
import { connect } from 'react-redux'
class SelectCity extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <div style={{
                position: 'absolute',
                right: 0, top: 40,
                width: 700,
                height: 'auto',
                backgroundColor: 'white',
                padding: 15,
                zIndex: 1000,
                boxShadow:"0 4px 5px #888888"
            }}>
                <span className={IndexCss.ultitle}>国内热门城市:</span>
                <ul className={`${IndexCss.defaultul}`}>
                    {
                        this.props.city.hotCity.map(item => {
                            if (this.props.city.checkedCity === item) {
                                var checked = IndexCss.checkedCity
                            }

                            return (
                                <li key={item} className={`${IndexCss.defaultli} ${checked}`} onClick={this.props.changecity.bind(this, item)}>
                                    {item}
                                </li>
                            )
                        })
                    }
                </ul>

                <span className={IndexCss.ultitle}>海外热门城市:</span>
                <ul className={`${IndexCss.defaultul}`}>
                    {
                        this.props.city.foreignHotCity.map(item => {
                            if (this.props.city.checkedCity === item) {
                                var checked = IndexCss.checkedCity
                            }

                            return (
                                <li key={item} className={`${IndexCss.defaultli} ${checked}`} onClick={this.props.changecity.bind(this, item)}>
                                    {item}
                                </li>
                            )
                        })
                    }
                </ul>

                {/* 地区 */}
                <span className={IndexCss.ultitle}>地区城市:</span>
                <ul className={`${IndexCss.defaultul}`}>
                    {
                        this.props.city.area.map(item => {
                            if (this.props.city.checkedarea === item.name) {
                                var checked = IndexCss.checkedCity
                            }
                            return (
                                <li
                                    key={item.name}
                                    className={`${IndexCss.defaultli} ${checked}`}
                                    onClick={this.props.changearea.bind(this, item)} >
                                    {item.name}
                                </li>
                            )
                        })
                    }
                </ul>

                {/* 城市地区列表 */}
                <ul className={`${IndexCss.defaultul}`} >
                    {
                        this.props.city.currentArea.citys.map(item => {
                            if (this.props.city.checkedCity === item) {
                                var checked = IndexCss.checkedCity
                            }
                            return (
                                <li key={item} className={`${IndexCss.defaultli} ${checked}`} onClick={this.props.changecity.bind(this, item)}>
                                    {item}
                                </li>
                            )
                        })
                    }
                </ul>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        city: state.city
    }
}

export default connect(mapStateToProps, { changearea, changecity })(SelectCity);