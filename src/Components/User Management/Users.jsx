import { Input, Row, Col, Button } from 'antd';
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router';

function Users() {
  const [dataSource, setDataSource] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState('');
  const location=useNavigate()

  useEffect(() => {
    const fetchSource = async () => {
      const result = await fetch('/data.json');
      const data = await result.json();
      setDataSource(data.dataSource);
      setFilteredData(data.dataSource); // Initialize filtered data
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
    <div>
      <div className="flex justify-between w-full mb-2 items-center">
        <h4>Users Details</h4>
        <Input
          type="text"
          style={{ width: '40%' }}
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div>
        <Row className="w-full border p-0.5 bg-gray-300">
          <Col xs={2} sm={2} md={2} lg={2} xl={1} className="p-2 border">ID</Col>
          <Col xs={0} sm={0} md={4} lg={4} xl={4} className="p-2 border">UH ID</Col>
          <Col xs={7} sm={7} md={7} lg={7} xl={7} className="p-2 border">Name</Col>
          <Col xs={8} sm={8} md={8} lg={8} xl={8} className="p-2 border">Phone Number</Col>
          <Col xs={7} sm={7} md={3} lg={3} xl={4} className="p-2 border"></Col>
        </Row>
        {filteredData.map(item => (
          <Row key={item.id} className="w-full p-0.5  hover:bg-gray-100">
            <Col xs={2} sm={2} md={2} lg={2} xl={1} className="p-2 border">{item.id}</Col>
            <Col xs={0} sm={0} md={4} lg={4} xl={4} className="p-2 border">{item.id}</Col>
            <Col xs={7} sm={7} md={7} lg={7} xl={7} className="p-2 border">{item.name}</Col>
            <Col xs={8} sm={8} md={8} lg={8} xl={8} className="p-2 border">{item.phone}</Col>
            <Col xs={7} sm={7} md={3} lg={3} xl={4} className="p-2 border text-center"><Button type='link' onClick={()=>location(`/user/${item.key}`)}>View</Button></Col>
          </Row>
        ))}
      </div>
    </div>
  );
}

export default Users;
