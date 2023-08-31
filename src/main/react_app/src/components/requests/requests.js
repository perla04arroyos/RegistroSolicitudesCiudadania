import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { Col, Row, Typography, Button, Dropdown, Space, Table } from 'antd';
import { DownOutlined, SearchOutlined } from '@ant-design/icons';
const { Title } = Typography;

const columns = [
    {
        title: 'Código',
        dataIndex: 'code',
        key: 'code',
    },
    {
        title: 'Servicio',
        dataIndex: 'serviceName',
        key: 'serviceName',
    },
    {
        title: 'Ciudad',
        dataIndex: 'cityName',
        key: 'cityName',
    },
    {
        title: '',
        dataIndex: 'url',
        key: 'url',
    },
];

function Requests() {
    const [loadings, setLoadings] = useState([]);
    const [services, setServices] = useState([]);

    const enterLoading = (index) => {
        setLoadings((prevLoadings) => {
            const newLoadings = [...prevLoadings];
            newLoadings[index] = true;
            return newLoadings;
        });
        setTimeout(() => {
            setLoadings((prevLoadings) => {
                const newLoadings = [...prevLoadings];
                newLoadings[index] = false;
                return newLoadings;
            });
        }, 6000);
    };

    useEffect(() => { 
        fetch('http://localhost:8080/api/v1/service-request')
            .then(response => response.json())
            .then(data => {
                data.map((item) => {
                    item.url = <Button type="primary"><Link to={'/detailed-request'} state={{ code: item.code }}>Ver Detalles</Link></Button>
                    item.serviceName = item.service ? item.service.name : ''
                    item.cityName = item.city ? item.city.name : ''
                    item.key = item.code
                })
                setServices(data)
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <>
            <Title>Solicitudes</Title>
            <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                <Row>
                    <Col span={8}>
                        <Button type="primary" >
                            <Link to={'/make-request'}>Realizar solicitud</Link>
                        </Button>
                    </Col>
                </Row>
                <Row align="middle">
                    <Col span={24}>
                        <Table dataSource={services} columns={columns} />
                    </Col>
                </Row>
            </Space>
        </>
    );
}

export default Requests;