// LineChart.js
import { Divider, List } from 'antd';
import { Link } from 'react-router-dom';

const data = [
  {
    Key:1,
    label:<Link to={'/'}>Home</Link>
  },
  {
    Key:2,
    label:<Link to={'/change_password'}>Password Change</Link>
  },
  {
    Key:3,
    label:<Link to={'/permission-management'}>Permission Management</Link>
  },
  // {
  //   Key:4,
  //   label:<Link to={'/'}>Home</Link>
  // },
];

const Settings = () => (
 <div>
 
 <div style={{minHeight:'350px'}}>
 <Divider orientation="left">Settings</Divider>
    <List
      size="small"
      // header={<div>Setting</div>}
      // footer={<div>Footer</div>}
      bordered
      className='w-96'
      dataSource={data} // Use dataSource to pass the data
      renderItem={item => <List.Item>{item.label}</List.Item>}
    />
  </div>
  </div>
);



export default Settings