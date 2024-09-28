import { Button } from "antd"
import { useNavigate } from "react-router"
import { Table,Input } from 'antd';
import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import allData from "../../Action/Action";

function Users(){
  const [dataSource,setDataSource]=useState([])
  // const dispatch=useDispatch()
  const [search,setSearch]=useState('')
  console.log(search);

  const handleSearch = (query) => {
    // Dummy data to search through

    // Filter the data based on the query
    const filteredResults = query.filter(item => 
      item.name.toLowerCase().includes(search.toLowerCase())
    );
    
    setDataSource(filteredResults)
    
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
// const count = useSelector((state) => state.count);
// console.log(count);

  useEffect(() => {
    const dataSource=async()=>{
      const result=await fetch('/data.json')
      const data=await result.json()
      handleSearch(data.dataSource)
      // dispatch(allData())
  }
    dataSource()
  })
const location =useNavigate()
    return (
        <div >
          <div className="w-full flex justify-end aline-end p-1">
            <Input type="text" className="" style={{width:'25%'}}  placeholder="Search" value={search} onChange={(e)=>setSearch(e.target.value)}/>
          </div>
            <div className="flex justify-between w-full items-center">
                <h4 className="">Users Details</h4>
                <Button  onClick={()=> location('/products/addproduct')} className="bg-primary" >NEW</Button>
            </div>
            <div>
              <div className="pt-2">
                 <Table dataSource={dataSource} columns={columns} className="" />;
              </div>
            </div>
        </div>
    )
}
export default Users