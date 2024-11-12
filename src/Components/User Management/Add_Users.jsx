import { Col, Row, Divider, Button } from 'antd';
import { Form, Input, DatePicker, Select,message  } from 'antd';
import { useEffect, useState } from 'react';

function AddUsers() {
  const [userType, setUserType] = useState([]);
  const [occupation,setOccupation]=useState([])
  const [outputString, setOutputString] = useState("");
  const [form] = Form.useForm();
  
  const incrementString =(lastId)=>{
    if(!lastId)return;
    const prefix=lastId.match(/[A-Za-z]+/)[0];
    const numberport = parseInt(lastId.match(/\d+/)[0],10)
    const incrementedNumber=numberport+1
    const newString = `${prefix}${incrementedNumber.toString().padStart(numberport.toString().length,'0')}`
    setOutputString(newString);
  }
  const handleSubmit=(values)=>{
    console.log(values);
    
    message.success({
      content:'Form submitted successfully!',
      duration:1,
      onClose: () => {
        // This function will be called when the message is closed
        console.log('Message closed');
        window.history.back(); // Navigate back after message closes
      },
    }
    );
    // You can handle the form values here, e.g., send them to a server    
    
  }
  const onFinishFailed = (errorInfo) => {
    message.error('Failed to submit form:', errorInfo);
  };

  const handleCancel = () => {
    window.history.back(); // Navigate back to the previous page
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('data.json');
      const result = await response.json();
      setUserType(result.userType);
      setOccupation(result.occupation)
      const lastvalue=result.users.slice(-1)[0]
      if(lastvalue){
        incrementString(lastvalue.u_id)
      }
      
    };
    fetchData();
  }, []);

  return (
    <div className='w-full sm:w-4/5 p-5 border rounded '>
      <Form
      form={form}
        name="layout-multiple-horizontal"
        layout="vertical"
        labelCol={{ span: 12 }}
        wrapperCol={{ span: 24 }}
        onFinish={handleSubmit}
        onFinishFailed={onFinishFailed}
      >
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className='border-b'>
          <Col sm={8} xs={12}>
          <label htmlFor="userID">U_ID</label>
              <Input name='userID' disabled value={outputString} className='border-0 mt-2 bg-gray-100 rounded-none' required />
           
          </Col>
          <Col sm={8} xs={12}>
            <Form.Item
              label="First Name"
              name="firstName"
              rules={[{ required: true }]}
            >
              <Input className='border-0 bg-gray-100 rounded-none hover:border hover:border-gray-300' required/>
            </Form.Item>
          </Col>
          <Col sm={8} xs={12}>
            <Form.Item
              label="Last Name"
              name="lastName"
              rules={[{ required: true }]}
            >
              <Input className='border-0 bg-gray-100 rounded-none hover:border hover:border-gray-300' />
            </Form.Item>
          </Col>
          <Col sm={8} xs={12}>
            <Form.Item
              label="Date of Birth"
              name="dateOfBirth"
              // rules={[{ required: true }]}
            >
              <DatePicker className='w-full' />
            </Form.Item>
          </Col>
          <Col sm={8} xs={12}>
            <Form.Item
              label="Preferred Name"
              name="preferredName"
            >
              <Input className='border-0 bg-gray-100 rounded-none hover:border hover:border-gray-300' />
            </Form.Item>
          </Col>
          <Col sm={8} xs={12}>
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, type: 'email' }]}
            >
              <Input type='email' className='border-0 bg-gray-100 rounded-none hover:border hover:border-gray-300' />
            </Form.Item>
          </Col>
        </Row>

        <Divider orientation="left">Contact Information</Divider>

        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className='border-b'>
          <Col sm={16} xs={16}>
            <Form.Item label="Address" name="address">
              <Input className='border-0 bg-gray-100 rounded-none hover:border hover:border-gray-300' />
            </Form.Item>
          </Col>
          <Col sm={8} xs={8}>
            <Form.Item label="City" name="city">
              <Input className='border-0 bg-gray-100 rounded-none hover:border hover:border-gray-300' />
            </Form.Item>
          </Col>
          <Col sm={8} xs={8}>
            <Form.Item label="Province" name="province">
              <Input className='border-0 bg-gray-100 rounded-none hover:border hover:border-gray-300' />
            </Form.Item>
          </Col>
          <Col sm={8} xs={8}>
            <Form.Item label="Pin Code" name="pinCode">
              <Input className='border-0 bg-gray-100 rounded-none hover:border hover:border-gray-300' />
            </Form.Item>
          </Col>
          <Col sm={8} xs={8}>
            <Form.Item label="Phone" name="phoneNumber" rules={[{ required: true,}]}>
              <Input className='border-0 bg-gray-100 rounded-none hover:border hover:border-gray-300' required/>
            </Form.Item>
          </Col>
        </Row>

        <Divider orientation="left">User Information</Divider>

        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className='border-b'>
          {[
            { label: "Job Title / Occupation", name: "jobTitle" },
            { label: "Date of Hire", name: "dateOfHire", component: <DatePicker className='w-full' /> },
            { label: "Work Reference Number", name: "workReferenceNumber" },
            {
              label: "User Type",
              name: "usernames",
              component: (
                <Select
                  showSearch
                  placeholder="Search to Select"
                  optionFilterProp="children"

                >
                  {userType.map(type => (
                    <Select.Option key={type.key} value={type.name}>
                      {type.name}
                    </Select.Option>
                  ))}
                </Select>
              )
            },
            
            { label: "Occupation Group", name: "occupationGroup",
              component: (
                <Select
                  showSearch
                  placeholder="Search to Select"
                  optionFilterProp="children"

                >
                  {occupation.map(type => (
                    <Select.Option key={type.key} value={type.name}>
                      {type.name}
                    </Select.Option>
                  ))}
                </Select>
              )
             },
            { label: "Department", name: "department" },
          ].map(({ label, name, component }) => (
            <Col sm={8} xs={12} key={name}>
              <Form.Item label={label} name={name}>
                {component || <Input className='border-0 bg-gray-100 rounded-none hover:border hover:border-gray-300' />}
              </Form.Item>
            </Col>
          ))}
        </Row>

        <div className='p-2 justify-end flex gap-2'>
          <Button onClick={handleCancel}>Cancel</Button>
          <Button  type="primary" htmlType="submit" >Submit</Button>
        </div>
      </Form>
    </div>
  );
}

export default AddUsers;
