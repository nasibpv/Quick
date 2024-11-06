// import { useQuery } from '@tanstack/react-query';
import { Input, Row, Col } from 'antd';
// import axios from 'axios';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Patients(){
  const [dataSource, setDataSource] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState('');
  // const fetchUsers = async () => {
  //   const response = await axios.get('http://localhost:3004/patients');
  //   const data = await response.json();
  //   console.log(data);
    
  //   if (!data) {
  //     console.log('error');
  //   }
  //   return data;
  // };
  // const UsersList = () => {
  //   const {  error, isLoading } = useQuery(['users'], fetchUsers);
  
  //   if (isLoading) {
  //    console.log('loading');
     
  //   }
  //   if (error) {
  //     // return <div>Error: {error.message}</div>;
  //     console.log(error.message);
  //   }
  // }
  useEffect(() => {
    const fetchSource = async () => {
      const result = await fetch('http://localhost:3004/patients');
      const data = await result.json();
      console.log(data);
      if(data.status){
        setDataSource(data.data);
        setFilteredData(data.data)// Initialize filtered data
      }
      else{
        console.log('api error ');
        
      }
    
    };
    fetchSource();
  }, []);

  useEffect(() => {
    // Filter data whenever the search term changes
    const results = dataSource.filter(item => 
      item.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredData(results);
  }, [search, dataSource]);

    return (
        <div >
          <div className="flex justify-between w-full mb-2 items-center">
                <h4 className="">Users Details</h4>
                <Input type="text" className="" style={{width:'40%'}}  placeholder="Search" value={search} onChange={(e)=>setSearch(e.target.value)}/>
            </div>
            <div>
              {/* <div className="pt-2">
                 <Table dataSource={dataSource} columns={columns} className="" />;
              </div> */}
              <div className="">
                  <div>
                   <div className="">

                        <Row className="w-full border p-2 bg-gray-300"  >
                          <Col xs={2} sm={2} md={2} lg={2} xl={2} className="p-2 border">
                            id
                          </Col>
                          <Col xs={11} sm={11} md={7} lg={7} xl={7} className="p-2 border">
                          UH ID 
                          </Col>
                          <Col xs={11} sm={11} md={7} lg={7} xl={7} className="p-2 border">
                            Name
                          </Col>
                          <Col xs={0} sm={0} md={8} lg={8} xl={8} className="p-2 border">
                            Phone Number
                          </Col>
                        </Row>
                       {
                        filteredData?.map(item=>(
                          <Link key={item.key} to={`/patient/${item.id}`}>
                            <Row key={item.key} className="w-full border p-2 hover:bg-gray-100" >
                              <Col xs={2} sm={2} md={2} lg={2} xl={2} className="p-2 border ">
                              {item.id}
                            </Col>
                            <Col xs={11} sm={11} md={7} lg={7} xl={7} className="p-2 border">
                              12345
                            </Col>
                            <Col xs={11} sm={11} md={7} lg={7} xl={7} className="p-2 border">
                              {item.name}
                            </Col>
                            <Col xs={0} sm={0} md={8} lg={8} xl={8} className="p-2 border">
                              {item.phone}
                            </Col>
                            </Row>
                          </Link>
                         
                        ))
                       }

                   </div>
                  </div>
              </div>
            </div>
        </div>
    )
}
export default Patients