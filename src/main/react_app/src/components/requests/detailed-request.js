import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { Col, Row, Typography, Input, Space } from 'antd';
const { Title } = Typography;
const { TextArea } = Input;


function DetailedRequest() {
    const location = useLocation();
    const { code } = location.state;
    const [serviceRequest, setServiceRequest] = useState([]);

    useEffect(() => { 
        fetch(`http://localhost:8080/api/v1/service-request?code=${code}`)
            .then(response => response.json())
            .then(data => {
                data.map((item) => {
                    item.groupName = item.service ? item.service.group.name : ''
                    item.serviceName = item.service ? item.service.name : ''
                    item.stateName = item.city ? item.city.state.name : ''
                    item.cityName = item.city ? item.city.name : ''
                })
                console.log(data[0])
                setServiceRequest(data[0])
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <>
            <Title>Detalle de solicitudes</Title>
              <Row>
                <Col span={12}>
                    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                        <Input value={serviceRequest.code} />
                        <Input value={serviceRequest.groupName} />
                        <Input value={serviceRequest.serviceName} />
                        <Input value={serviceRequest.stateName} />
                        <Input value={serviceRequest.cityName} />
                        <Input value={serviceRequest.address} />
                        <Input value={serviceRequest.email} />
                        <Input value={serviceRequest.mediaUrl} />
                        <TextArea
                            value={serviceRequest.description}
                            autoSize={{ minRows: 2, maxRows: 6 }}
                        />
                    </Space>
                </Col>
            </Row>
        </>
    );
}

export default DetailedRequest;