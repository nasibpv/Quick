import { Col, Row,Divider,Button,Select } from 'antd';
import { Form, Input } from 'antd';
import { useEffect, useState } from 'react';
  const handleClose =()=>{
    window.history.back()
  }
function Add_Patient () {
  const[doctors,setDoctors]=useState([])
  const [departments,setDepartments]=useState([])
  const [dep,setDep]=useState('')
  

 
    const filterData= doctors.filter(items=>items.departments==dep)
  
  
  const handleSubmit=(value)=>{
    console.log(value,'values');
    alert('added patient')
    window.history.back()
    
  }

  const handleChange = (value) => {
    setDep(value); // Set the selected value to state
  };

  useEffect(()=>{
    const fetchData = async () => {
      const response = await fetch('data.json');
      const result = await response.json();
      const datas = result.doctors;

      if (datas) {
        const extractedData = datas.map(doctor => ({
          id: doctor.id,
          name: doctor.name,
          departments:doctor.specialization
        }));
        setDoctors(extractedData);
        setDepartments(result.departments)
      }
    };

    fetchData();
  },[])
return (
  <div className='w-full sm:w-4/5 p-5 border rounded '>
    <Form
      name="layout-multiple-horizontal"
      layout="vertical"
      labelCol={{
        span: 12,
      }}
      wrapperCol={{
        span: 24,
      }}
      onFinish={handleSubmit}
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
        initialValue={{p_id:'321'}}
      >
        <Input disabled name='p_id' className='border-0 bg-gray-100 rounded-none ' />
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
        label="Date of Birth"
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

    <Divider orientation="left">User Information</Divider>
    
    <Row gutter={{xs: 8,sm: 16,md: 24,lg: 32,}} className=''>
      {/* <Col className="gutter-row h-auto "  sm={8} xs={12}>
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
      </Col> */}
      {/* <Col className="gutter-row h-auto "  sm={8} xs={12}>
        <div >
        <Form.Item
        layout="vertical"
        label="Date of Hire"
        name="hireDate"
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
      </Col> */}
      {/* <Col className="gutter-row h-auto "  sm={8} xs={12}>
        <div >
        <Form.Item
        layout="vertical"
        label="Work reference Number"
        name="workReferenceNumber"
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
      </Col> */}
      {/* <Col className="gutter-row h-auto "  sm={8} xs={12}>
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
      </Col> */}
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
        rules={[
          {
            required: true,
          },
        ]}
      >
<Select
                  showSearch
                  placeholder="Search to Select"
                  optionFilterProp="children"
                  onChange={handleChange}
                >
                  {departments.map(type => (
                    <Select.Option key={type.key} value={type.name} onClick={(e)=>setDep(e.target.value)}>
                      {type.name}
                    </Select.Option>
                  ))}
                </Select>      
                </Form.Item>
        </div>
      </Col>
      <Col className="gutter-row h-auto "  sm={8} xs={12}>
      <div >
                <Form.Item
                layout="vertical"
                label="Doctor"
                name="doctor"
                className='text-sm'
                labelCol={{
                  span: 24,
                }}
                wrapperCol={{
                  span: 24,
                }}
                rules={[
                  {
                    required: true,
                  },
                ]}
              >    
               <Select
                  showSearch
                  placeholder="Search to Select"
                  optionFilterProp="children"
                >
                  {filterData.map(type => (
                    <Select.Option key={type.key} value={type.name}>
                      {type.name}
                    </Select.Option>
                  ))}
                </Select>     
              </Form.Item>
        </div>
      </Col>
    </Row>
    
    <Divider orientation="left">Contact Information</Divider>
    
      <Row gutter={{xs: 8,sm: 16,md: 24,lg: 32,}} className=''>
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

  
    <div className='p-2 justify-end flex gap-2'>
      <Button onClick={handleClose}>Cancel</Button>
      <Button htmlType='submit' className=''>Submit</Button>
    </div>
    </Form>
    
  </div>
)

}
export default Add_Patient;