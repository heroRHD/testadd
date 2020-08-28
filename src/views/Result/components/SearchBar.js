import React, { Component } from 'react';
import { Form, Input, Button, Row, Col, Select } from 'antd';
import countryData from '../../../components/constants/countryData'
import './public.module.less'

const transportWay = ['不限', '海运', '空运', '陆运']
const { Option } = Select;
class SearchBar extends Component {

    onFinish = (values) => {
        console.log('Success:', values);
    };

    onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    render() {
        return (
            <div className='searchbar'>
                <Form
                    name="basic"
                    colon={false}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={this.onFinish}
                    onFinishFailed={this.onFinishFailed}
                >
                    <Row gutter={[8]}>
                        <Col span={6}>
                            <Form.Item
                                name="origin"
                            >
                                <Select
                                    showSearch
                                    style={{ width: '100%' }}
                                    placeholder="请选择始发地国家"
                                    optionFilterProp="children"
                                    filterOption={(input, option) =>
                                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    }
                                >
                                    <Option value="China">中国</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <Form.Item
                                name="destination"
                            >
                                <Select
                                  showSearch
                                  style={{ width: '100%' }}
                                  placeholder="请选择目的地"
                                  optionFilterProp="children"
                                //   filterOption={(input, option) =>
                                //     option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                //   }
                                >
                                    {
                                        countryData.map(item => {
                                            return (
                                                <Option value={item.simpleName} key={item.name}>
                                                    <img
                                                        src={item.src}
                                                        alt={item.simpleName}
                                                    // className={styles.country_img}
                                                    />
                                                    {item.name}
                                                </Option>
                                            )
                                        })
                                    }
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={3}>
                            <Form.Item
                                name="transport"
                            >
                                <Select
                                    showSearch
                                    style={{ width: '100%' }}
                                    placeholder="请选运输方式"
                                    optionFilterProp="children"
                                    filterOption={(input, option) =>
                                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    }
                                >
                                    {
                                        transportWay.map(item => {
                                            return (
                                                <Option value={item} key={item}>
                                                    {item}
                                                </Option>
                                            )
                                        })
                                    }
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={7}>
                            <Form.Item
                                name="keyword"
                            >
                                <Input placeholder='输入物流名称/关键字' />
                            </Form.Item>
                        </Col>
                        <Col span={2}>
                            <Button type="primary" htmlType="submit" style={{width:'100%'}}>
                                搜索
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        );
    }
}

export default SearchBar;