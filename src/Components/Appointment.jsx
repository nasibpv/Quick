import { Col, Row, Divider, Button, Select, Form, Input, Modal, notification } from 'antd';
import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router';
import { PDFDownloadLink } from '@react-pdf/renderer';
import Invoice from '../Report/Invoice';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

function Appointment() {

    const [timestamp, setTimestamp] = useState('');
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState(null);
    const [doctors, setDoctors] = useState([]);
    const [departments, setDepartments] = useState([]);
    const [selectedDepartment, setSelectedDepartment] = useState(null);
    const [A_id, setA_id] = useState('');

    const navigate = useNavigate();
    console.log(formData);
    

    const onFinish = (values) => {
        const currentTime = new Date().toLocaleString();
        setTimestamp(currentTime);
        const appointmentData = {
            ...values,
            timestamp: currentTime,
            A_ID: A_id,
        };
        setFormData(appointmentData);
        setOpen(true);
    };

    const handleCancel = () => {
        setOpen(false);
    };

    const handleDepartmentChange = (value) => {
        setSelectedDepartment(value);
    };

    const filteredDoctors = useMemo(() => {
        if (!selectedDepartment) return doctors;
        return doctors.filter(doc => doc.department === selectedDepartment);
    }, [doctors, selectedDepartment]);

    const mutation = useMutation({
        mutationFn: async () => {
            const result = await axios.post('http://localhost:3004/appointment', formData);
            return result.data;
        },
        onSuccess: () => {
            notification.success({
                message: 'Appointment Successful',
                description: 'Your appointment has been scheduled!',
            });
            navigate('/');
        },
        onError: (error) => {
            notification.error({
                message: 'Appointment Error',
                description: error.response?.data?.message || 'An error occurred. Please try again.',
            });
        }
    });

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get('http://localhost:3004/appointmentDetails');
            const departmentData = data.doctor;
            if (departmentData) {
                const extractedData = departmentData.map(doctor => ({
                    id: doctor.id,
                    name: doctor.name,
                    department: doctor.specialization,
                }));
                setDoctors(extractedData);
                setDepartments(data.department);
                setA_id(data.A_ID + 1);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <div className="p-2">
                <Form
                    name="layout-multiple-horizontal"
                    layout="vertical"
                    onFinish={onFinish}
                    labelCol={{ span: 12 }}
                    wrapperCol={{ span: 24 }}
                >
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className='border-b'>
                        <Col sm={8} xs={12}>
                            <Form.Item label="A_ID" name="A_ID" className='text-sm'>
                                <Input disabled value={A_id} placeholder={A_id} className='border-0 bg-gray-100 rounded-none' />
                            </Form.Item>
                        </Col>
                        <Col sm={8} xs={12}>
                            <Form.Item
                                label="First Name"
                                name="firstName"
                                className='text-sm'
                                rules={[{ required: true, message: 'Please input your first name!' }, { max: 30, message: 'First name cannot exceed 30 characters!' }]}
                            >
                                <Input className='border-0 bg-gray-100 rounded-none hover:border hover:border-gray-300' />
                            </Form.Item>
                        </Col>
                        <Col sm={8} xs={12}>
                            <Form.Item label="Last Name" name="lastName" className='text-sm'>
                                <Input className='border-0 bg-gray-100 rounded-none hover:border hover:border-gray-300' />
                            </Form.Item>
                        </Col>
                        <Col sm={8} xs={12}>
                            <Form.Item label="Age" name="age" className='text-sm'>
                                <Input className='border-0 bg-gray-100 rounded-none w-full hover:border hover:border-gray-300' />
                            </Form.Item>
                        </Col>
                        <Col sm={8} xs={12}>
                            <Form.Item label="Number" name="number" className='text-sm' rules={[{ required: true, message: 'Please input your number!' }, { max: 30, message: 'Number cannot exceed 30 characters!' }]}>
                                <Input className='border-0 bg-gray-100 rounded-none hover:border hover:border-gray-300' />
                            </Form.Item>
                        </Col>
                        <Col sm={8} xs={12}>
                            <Form.Item label="Email" name="email" className='text-sm'>
                                <Input type='email' className='border-0 bg-gray-100 rounded-none hover:border hover:border-gray-300' />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Divider orientation="left">Other Information Report </Divider>

                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className='border-b'>
                        <Col sm={8} xs={12}>
                            <Form.Item name="department" label="Department" className='text-sm' rules={[{ required: true }]}>
                                <Select
                                    showSearch
                                    placeholder="Search to Select"
                                    optionFilterProp="children"
                                    onChange={handleDepartmentChange}
                                >
                                    {departments.map(type => (
                                        <Select.Option key={type.key} value={type.name}>
                                            {type.name}
                                        </Select.Option>
                                    ))}
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col sm={8} xs={12}>
                            <Form.Item label="Doctor" name="doctor" className='text-sm' rules={[{ required: true }]}>
                                <Select
                                    mode="tag"
                                    placeholder="Please select"
                                    options={filteredDoctors.map(doc => ({ label: doc.name, value: doc.name }))}
                                />
                            </Form.Item>
                        </Col>
                    </Row>

                    <div className='pt-2 flex justify-end  '>
                        <Form.Item >
                            <Button  type="primary" className='me-2' onClick={() => navigate('/')}>
                                Close
                            </Button>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </div>
                </Form>
            </div>

            <Modal
                centered
                open={open}
                title="Confirm Appointment"
                onCancel={handleCancel}
                footer={null}
            >
                <div>
                    <div className='w-full border p-3 rounded mt-5'>
                        <h2 className='text-blue-400 p-1 pb-4 font-bold text-4xl'>Quick Overview</h2>
                        <div className='flex justify-between border-b pb-3'>
                            <div>
                                <p>UH ID : {A_id}</p>
                                <p>Name : {formData?.firstName} {formData?.lastName}</p>
                                <p>Number : {formData?.number}</p>
                                <p>Age : {formData?.age}</p>
                            </div>
                            <div>
                                <p>Admission ID : 1212</p>
                                <p>Department : {formData?.department}</p>
                                <p>Dr. : {formData?.doctor}</p>
                                <p>Date : {timestamp}</p>
                            </div>
                        </div>
                        <p>Description</p>
                        <div style={{ minHeight: '200px' }}></div>
                    </div>
                    <PDFDownloadLink document={<Invoice formData={formData} />} fileName="invoice.pdf" className='flex justify-end'>
                        {({ loading }) => (loading ? 'Loading document...' : <Button className='mt-2' onClick={mutation.mutate}>Print</Button>)}
                    </PDFDownloadLink>
                </div>
            </Modal>
        </div>
    );
}

export default Appointment;
