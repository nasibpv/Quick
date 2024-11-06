import { Col, Row,Divider } from 'antd';
import { Form, Input } from 'antd';


function Detail_p(){
    return(
       
              <div className='pt-2 p-1 '>
    <Form
      name="layout-multiple-horizontal"
      layout="vertical"
      labelCol={{
        span: 12,
      }}
      wrapperCol={{
        span: 24,
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
       
    )
}
export default Detail_p