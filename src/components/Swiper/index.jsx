import React, { PureComponent } from 'react'
import styles from './swiper.module.less'
import { Carousel } from 'antd';



export default class Swiper extends PureComponent {
  render() {
    return (
      <div>
        <div className={styles.content}>
          <div>123</div>
          <div style={{ width: '800px', height: '300px' }}>
            <Carousel
              className={styles.carousel_content}
              autoplay
            >
              <div className={styles.carousel_content_div}>
                <h3>1</h3>
              </div>
              <div className={styles.carousel_content_div}>
                <h3>2</h3>
              </div>
              <div className={styles.carousel_content_div}>
                <h3>3</h3>
              </div>
              <div className={styles.carousel_content_div}>
                <h3>4</h3>
              </div>
            </Carousel>
          </div>
          <div>123</div>
        </div>
      </div>

    )
  }
}
