import React, { PureComponent } from 'react'
import { SearchBar, Swiper } from '../../components'


export default class Home extends PureComponent {
  render() {
    return (
      <div>
        <SearchBar />
        <Swiper />
      </div>
    )
  }
}
