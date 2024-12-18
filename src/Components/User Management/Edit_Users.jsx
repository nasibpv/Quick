// src/DataTable.js
import  { useState,useEffect } from 'react';
import {  Modal,Form,Input,Tag, Col, Row,Divider, } from 'antd';
// import { InfoCircleOutlined } from '@ant-design/icons';

import { Link } from 'react-router-dom';

const customizeRequiredMark = (label, { required }) => (
    <>
      {required ? <Tag color="error">Required</Tag> : <Tag color="warning">optional</Tag>}
      {label}
    </>
  );
function Edit_Users() {
  const [selectedUser, setSelectedUser] = useState([]);
  const [open, setOpen] = useState(false);
  const [dataSource,setDataSource]=useState([])

  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] = useState('optional');
  const onRequiredTypeChange = ({ requiredMarkValue }) => {
    setRequiredMarkType(requiredMarkValue);
  }; 
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    margin: '0px',
    border: '1px solid #ccc',
    borderRadius:'15px 15px 0 0'
  };

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px',
    backgroundColor: '#f4f4f4',
    fontWeight: 'bold',
    borderRadius:'15px 15px 0 0'
  };

  const rowStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '8px',
    borderBottom: '1px solid #ccc',  
    
  };
  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Age', dataIndex: 'age', key: 'age' },
    { title: 'City', dataIndex: 'city', key: 'city' },
    { title: 'Country', dataIndex: 'country', key: 'country' },
    { title: 'Occupation', dataIndex: 'occupation', key: 'occupation' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    { title: 'Phone', dataIndex: 'phone', key: 'phone' },
    { title: 'Joined', dataIndex: 'joined', key: 'joined' },
  ];

  useEffect(() => {
    const dataSource=async()=>{
      const result=await fetch('/data.json')
      const data=await result.json()
      setDataSource(data.dataSource)
      
  }
    dataSource()
     return () => {
      console.log('Cleanup code here');
    };
  },[])
  return (
    <div>
      <div style={{ margin: '20px' }}>
        <div style={containerStyle}>
          <div style={headerStyle}>
            {
                columns.map((items)=>(
                    <div key={items.key}>{items.title}</div>
                ))
                }
          </div>
          {
          dataSource.map(item => (
            <Link  style={rowStyle} key={item.id} onClick={() => setOpen(true) & setSelectedUser(item)} className='hover:bg-blue-100 hover:text-blue'>
              <div>{item.id}</div>
              <div>{item.name}</div>
              <div>{item.age}</div>
              <div>{item.city}</div>
              <div>{item.country}</div>
              <div>{item.occupation}</div>
              <div>{item.email}</div>
              <div>{item.phone}</div>
              <div>{item.joined}</div>
            </Link>
          ))
          }
        </div>
      </div>
        {
          selectedUser?
          <Modal
            title="Modal 900px width"
            centered
            open={open}
            onOk={() => setOpen(false)&setSelectedUser('')}
            onCancel={() => setOpen(false)&setSelectedUser('')}
            width={800}
            >
          {/* <div>
          <Form
              form={form}
              layout="vertical"
              initialValues={{
                requiredMarkValue: requiredMark,
              }}
              onValuesChange={onRequiredTypeChange}
              requiredMark={requiredMark === 'customize' ? customizeRequiredMark : requiredMark}
            >
              
        <Form.Item label="Field A" required tooltip="This is a required field">
          <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item
          label="Field B"
          tooltip={{
            title: 'Tooltip with customize icon',
            icon: <InfoCircleOutlined />,
          }}
        >
          <Input placeholder="input placeholder" value={selectedUser.item}/>
        </Form.Item>
        <Form.Item>
          <Button type="primary">Submit</Button>
          <Button type="primary" onClick={downloadPDF}>Print</Button>
        </Form.Item>
      </Form>
          </div> */}
          <div>
    <Form
    form={form}
      name="layout-multiple-horizontal"
      layout="vertical"
      initialValues={{
        requiredMarkValue: requiredMark,
      }}
      onValuesChange={onRequiredTypeChange}
      requiredMark={requiredMark === 'customize' ? customizeRequiredMark : requiredMark}
      labelCol={{
        span: 6,
      }}
      wrapperCol={{
        span: 6,
      }}
    >
      
      <Row gutter={{xs: 8,sm: 16,md: 24,lg: 32,}} className='border-b'>
      <Col className="gutter-row  "  sm={8} xs={12}>
        <div >
        <Form.Item
        layout="vertical"
        label="User ID"
        name="userId"
        className='text-sm '
        rules={[
          {
            required: true,
          },
        ]}
        labelCol={{
          span: 24,
        }}
        wrapperCol={{
          span: 24,
        }}
      >
        <Input disabled className='border-0 bg-gray-100 rounded-none ' />
      </Form.Item>
        </div>
      </Col>
      <Col className="gutter-row "  sm={8} xs={12}>
        <div >
        <Form.Item
        layout="vertical"
        label="First Name"
        name="lastName"
        className='text-sm '
        rules={[
          {
            required: true,
          },
        ]}
        labelCol={{
          span: 24,
        }}
        wrapperCol={{
          span: 24,
        }}
      >
        <Input className='border-0 bg-gray-100 rounded-none hover:border hover:border-gray-300' />
      </Form.Item>
        </div>
      </Col>
      <Col className="gutter-row "  sm={8} xs={12}>
        <div >
        <Form.Item
        layout="vertical"
        label="Fast Name"
        name="firstName"
        className='text-sm'
        rules={[
          {
            required: true,
          },
        ]}
        labelCol={{
          span: 24,
        }}
        wrapperCol={{
          span: 24,
        }}
      >
        <Input className='border-0 bg-gray-100 rounded-none hover:border hover:border-gray-300' />
      </Form.Item>
        </div>
      </Col>
      <Col className="gutter-row "  sm={8} xs={12}>
        <div >
        <Form.Item
        layout="vertical"
        label="Date of Brith"
        name="lastName"
        className='text-sm'
        labelCol={{
          span: 24,
        }}
        wrapperCol={{
          span: 24,
        }}
      >
        <Input className='border-0 bg-gray-100 rounded-none w-full hover:border hover:border-gray-300' type='date'/>
      </Form.Item>
        </div>
      </Col>
      <Col className="gutter-row  "  sm={8} xs={12}>
        <div >
        <Form.Item
        layout="vertical"
        label="Preferred Name"
        name="lastName"
        className='text-sm'
        labelCol={{
          span: 24,
        }}
        wrapperCol={{
          span: 24,
        }}
      >
        <Input className='border-0 bg-gray-100 rounded-none hover:border hover:border-gray-300' />
      </Form.Item>
        </div>
      </Col>
      <Col className="gutter-row h-auto "  sm={8} xs={12}>
        <div >
        <Form.Item
        layout="vertical"
        label="Email"
        name="email"
        className='text-sm'
        labelCol={{
          span: 24,
        }}
        wrapperCol={{
          span: 24,
        }}
      >
        <Input type='mail' className='border-0 bg-gray-100 rounded-none hover:border hover:border-gray-300' />
      </Form.Item>
        </div>
      </Col>
    </Row>
    
    <Divider orientation="left">Contact Informaion</Divider>
    
      <Row gutter={{xs: 8,sm: 16,md: 24,lg: 32,}} className='border-b'>
      <Col className="gutter-row h-auto "  sm={16} xs={16}>
        <div >
        <Form.Item
        layout="vertical"
        name="note"
        label="Address"
        className='text-sm '
      >
        <Input className='border-0 bg-gray-100 rounded-none hover:border hover:border-gray-300'/>
      </Form.Item>
        </div>
      </Col>
      <Col className="gutter-row h-auto "  sm={8} xs={8}>
        <div >
        <Form.Item
        layout="vertical"
        label="city"
        name="city"
        className='text-sm'
        labelCol={{
          span: 24,
        }}
        wrapperCol={{
          span: 24,
        }}
      >
        <Input  className='border-0 bg-gray-100 rounded-none hover:border hover:border-gray-300' />
      </Form.Item>
        </div>
      </Col>
      <Col className="gutter-row h-auto "  sm={8} xs={8}>
        <div >
        <Form.Item
        layout="vertical"
        label="Province"
        name="province"
        className='text-sm'
        labelCol={{
          span: 24,
        }}
        wrapperCol={{
          span: 24,
        }}
      >
        <Input  className='border-0 bg-gray-100 rounded-none hover:border hover:border-gray-300' />
      </Form.Item>
        </div>
      </Col>
      <Col className="gutter-row h-auto "  sm={8} xs={8}>
        <div >
        <Form.Item
        layout="vertical"
        label="Pin Code"
        name="pin code"
        className='text-sm'
        labelCol={{
          span: 24,
        }}
        wrapperCol={{
          span: 24,
        }}
      >
        <Input  className='border-0 bg-gray-100 rounded-none hover:border hover:border-gray-300' />
      </Form.Item>
        </div>
      </Col>
      <Col className="gutter-row h-auto "  sm={8} xs={8}>
        <div >
        <Form.Item
        layout="vertical"
        label="Phone "
        name="phoneNumber"
        className='text-sm'
        labelCol={{
          span: 24,
        }}
        wrapperCol={{
          span: 24,
        }}
      >
        <Input  className='border-0 bg-gray-100 rounded-none hover:border hover:border-gray-300' />
      </Form.Item>
        </div>
      </Col>
      
    </Row>
    <Divider orientation="left">User Informaion</Divider>
    <Row gutter={{xs: 8,sm: 16,md: 24,lg: 32,}} className='border-b'>
      <Col className="gutter-row h-auto "  sm={8} xs={12}>
        <div >
        <Form.Item
        layout="vertical"
        label="Job Title / Occupation"
        name="jobTitle"
        className='text-sm'
        labelCol={{
          span: 24,
        }}
        wrapperCol={{
          span: 24,
        }}
      >
        <Input  className='border-0 bg-gray-100 rounded-none hover:border hover:border-gray-300' />
      </Form.Item>
        </div>
      </Col>
      <Col className="gutter-row h-auto "  sm={8} xs={12}>
        <div >
        <Form.Item
        layout="vertical"
        label="Date of Hire"
        name="dateofhire"
        className='text-sm'
        labelCol={{
          span: 24,
        }}
        wrapperCol={{
          span: 24,
        }}
      >
        <Input type='date' className='border-0 bg-gray-100 rounded-none hover:border hover:border-gray-300' />
      </Form.Item>
        </div>
      </Col>
      <Col className="gutter-row h-auto "  sm={8} xs={12}>
        <div >
        <Form.Item
        layout="vertical"
        label="Work reference Number"
        name="workrefererncenumber"
        className='text-sm'
        labelCol={{
          span: 24,
        }}
        wrapperCol={{
          span: 24,
        }}
      >
        <Input  className='border-0 bg-gray-100 rounded-none hover:border hover:border-gray-300' />
      </Form.Item>
        </div>
      </Col>
      <Col className="gutter-row h-auto "  sm={8} xs={12}>
        <div >
        <Form.Item
        layout="vertical"
        label="Occupation Group"
        name="Occupation"
        className='text-sm'
        labelCol={{
          span: 24,
        }}
        wrapperCol={{
          span: 24,
        }}
      >
        <Input  className='border-0 bg-gray-100 rounded-none hover:border hover:border-gray-300' />
      </Form.Item>
        </div>
      </Col>
      <Col className="gutter-row h-auto "  sm={8} xs={12}>
        <div >
        <Form.Item
        layout="vertical"
        label="Department"
        name="department"
        className='text-sm'
        labelCol={{
          span: 24,
        }}
        wrapperCol={{
          span: 24,
        }}
      >
        <Input  className='border-0 bg-gray-100 rounded-none hover:border hover:border-gray-300' />
      </Form.Item>
        </div>
      </Col>
      <Col className="gutter-row h-auto "  sm={8} xs={12}>
        <div >
        <Form.Item
        layout="vertical"
        label="Division"
        name="divison"
        className='text-sm'
        labelCol={{
          span: 24,
        }}
        wrapperCol={{
          span: 24,
        }}
      >
        <Input  className='border-0 bg-gray-100 rounded-none hover:border hover:border-gray-300' />
      </Form.Item>
        </div>
      </Col>
    </Row>
    </Form>
    
  </div>
        </Modal>:''}
    </div>
  );
};


export default Edit_Users

