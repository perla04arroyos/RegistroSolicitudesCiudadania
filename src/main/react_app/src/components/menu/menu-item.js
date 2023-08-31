import React from 'react'
import { Link } from "react-router-dom";
import { Col } from 'antd';

const menuItemStyle = {
    padding: '0 10px',
    color: '#333'
}

function MenuItem(props) {
    return (
        <Col style={menuItemStyle}>
            <Link to={props.link}>{props.text}</Link>
        </Col>
    );
}

export default MenuItem;