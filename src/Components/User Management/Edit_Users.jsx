// src/DataTable.js
import  { useState,useEffect } from 'react';
import jsPDF from 'jspdf';
import {  Modal,Form,Button,Input,Tag } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';

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

  const downloadPDF = () => {
    const doc = new jsPDF();
    const nameText = `Name: ${selectedUser.name}`;
    const pageWidth = doc.internal.pageSize.getWidth();
    const nameTextWidth = doc.getTextWidth(nameText);
    const nameX = (pageWidth - nameTextWidth) / 2
    doc.text(nameText, nameX, 10)
    doc.text(`Email: ${selectedUser.email}`, 10, 20);
    doc.text(`Phone: ${selectedUser.phone}`, 10, 30);
    doc.save('user-info.pdf');
  };
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
        <Modal
            title="Modal 1000px width"
            centered
            open={open}
            onOk={() => setOpen(false)&setSelectedUser('')}
            onCancel={() => setOpen(false)&setSelectedUser('')}
            width={900}>
          <div>
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
          </div>
        </Modal>
    </div>
  );
};


export default Edit_Users

