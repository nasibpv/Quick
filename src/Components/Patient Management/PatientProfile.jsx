import { Col, Row, List,Timeline,Button  } from 'antd';
import {FileDoneOutlined,MoreOutlined,FileAddOutlined} from '@ant-design/icons'
// import Contents from '../Content';
import { useNavigate, useParams } from 'react-router';
// CloudDownloadOutlined
// import { PDFDownloadLink } from '@react-pdf/renderer';
import { useEffect, useRef } from 'react';
 
function PatientProfile(){
    const prop =useParams()
    const myRef=useRef(null)
    const location=useNavigate()
    console.log(prop);
    
    const style = {
        // background: '#0092ff',
        padding: '8px 0',
      };
      
    const handleDelete=()=>{
        window.history.back()
        alert('deleted  datas')
    }
      useEffect(()=>{
        if(myRef.current){
            myRef.current.focus()

        }
      },[])
    return (
        <div className=''>
            <div >
                <div className='flex justify-end gap-2'>
                    <Button  className='Ghost ' onClick={()=>location(`/editpatient/${prop.id}`)}>Edit</Button>
                    <Button onClick={handleDelete}>Delete</Button>
                </div>
                {/* <Button.Group>
  <Button type="primary">Save</Button>
  <Button>Cancel</Button>
</Button.Group> */}

                 
                 <Row gutter={13} className=''  >
                   
                    <Col className="gutter-row grid gap-2 " sm={14} xs={24}>
                        <div className='p-3 shadow-md rounded-md w-full' >
                            <div className='flex justify-between items-center gap-1 border-b'>
                                <img src="#" alt="" className='bg-yellow-100 rounded-3xl ' width={40} height={40}/>
                                <div className='text-start w-full'>
                                    <h4>AAA</h4>
                                    <p>aa</p>
                                </div>
                                <div>
                                    <a href="">1</a>
                                    <a href="">1</a>
                                </div>
                            </div>
                            <div style={{overflowY:'scroll', maxHeight:'170px', overflowX:'hidden'}}>
                                <Row
                                gutter={{xs: 6,sm: 12,md: 24,lg: 32,}}
                                >
                                <Col className="gutter-row w-full"   xs={6}>
                                    <div style={style}>
                                        <p className='text-gray-200 text-xs h-10'>Date of brith</p>
                                        <p>10-0-2012</p>
                                    </div>
                                </Col>
                                <Col className="gutter-row"   xs={6}>
                                    <div style={style}>
                                    <p className='text-gray-200 text-xs h-10'>Address</p>
                                    <p>Abc</p>
                                    </div>
                                </Col>
                                <Col className="gutter-row"   xs={6}>
                                    <div style={style}>                               
                                        <p className='text-gray-200 text-xs h-10'>Status</p>
                                        <p>Null</p>
                                    </div>
                                </Col>
                                <Col className="gutter-row"   xs={6}>
                                    <div style={style}>
                                    <p className='text-gray-200 text-xs h-10'>Inusurence</p>
                                    <p>Null</p>
                                    </div>
                                </Col>
                                </Row>
                                
                                <Row
                                gutter={{xs: 6,sm: 12,md: 24,lg: 32,}}
                                >
                                <Col className="gutter-row w-full"   xs={6}>
                                    <div style={style}>
                                        <p className='text-gray-200 text-xs h-10'>Social Number</p>
                                        <p>102012</p>
                                    </div>
                                </Col>
                                <Col className="gutter-row"   xs={6}>
                                    <div style={style}>
                                    <p className='text-gray-200 text-xs h-10'>Phone Number</p>
                                    <p>100201201</p>
                                    </div>
                                </Col>
                                <Col className="gutter-row"   xs={6}>
                                    <div style={style}>                               
                                        <p className='text-gray-200 text-xs h-10'>Gender</p>
                                        <p>Male</p>
                                    </div>
                                </Col>
                                <Col className="gutter-row"   xs={6}>
                                    <div style={style}>
                                    <p className='text-gray-200 text-xs h-10'>Registered On</p>
                                    <p>10,Jan2012</p>
                                    </div>
                                </Col>
                                </Row>
                            </div>
                        </div>
                        <div className='p-3 shadow-md rounded-md w-full' >
                        <div className='flex justify-between items-center gap-1 border-b'>
                                <div className='w-full'>
                                <Row className="p-2 text-center "  >
                            
                            <Col span={14}  className="p-1 ">
                            
                            </Col>
                            <Col span={10} className="p-1 ">
                            <a href="#" className='text-xs text-blue-500 hover:text-blue-300 w-full'><FileAddOutlined />Add Appointmrnt </a>                                

                            </Col>
                            </Row> 
                                </div>
                                
                            </div>
                        <div style={{overflowY:'scroll',maxHeight:'200px',overflowX:'hidden',paddingTop:15}}>
                        <Timeline>
                                    <div className='timeline'>
                                        <Row
                                        gutter={{xs: 24,sm: 24,md: 24,lg: 32,}}
                                        >
                                        <Col className="gutter-row w-full"   xs={6}>
                                            <div style={style}>
                                                <p className='text-gray-200 text-xs h-10'>Date </p>
                                                <p>10-0-2012</p>
                                            </div>
                                        </Col>
                                        <Col className="gutter-row"   xs={6}>
                                            <div style={style}>
                                            <p className='text-gray-200 text-xs h-10'>Symptoms</p>
                                            <p>10-0-2012</p>
                                            </div>
                                        </Col>
                                        <Col className="gutter-row"   xs={6}>
                                            <div style={style}>                               
                                                <p className='text-gray-200 text-xs h-10'>Category</p>
                                                <p>Foolow-up</p>
                                            </div>
                                        </Col>
                                        <Col className="gutter-row"   xs={6}>
                                            <div style={style}>
                                            <p className='text-gray-200 text-xs h-10'>Doctor</p>
                                            <p>Dr.Albert</p>
                                            </div>
                                        </Col>
                                        </Row>
                                    </div>
                                    <div className='timeline'>
                                        <Row
                            gutter={{xs: 24,sm: 24,md: 24,lg: 32,}}
                            >
                            <Col className="gutter-row w-full"   xs={6}>
                                <div style={style}>
                                    <p className='text-gray-200 text-xs h-10'>Date of brith</p>
                                    <p>10-0-2012</p>
                                </div>
                            </Col>
                            <Col className="gutter-row"   xs={6}>
                                <div style={style}>
                                <p className='text-gray-200 text-xs h-10'>Address</p>
                                <p>10-0-2012</p>
                                </div>
                            </Col>
                            <Col className="gutter-row"   xs={6}>
                                <div style={style}>                               
                                    <p className='text-gray-200 text-xs h-10'>Date of brith</p>
                                    <p>10-0-2012</p>
                                </div>
                            </Col>
                            <Col className="gutter-row"   xs={6}>
                                <div style={style}>
                                <p className='text-gray-200 text-xs h-10'>Date of brith</p>
                                <p>10-0-2012</p>
                                </div>
                            </Col>
                            </Row>
                                    </div>
                                    <div className='timeline'>
                                        <Row
                                        gutter={{xs: 24,sm: 24,md: 24,lg: 32,}}
                                        >
                                        <Col className="gutter-row w-full"   xs={6}>
                                            <div style={style}>
                                                <p className='text-gray-200 text-xs h-10'>Date of brith</p>
                                                <p>10-0-2012</p>
                                            </div>
                                        </Col>
                                        <Col className="gutter-row"   xs={6}>
                                            <div style={style}>
                                            <p className='text-gray-200 text-xs h-10'>Address</p>
                                            <p>10-0-2012</p>
                                            </div>
                                        </Col>
                                        <Col className="gutter-row"   xs={6}>
                                            <div style={style}>                               
                                                <p className='text-gray-200 text-xs h-10'>Date of brith</p>
                                                <p>10-0-2012</p>
                                            </div>
                                        </Col>
                                        <Col className="gutter-row"   xs={6}>
                                            <div style={style}>
                                            <p className='text-gray-200 text-xs h-10'>Date of brith</p>
                                            <p>10-0-2012</p>
                                            </div>
                                        </Col>
                                        </Row>
                                    </div>
                                    <div className='timeline'>
                                        <Row
                            gutter={{xs: 24,sm: 24,md: 24,lg: 32,}}
                            >
                            <Col className="gutter-row w-full"   xs={6}>
                                <div style={style}>
                                    <p className='text-gray-200 text-xs h-10'>Date of brith</p>
                                    <p>10-0-2012</p>
                                </div>
                            </Col>
                            <Col className="gutter-row"   xs={6}>
                                <div style={style}>
                                <p className='text-gray-200 text-xs h-10'>Address</p>
                                <p>10-0-2012</p>
                                </div>
                            </Col>
                            <Col className="gutter-row"   xs={6}>
                                <div style={style}>                               
                                    <p className='text-gray-200 text-xs h-10'>Date of brith</p>
                                    <p>10-0-2012</p>
                                </div>
                            </Col>
                            <Col className="gutter-row"   xs={6}>
                                <div style={style}>
                                <p className='text-gray-200 text-xs h-10'>Date of brith</p>
                                <p>10-0-2012</p>
                                </div>
                            </Col>
                            </Row>
                                    </div>
                        </Timeline>
                        </div>
                        </div>
                    </Col>
                    <Col className="gutter-row grid gap-2 " sm={10} xs={24}>
                        <div  className=' borde shadow-md p-2.5 rounded-md'>
                                <List>  
                                    <div className='flex justify-between gap-3'>
                                        <h5>Documents</h5>
                                        <a href="" className='text-blue-500 hover:text-blue-300'><FileAddOutlined />Add File</a>
                                    </div>    
                                        
                                        <List.Item>
                                        <div className='flex justify-between w-full'>
                                            <p className='text-sm'><FileDoneOutlined />1.pdf</p>
                                            <div className='flex gap-2'> 
                                                <p>pdf</p>                                        
                                            <a href="#"><MoreOutlined /></a>
                                            </div>
                                        </div>
                                        </List.Item> 
                                        <List.Item>
                                        <div className='flex justify-between w-full'>
                                            <p className='text-sm'><FileDoneOutlined />2.pdf</p>
                                            <div className='flex gap-2'> 
                                                <p>pdf</p>                                        
                                            <a href="#"><MoreOutlined /></a>
                                            </div>
                                        </div>
                                        </List.Item> 
                                        <List.Item>
                                        <div className='flex justify-between w-full'>
                                            <p className='text-sm'><FileDoneOutlined />3.pdf</p>
                                            <div className='flex gap-2'> 
                                                <p>pdf</p>                                        
                                            <a href="#"><MoreOutlined /></a>
                                            </div>
                                        </div>
                                        </List.Item> 
                                        
                                       
                                        
                                    <div className='text-center'>
                                        <a href="#" className='text-xs'>See More</a>
                                    </div>
                                </List>                         
                        </div>
                        <div  className=' borde shadow-md p-2.5 rounded-md'>
                                <List>  
                                    <div className='flex justify-between gap-3'>
                                        <h5>Medical Recordes</h5>
                                        <a href="" className='text-blue-500 hover:text-blue-300'><FileAddOutlined />Add File</a>
                                        </div>    
                                        <List.Item>
                                        <div className='flex justify-between w-full'>
                                            <p className='text-sm'><FileDoneOutlined />3.pdf</p>
                                            <div className='flex gap-2'> 
                                            <a href="#"><MoreOutlined /></a>
                                            </div>
                                        </div>
                                        </List.Item> 
                                        
                                        
                                        {/* <List.Item>
                                        <div className='flex justify-between w-full'>
                                            <p className='text-sm'><FileDoneOutlined />.pdf</p>
                                            <div className='flex gap-2'> 
                                            <a href=""><Contents/></a>
                                            <a href="#"><MoreOutlined /></a>
                                            </div>
                                        </div>
                                        </List.Item>  */}
                                        
                                        <div className='text-center'>
                                            <a href="#" className='text-xs'>See More</a>
                                        </div>
                                </List>                         
                        </div>
                        
                    </Col>
                </Row>
            </div>
        </div>
    )
}
export default PatientProfile