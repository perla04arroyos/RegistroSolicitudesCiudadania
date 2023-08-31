// import logo from './logo.svg';
import React from 'react'
import './App.css';
import { Outlet } from "react-router-dom";
import Menu from './components/menu/menu';
import { ConfigProvider, Layout } from 'antd';
const { Content } = Layout;

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#00c2a8',
          borderRadius: 4,
          colorLink: '#33333',
        },
      }}
    >
      <Layout className="layout">
        <Menu />
        <Content
          style={{
            padding: '0 50px',
            backgroundColor: '#fff',  
          }}
        >
          <div id="detail">
            <Outlet />
          </div>
        </Content>
      </Layout>
    </ConfigProvider>

  );
}

export default App;
