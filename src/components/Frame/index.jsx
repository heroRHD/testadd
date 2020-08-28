import React, { PureComponent } from 'react'
import styles from './frame.module.less'
import { Dropdown, Avatar, Badge, Menu, Button } from 'antd'
import { UserOutlined } from "@ant-design/icons";


export default class Frame extends PureComponent {
  state = {
    // avatarSize: 64,
    avatarClassName: styles.head_bar_user_avatar,

  }
  render() {
    // 常量
    const
      logoutDropdownMenu = () => {
        return (
          <Menu
            className={styles.dropdown_menu}
            selectedKeys={[]}
            theme='light'
          >
            <p className={styles.dropdown_menu_head}>欢迎使用新智慧物流</p>
            <Menu.Item className={styles.dropdown_menuitem}>
              注 册
            </Menu.Item>
            <Menu.Item className={styles.dropdown_menuitem}>
              <Button
                className={styles.dropdown_signIn_btn}
                block
                size='large'
                type='primary'
              >
                登录
              </Button>
            </Menu.Item>
          </Menu>
        )
      }

    return (
      <div className={styles.frame_box}>
        <div className={styles.head_bar}>
          <div className={styles.head_bar_content}>
            <div className={styles.head_bar_logo_box}>
              <img className={styles.head_bar_logo_img} src={require("./logo_w.png")} alt="logo" />
            </div>
            <div className={styles.head_bar_user_box}>
              <Dropdown
                className={styles.head_bar_user_dropdown}
                overlay={logoutDropdownMenu()}
                trigger={['hover']}
                placement='bottomCenter'
              >
                <Badge
                  className={styles.head_bar_user_badge}
                  count={100}
                  overflowCount={99}
                >
                  <Avatar
                    className={styles.head_bar_user_avatar}
                    icon={<UserOutlined />}
                    size={45}
                  />
                </Badge>
              </Dropdown>
              <Menu
                mode="horizontal"
                selectedKeys={[]}
                theme='light'
                className={styles.head_bar_tool_menu}
              >
                <Menu.Item className={styles.head_bar_tool_menuitem}>成为服务商</Menu.Item>
                <Menu.Item className={styles.head_bar_tool_menuitem}>帮助</Menu.Item>
              </Menu>
            </div>
          </div>
        </div>
        {this.props.children}
      </div>
    )
  }


}
