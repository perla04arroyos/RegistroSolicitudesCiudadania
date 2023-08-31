import React from 'react'
import MenuItem from './menu-item';
import { Layout, Row } from 'antd';
const { Header } = Layout;

const headerStyle = {
    backgroundColor: '#fafafa',
  };

function Menu() {
    return (
        <Header style={headerStyle}>
            <Row justify="end" >
                <MenuItem 
                    text="Inicio"
                    link="/"
                />
                <MenuItem 
                    text="Acerca de nosotros"
                    link="/about"
                />
                <MenuItem 
                    text="Servicios"
                    link="/services"
                />
                <MenuItem 
                    text="Solicitudes"
                    link="/requests"
                />
            </Row>
        </Header>
    );
}

export default Menu;