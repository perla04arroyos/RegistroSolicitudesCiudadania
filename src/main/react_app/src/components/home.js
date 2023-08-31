import React from 'react';
import { Link } from "react-router-dom";
import logo from '../logo.png';
import { Col, Row, Typography, Button } from 'antd';
const { Title, Paragraph } = Typography;


function Home() {
    return (
        <Row>
            <Col span={12}>
                <img src={logo} alt="Logo" />
            </Col>
            <Col span={12}>
                <Title>La manera más facil de registrar y consultar las solicitudes de la Ciudadania</Title>
                <Paragraph>Brindamos atención oportuna y eficiente a las problemáticas de tu Ciudad</Paragraph>
                <Button type="primary"><Link to={'/make-request'}>Realiza tu solicitud ya</Link></Button>
                <ul>
                    <li>Ten a la mano tu correo eléctronico</li>
                    <li>Sólo te toma de 5 a 10 minutos</li>
                </ul>
            </Col>
        </Row>
    );
}

export default Home;