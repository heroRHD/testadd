import React from 'react'
import { Form, Input, Button, Select } from 'antd';
import styles from './searchBar.module.less'
import countryData from '../constants/countryData'
import './searchBar.module.less'

const SearchBar = () => {
  const
    { Option } = Select,
    onFinish = values => {
      console.log('Success:', values);
    },

    onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
    },

    transportWay = ['不限', '海运', '空运', '陆运']

  return (
    <Form
      className={styles.search_form}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        style={{ width: '1100px' }}
      >
        <Input.Group compact className={styles.search_group_box}>
          <Form.Item
            noStyle
          >
            <Select
              className={styles.search_country_item_input}
              defaultValue='CN'
            >
              <Option value="CN">
                <img
                  src="../constants/assets/images/CN_86.gif"
                  alt="CN"
                  className={styles.country_img}
                />
                中国
              </Option>
            </Select>
          </Form.Item>
          <Form.Item
            name='目的站'
            noStyle
          >
            <Select placeholder='目的地' className={styles.search_item}>
              {
                countryData.map(item => {
                  return (
                    <Option value={item.simpleName} key={item.name}>
                      <img
                        src={item.src}
                        alt={item.simpleName}
                        className={styles.country_img}
                      />
                      {item.name}
                    </Option>
                  )
                })
              }
            </Select>
          </Form.Item>
          <Form.Item
            name='运输方式'
            noStyle
          >
            <Select placeholder='运输方式' className={styles.search_item}>
              {
                transportWay.map(item => <Option value={item} key={item}>{item}</Option>)
              }
            </Select>
          </Form.Item>
          <Form.Item
            name='大货小包'
            noStyle
          >
            <Select placeholder='大货/小包' className={styles.search_item}>
              <Option value='大货'>大货</Option>
              <Option value='小包'>小包</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name='关键字'
            noStyle
          >
            <Input placeholder='输入物流名称/关键字' className={styles.search_item} />
          </Form.Item>
          <Form.Item noStyle>
            <Button
              className={styles.search_btn}
              type="primary"
              htmlType="submit"
            >
              搜索
            </Button>
          </Form.Item>
        </Input.Group>
      </Form.Item>
    </Form>
  );
};

export default SearchBar


