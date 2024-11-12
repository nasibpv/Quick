import { Button, Col, Row, Select, Space, Switch  } from "antd"
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { useState } from "react";
function PermissionManagement(){
    const [admin,setAdmin]=useState(false)
    const handleChange = (value) => {
        if(value){
            setAdmin(true)
            console.log(`selected ${value}`);
        }
        else{
            setAdmin(false)
        }
        
      };
    return (
        <div> 
            <div className="p-2 mb-4">
            <Space wrap>
                {/* <Select
                defaultValue=""
                style={{
                    width: 120,
                }}
                onChange={handleChange}
                options={[
                    {
                    value: 'user',
                    label: 'User',
                    },
                    {
                    value: 'staff',
                    label: 'Staff',
                    },
                    {
                    value: 'disabled',
                    label: 'Disabled',
                    disabled: true,
                    },
                ]}
                /> */}
                {/* <Select
                style={{
                    width: 120,
                }}
                onChange={handleChange}
                options={[
                    {
                    value: 'common',
                    label: 'Common',
                    },
                    {
                    value: 'person',
                    label: 'Person',
                    },
                ]}
                /> */}
                <Select
                showSearch
                placeholder="Select a permission"
                onChange={handleChange}
                filterOption={(input, option) =>
                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                }
                options={[
                {
                    value: '1',
                    label: 'User',
                },
                {
                    value: '2',
                    label: 'staff',
                },
                {
                    value: '3',
                    label: 'doctors',
                },
                ]}
            />
                </Space>
            </div>
            <div className="min-h-[60vh]" style={{display:!admin?"none":"block"}}>
                <Row className="w-full border p-0.5 bg-gray-300">
                <Col xs={2} sm={2} md={2} lg={2} xl={1} className="p-2 border">ID</Col>
                <Col xs={7} sm={0} md={4} lg={4} xl={4} className="p-2 border">Permission</Col>
                <Col xs={5} sm={7} md={7} lg={7} xl={7} className="p-2 border">View</Col>
                <Col xs={5} sm={8} md={8} lg={8} xl={8} className="p-2 border">Edit</Col>
                <Col xs={5} sm={7} md={3} lg={3} xl={4} className="p-2 border">None</Col>
                </Row>
                {/* {filteredData.map(item => (
                <Row key={item.id} className="w-full p-0.5  hover:bg-gray-100">
                    <Col xs={2} sm={2} md={2} lg={2} xl={1} className="p-2 border">{item.id}</Col>
                    <Col xs={0} sm={0} md={4} lg={4} xl={4} className="p-2 border">{item.id}</Col>
                    <Col xs={7} sm={7} md={7} lg={7} xl={7} className="p-2 border">{item.name}</Col>
                    <Col xs={8} sm={8} md={8} lg={8} xl={8} className="p-2 border">{item.phone}</Col>
                    <Col xs={7} sm={7} md={3} lg={3} xl={4} className="p-2 border text-center"><Button type='link' onClick={()=>location(`/user/${item.key}`)}>View</Button></Col>
                </Row>
                ))} */}
                <Row className="w-full p-0.5  hover:bg-gray-100">
                <Col xs={2} sm={2} md={2} lg={2} xl={1} className="p-2 border">1</Col>
                <Col xs={7} sm={0} md={4} lg={4} xl={4} className="p-2 border">Appointment</Col>
                <Col xs={5} sm={7} md={7} lg={7} xl={7} className="p-2 border">
                    <Switch size="small" checkedChildren={<CheckOutlined />} unCheckedChildren={<CloseOutlined />} defaultChecked />
                    </Col>
                <Col xs={5} sm={8} md={8} lg={8} xl={8} className="p-2 border">
                    <Switch size="small" checkedChildren={<CheckOutlined />} unCheckedChildren={<CloseOutlined />} defaultChecked />
                </Col>
                <Col xs={5} sm={7} md={3} lg={3} xl={4} className="p-2 border">
                    <Switch size="small" checkedChildren={<CheckOutlined />} unCheckedChildren={<CloseOutlined />} defaultChecked />
                </Col>
                </Row>
                {/* <Row className="w-full p-0.5  hover:bg-gray-100">
                <Col xs={2} sm={2} md={2} lg={2} xl={1} className="p-2 border">2</Col>
                <Col xs={7} sm={0} md={4} lg={4} xl={4} className="p-2 border">Users</Col>
                <Col xs={5} sm={7} md={7} lg={7} xl={7} className="p-2 border">
                    <Switch checkedChildren={<CheckOutlined />} unCheckedChildren={<CloseOutlined />} defaultChecked />
                    </Col>
                <Col xs={5} sm={8} md={8} lg={8} xl={8} className="p-2 border">
                    <Switch checkedChildren={<CheckOutlined />} unCheckedChildren={<CloseOutlined />} defaultChecked />
                </Col>
                <Col xs={5} sm={7} md={3} lg={3} xl={4} className="p-2 border">
                    <Switch checkedChildren={<CheckOutlined />} unCheckedChildren={<CloseOutlined />} defaultChecked />
                </Col>
                </Row> */}
            </div>
            <div style={{display:!admin?"none":"block"}}>
                <Row className="w-full ">
                <Col xs={16}  md={16} lg={16}  className="p-2 ">
                    <p className="text-xs items-center mt-1">save changes of permission management</p>
                </Col>
                <Col xs={8} sm={8} md={8} lg={8}  className="p-2">
                    <Button className>SAVE</Button>
                </Col>
                
                </Row>
            </div>

        </div>
    )
}
export default PermissionManagement