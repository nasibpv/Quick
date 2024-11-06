import { DownOutlined } from '@ant-design/icons';
import { Button, Dropdown, Space, Typography } from 'antd';
import {  Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import { UserOutlined,PhoneOutlined, VerifiedOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';

const items = [
                {
                    key: '1',
                    label: 'Dermatologist',
                },
                {
                    key: '2',
                    label: 'Neuro',
                },
                {
                    key: '3',
                    label: 'Item 3',
                },
            ];

function Doctors(){
    const [doctors,setDoctors]=useState([])
    

useEffect(()=>{
    const fetchData= async()=>{
        const result =await fetch('http://localhost:3004/doctors')
        const data=await result.json()
        if(data){
            setDoctors(data.data)
        }

    }
    fetchData()
},[])
    return(
        <div>
            <div className='flex justify-end '>
                <Dropdown
                    menu={{
                    items,
                    selectable: true,
                    defaultSelectedKeys: [''],
                    }}>
                    <Typography.Link>
                    <Space>
                        Filter
                        <DownOutlined />
                    </Space>
                    </Typography.Link>
                </Dropdown>
            </div>
            <div className='pt-1'>
                <div>
                        <Row gutter={10} className='gap-2'>
                            {
                                doctors?
                                doctors.map(items=>(
                                    <Col key={items.id} >
                                    <div className='bg-gray-50 transform hover:scale-105 transition-transform duration-300 hover:shadow-md border rounded-xl h-auto overflow-hidden ' >
                                        {
                                            items.verification?
                                            <div className='flex items-center pt-1 justify-center  bg-blue-300 text-white fixed -top-1 -left-4   w-12 transform -rotate-45 '>
                                            <p className='text-xs p-0.5'><VerifiedOutlined twoToneColor="blue"/></p>
                                        </div>
                                        :""
                                        }
                                        
                                    <Link to={`/d-profile/${items.id}`}>
                                    <div className='p-2 'style={{borderBottom:'1px solid lightgray '}}>
                                        <div className='w-full  text-center ps-2 pe-2'>
                                            <div className='flex justify-center  items-center w-full pb-5'>
                                                <img  alt="" width={60} height={60} className='bg-primery rounded-full borderd ' style={{backgroundColor:'light'}}/>   
                                            </div>
                                            <h5 className='pt-1'>{items.name}</h5>
                                            <p className=' rounded ps-0.5 pe-0.5' style={{background:'lightblue'}}>{items.specialization}</p>
                                        </div>
                                    </div>
                                    </Link>
                                        <div className='p-1  flex gap-.5 text-sm justify-between '>
                                            <Button className='p-2 ' style={{fontSize:'9px'}}><UserOutlined/>Availability</Button>
                                            <Button className='p-2 ' style={{fontSize:'9px'}}><PhoneOutlined className='rotate-90 p-0 m-0'/>Make a Call</Button>
                                        </div>
                                    </div>
                                </Col>
                                ))
                                :''
                            }
                    {/* <Col >
                        <div className='transform hover:scale-105 transition-transform duration-300 hover:shadow-md border rounded-xl h-auto ' >
                            
                        <Link to={'/d-profile'}>
                        <div className='p-2'style={{borderBottom:'1px solid lightgray '}}>
                            <div className='w-full  text-center ps-2 pe-2'>
                                <div className='flex justify-center  items-center w-full pb-5'>
                                    <img  alt="" width={60} height={60} className='bg-primery rounded-full borderd ' style={{backgroundColor:'light'}}/>   
                                </div>
                                <h5 className='pt-1'>Dr. Albert</h5>
                                <p className=' rounded ps-0.5 pe-0.5' style={{background:'lightblue'}}>Dermatologist</p>
                            </div>
                        </div>
                        </Link>
                            <div className='p-1  flex gap-1 text-sm justify-between '>
                                <Button href='/' className='p-2 text-xs'><UserOutlined/>Availability</Button>
                                <Button href='/' className='p-2 text-xs'><PhoneOutlined className='rotate-90'/>Make a Call</Button>
                            </div>
                        </div>
                    </Col> */}
                    {/* <Col >
                        <div className='transform hover:scale-105 transition-transform duration-300 hover:shadow-md border rounded-xl h-auto overflow-hidden ' >
                            <div className='flex items-center pt-1 justify-center  bg-blue-300 text-white fixed -top-1 -left-4   w-12 transform -rotate-45 '>
                                <p className='text-xs p-0.5'><VerifiedOutlined twoToneColor="blue"/></p>
                            </div>
                        <Link to={'/d-profile'}>
                        <div className='p-2'style={{borderBottom:'1px solid lightgray '}}>
                            <div className='w-full  text-center ps-2 pe-2'>
                                <div className='flex justify-center  items-center w-full pb-5'>
                                    <img  alt="" width={60} height={60} className='bg-primery rounded-full borderd ' style={{backgroundColor:'light'}}/>   
                                </div>
                                <h5 className='pt-1'>Dr. Albert</h5>
                                <p className=' rounded ps-0.5 pe-0.5' style={{background:'lightblue'}}>Dermatologist</p>
                            </div>
                        </div>
                        </Link>
                            <div className='p-1  flex gap-1 text-sm justify-between '>
                                <Button className='p-2 text-xs'><UserOutlined/>Availability</Button>
                                <Button className='p-2 text-xs'><PhoneOutlined className='rotate-90'/>Make a Call</Button>
                            </div>
                        </div>
                    </Col> */}
                    {/* <Col >
                        <div className='transform hover:scale-105 transition-transform duration-300 hover:shadow-md border rounded-xl h-auto ' >
                            
                        <Link to={'/d-profile'}>
                        <div className='p-2'style={{borderBottom:'1px solid lightgray '}}>
                            <div className='w-full  text-center ps-2 pe-2'>
                                <div className='flex justify-center  items-center w-full pb-5'>
                                    <img  alt="" width={60} height={60} className='bg-primery rounded-full borderd ' style={{backgroundColor:'light'}}/>   
                                </div>
                                <h5 className='pt-1'>Dr. Albert</h5>
                                <p className=' rounded ps-0.5 pe-0.5' style={{background:'lightblue'}}>Dermatologist</p>
                            </div>
                        </div>
                        </Link>
                            <div className='p-1  flex gap-1 text-sm justify-between '>
                                <Button href='/' className='p-2 text-xs'><UserOutlined/>Availability</Button>
                                <Button href='/' className='p-2 text-xs'><PhoneOutlined className='rotate-90'/>Make a Call</Button>
                            </div>
                        </div>
                    </Col>
                    <Col >
                        <div className='transform hover:scale-105 transition-transform duration-300 hover:shadow-md border rounded-xl h-auto ' >
                            
                        <Link to={'/d-profile'}>
                        <div className='p-2'style={{borderBottom:'1px solid lightgray '}}>
                            <div className='w-full  text-center ps-2 pe-2'>
                                <div className='flex justify-center  items-center w-full pb-5'>
                                    <img  alt="" width={60} height={60} className='bg-primery rounded-full borderd ' style={{backgroundColor:'light'}}/>   
                                </div>
                                <h5 className='pt-1'>Dr. Albert</h5>
                                <p className=' rounded ps-0.5 pe-0.5' style={{background:'lightblue'}}>Dermatologist</p>
                            </div>
                        </div>
                        </Link>
                            <div className='p-1  flex gap-1 text-sm justify-between '>
                                <Button href='/' className='p-2 text-xs'><UserOutlined/>Availability</Button>
                                <Button href='/' className='p-2 text-xs'><PhoneOutlined className='rotate-90'/>Make a Call</Button>
                            </div>
                        </div>
                    </Col> */}
                   
                    </Row>
                </div>
            </div>
        </div>
    )
}
export default Doctors