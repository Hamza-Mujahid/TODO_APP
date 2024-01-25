import { Breadcrumb, Flex, Layout, theme } from 'antd'
import { Content, Footer, Header } from 'antd/es/layout/layout'
import React from 'react'
import TodoList from '../components/TodoList'
import { footerStyle, headerStyle } from '../components/styles/style'
import Item from 'antd/es/list/Item'

const TodoContainer = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const containerStyle = {
    background: colorBgContainer,
    minHeight: '70vh',
    padding: 24,
    borderRadius: borderRadiusLG,
  }


  return (
    <Flex>
      <Layout>
        <Header style={headerStyle} mode="horizontal"><div className="logo" style={{
          color: 'white'
        }} ><h1>Todo App</h1></div></Header>
        <Content style={{ padding: '0 48px', }}>
          <Breadcrumb style={{ margin: '16px 0', }}>
            <Item>Todo List</Item>
          </Breadcrumb>
          <div
            style={containerStyle}
          >
            <TodoList />
          </div>
        </Content>
        <Footer style={footerStyle}>Todo App ©2024 Created by Hamza Hussain</Footer>
      </Layout>
    </Flex >
  )
}

export default TodoContainer;