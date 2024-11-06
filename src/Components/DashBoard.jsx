import { Col, Divider, Row } from 'antd';
import { Link } from "react-router-dom";
import {
    TeamOutlined,
    FormOutlined
} from '@ant-design/icons'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from 'recharts';

function DashBoard(){
    const style = {
        padding: '1px 0',
      };
      const data = [
        { name: 'Jan', Appointment: 65 },
        { name: 'Feb', Appointment: 59 },
        { name: 'Mar', Appointment: 81 },
        { name: 'Apr', Appointment: 81 },
        { name: 'May', Appointment: 56 },
        { name: 'Jun', Appointment: 84 },
        { name: 'Jul', Appointment: 59 },
        { name: 'Aug', Appointment: 30 },
        { name: 'Spe', Appointment: 20 },
        { name: 'Oct', Appointment: 40 },
        { name: 'Nov', },
        { name: 'Dec', Appointment: '' },
      ];
      const data2 = [
        { name: 'Jan', sales: 15 },
        { name: 'Feb', sales: 56 },
        { name: 'Mar', sales: 51 },
        { name: 'Apr', sales: 81 },
        { name: 'May', sales: 36 },
        { name: 'Jun', sales: 85 },
        { name: 'Jul', sales: 60 },
      ];
    return(
        <Row className="gap-2 ">
            <Divider orientation="left">DashBoard</Divider>
           <Col className='' md={16} sm={24} xs={24}>
            <div  className='mb-2'>
                
                <Row className="gap-3">
                    <Col className="gutter-row transform hover:scale-95 transition-transform duration-100" >
                    <Link to={'/appointment'} style={style}>
                                <img 
                                width={80}
                                height={80}
                                className="rounded-full border hover:border-blue-200"
                                src="https://i.postimg.cc/W4DJqNXV/pngtree-vector-receipt-icon-png-image-927096.jpg"/>
                                <h4>Appointment</h4>
                        </Link>
                    </Col>
                    <Col className="gutter-row text-center transform hover:scale-95 transition-transform duration-100" >
                        <Link to={'/doctorslist'} style={style}>
                                <img 
                                width={80}
                                height={80}
                                className="rounded-full border hover:border-blue-200"
                                src="https://i.postimg.cc/W4DJqNXV/pngtree-vector-receipt-icon-png-image-927096.jpg"/>
                                <h4>Doctors</h4>
                        </Link>
                    </Col>
                    <Col className="gutter-row text-center tranform hover:scale-95 transition-transform duration-100" >
                    <Link to={'/users'} style={style}>
                                <img 
                                width={80}
                                height={80}
                                className="rounded-full border hover:border-blue-200"
                                src="https://i.postimg.cc/W4DJqNXV/pngtree-vector-receipt-icon-png-image-927096.jpg"/>
                                <h4>Users</h4>
                        </Link>
                    </Col>
                    <Col className="gutter-row teaxt-center tranform hover:scale-95 transitioin-transform duration-100" >
                    <Link to={'/'} style={style}>
                                <img 
                                
                                width={80}
                                height={80}
                                className="rounded-full border"
                                src="https://i.postimg.cc/W4DJqNXV/pngtree-vector-receipt-icon-png-image-927096.jpg"/>
                        </Link>
                    </Col>
                </Row>
                
            </div>
            <div className='reports'>
                    <div>
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4  lg:grid-cols-4 gap-2">

                    <div className="col-span-1 rounded border border-blue-150" >
                    {/* <Link to={'/appointment'} style={style}> */}
                         <div className='p-4 min-h-[120px] bg-gray-50 rounded '>
                            <div className='flex gap-2  me-4'>
                                <div className='rounded-full  w-10 h-10 flex justify-center items-center text-blue-500 bg-blue-200'><FormOutlined /></div>
                                <div>
                                   <p className='text-sm font-bold'>2154</p>
                                   <p className='text-xs text-gray-400'>Appointment</p> 
                                </div>
                            </div>
                            <p className='text-xs mt-4 ms-2'><span className='text-blue-500'> 120</span> Today appointment</p>
                         </div>
                        {/* </Link> */}
                    </div>
                    <div className="col-span-1 rounded border border-blue-150" >
                    {/* <Link to={'/appointment'} style={style}> */}
                         <div className='p-4 min-h-[120px] bg-gray-50 rounded '>
                            <div className='flex gap-2  me-4'>
                                <div className='rounded-full  w-10 h-10 flex justify-center items-center text-blue-500 bg-blue-200'><TeamOutlined/></div>
                                <div>
                                   <p className='text-sm font-bold'>215</p>
                                   <p className='text-xs text-gray-400'>Doctors</p> 
                                </div>
                            </div>
                            <p className='text-xs mt-4 ms-2'><span className='text-blue-500'> 78</span> Today </p>
                         </div>
                        {/* </Link> */}
                    </div>
                    <div className="col-span-1 rounded border border-blue-150" >
                    {/* <Link to={'/appointment'} style={style}> */}
                         <div className='p-4 min-h-[120px] bg-gray-50 rounded '>
                            <div className='flex gap-2  me-4'>
                                <div className='rounded-full  w-10 h-10 flex justify-center items-center text-blue-500 bg-blue-200'><TeamOutlined/></div>
                                <div>
                                   <p className='text-sm font-bold'>NULL</p>
                                   <p className='text-xs text-gray-400'>NULL</p> 
                                </div>
                            </div>
                            <p className='text-xs mt-4 ms-2'><span className='text-blue-500'> 0</span> NULL</p>
                         </div>
                        {/* </Link> */}
                    </div>
                    <div className="col-span-1 rounded border border-blue-150" >
                    {/* <Link to={'/appointment'} style={style}> */}
                         <div className='p-4 min-h-[120px] bg-gray-50 rounded '>
                            <div className='flex gap-2  me-4'>
                                <div className='rounded-full  w-10 h-10 flex justify-center items-center text-blue-500 bg-blue-200'><TeamOutlined/></div>
                                <div>
                                   <p className='text-sm font-bold'>NULL</p>
                                   <p className='text-xs text-gray-400'>NULL</p> 
                                </div>
                            </div>
                            <p className='text-xs mt-4 ms-2'><span className='text-blue-500'> 0</span> NULL </p>
                         </div>
                        {/* </Link> */}
                    </div>
                    
                </div>
                    </div>
            </div> 
           </Col>
           <Col className='p-5  h-25 bg-blue-50 rounded-lg' md={7} sm={24} xs={24}>
                 <div >
                    <p>Reports </p>
                    <div>
                        <p>p </p>
                    </div>
                 </div>
           </Col>
           <Col className='p-2   bg-gray-50 rounded-lg' md={16} sm={24} xs={24}>
                 <div >
                <ResponsiveContainer width="100%" height={250} className=''>
                    <LineChart className=''>
                    <CartesianGrid strokeDasharray="1" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" data={data} dataKey="Appointment" stroke="#8884d1" activeDot={{ r: 8 }} />
                    <Line type="Monotone" data={data2} dataKey="sales" stroke="#888411" activeDot={{ r: 8 }} />
                    </LineChart>
                </ResponsiveContainer>
                 </div>
           </Col>
           <Col className='h-min[100px]' md={7} sm={24} xs={24}>
           <div className='p-2'>
                <p>1</p>
           </div>
           </Col>
                
        </Row>

    )
}
export default DashBoard