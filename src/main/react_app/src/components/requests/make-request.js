import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input, Typography, Upload, Select } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
const { Option } = Select;
const { Title } = Typography;
const { TextArea } = Input;


function MakeRequest() {

    const [form] = Form.useForm();
    const navigate = useNavigate();

    const [serviceOptions, setServiceOptions] = useState([]);
    const [cityOptions, setCityOptions] = useState([]);

    useEffect(() => { 
        fetch('http://localhost:8080/api/v1/services')
            .then(response => response.json())
            .then(data => {
                let options = []
                data.map((item) => {
                    options.push({
                        label: item.name,
                        value: item.name
                    })
                })
                console.log(options)
                setServiceOptions(options)
            })
            .catch(error => console.log(error));

        fetch('http://localhost:8080/api/v1/cities')
            .then(response => response.json())
            .then(data => {
                let options = []
                data.map((item) => {
                    options.push({
                        label: item.name,
                        value: item.name
                    })
                })
                setCityOptions(options)
            })
            .catch(error => console.log(error));
    }, []);

    const onServiceChange = (value) => {
        form.setFieldsValue({
            service: {
                name: value
            }
        });
    };

    const onCityChange = (value) => {
        form.setFieldsValue({
            city: {
                name: value
            }
        });
    };

    const formItemLayout = {
        labelCol: {
            span: 4,
        },
        wrapperCol: {
            span: 14,
        },
    };

    const buttonItemLayout = {
        wrapperCol: {
            span: 14,
            offset: 4,
        },
    };

    const requiredFieldRule = [
        {
            required: true,
            message: 'Este campo es requerido',
        },
    ];

    const onFinish = (values) => {
        console.log('Validation fields was succeded:', values);
        fetch('http://localhost:8080/api/v1/service-request', {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if(data.code && data.code === 201){
                    navigate("/requests");
                }
            })
            .catch(error => console.log(error));
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Validation fields was failed:', errorInfo);
    };


    return (
        <>
            <Title>Realizar solicitud</Title>
            <Form
                name="basic"
                {...formItemLayout}
                layout={'horizontal'}
                form={form}
                initialValues={{
                    layout: 'horizontal',
                    remember: true
                }}
                style={{
                    maxWidth: 600,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    name="service" 
                    style={{
                        display: 'none'
                    }}
                >
                    <Input disabled />
                </Form.Item>
                <Form.Item
                    label="Servicio"
                    name="serviceSelect"
                    required
                    tooltip="Este campo es requerido"
                    rules={requiredFieldRule}
                >
                    <Select
                        placeholder="Selecciona un servicio"
                        onChange={onServiceChange}
                        allowClear
                        options={serviceOptions}
                    >
                    </Select>
                </Form.Item>
                <Form.Item
                    name="city"
                    style={{
                        display: 'none'
                    }}
                >
                    <Input disabled />
                </Form.Item>
                <Form.Item 
                    label="Ciudad" 
                    name="citySelect"
                    required
                    tooltip="Este campo es requerido"
                    rules={requiredFieldRule}
                >
                    <Select
                        placeholder="Selecciona una ciudad"
                        onChange={onCityChange}
                        allowClear
                        options={cityOptions}
                    >
                    </Select>
                </Form.Item>
                <Form.Item 
                    label="Dirección"
                    name="address"
                    required
                    tooltip="Este campo es requerido"
                    rules={requiredFieldRule}
                >
                    <TextArea rows={2} />
                </Form.Item>
                <Form.Item label="Descripción" name="description">
                    <TextArea rows={4} />
                </Form.Item>
                <Form.Item label="Email" name="email">
                    <Input />
                </Form.Item>
                <Form.Item label="Upload" valuePropName="fileList" name="mediaUrl">
                    {/* <Form.Item label="Upload" valuePropName="fileList" getValueFromEvent={normFile}> */}
                    <Upload action="/upload.do" listType="picture-card">
                        <div>
                            <PlusOutlined />
                            <div
                                style={{
                                    marginTop: 8,
                                }}
                            >
                                Upload
                            </div>
                        </div>
                    </Upload>
                </Form.Item>
                <Form.Item {...buttonItemLayout}>
                    <Button type="primary" htmlType="submit" >Enviar</Button>
                </Form.Item>
            </Form>

        </>
    );
}

export default MakeRequest;