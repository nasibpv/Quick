import  { useState } from 'react';
import {
  DesktopOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,

  
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme,Button} from 'antd';
import SubMenu from 'antd/es/menu/SubMenu';
import {Routes,Route,useLocation, Link} from 'react-router-dom';
import About from './About';
import Contents from './Content'
import DashBoard from './DashBoard';
import Users from './User Management/Users';
import Add_Users from './User Management/Add_Users';
import Edit_Users from './User Management/Edit_Users';
import Delete_Users from './User Management/Delete_Users';
import Patients from './Patient Management/Patients';

const { Header, Content,  Sider } = Layout;

const Home = () => {
  const [collapsed, setCollapsed] = useState(false);
  const path=useLocation()
  
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  
  const removeFirstLetter = (str) => {
    return str.slice(1); 
  };
  const handleClick = () => {
    // Set isActive to false when the item is clicked
    setCollapsed(true);
  };
  const newString = removeFirstLetter(path.pathname);

  const menuItem = [
    {
      name:'Content',
      icon:<UserOutlined/>,
      path:'content',
      key:11
    },
    {
      name:'About',
      icon:<PieChartOutlined/>,
      path:'about',
      key:12
    },
  ]
  const subItems = [
    {
      subName:'Users Management',
      key:105,
      subItems:[
        {
          name:'Users',
          icon:<TeamOutlined/>,
          path:'users',
          key:501
        },
        {
          name:'Edit Users',
          icon:<TeamOutlined/>,
          path:'editusers',
          key:502
        },
        {
          name:'Delete Users',
          icon:<TeamOutlined/>,
          path:'deleteusers',
          key:503
        },
      ]
    },
    {
      subName:'Patient Management',
      key:106,
      subItems:[
        {
          name:'Patient',
          icon:<TeamOutlined/>,
          path:'patients',
          key:601
        },
      ]
    },
  ]
  const siderStyle = {
    overflow: 'auto',
    height: '100vh',
    position: 'fixed',
    insetInlineStart: 0,
    top: 0,
    bottom: 0,
    scrollbarWidth: 'thin',
    scrollbarColor: 'unset',
  };
  
  return (
    <Layout style={{minHeight: '100vh',}}>
      <Sider style={siderStyle}  collapsed={collapsed}  >
        <div className="demo-logo-vertical " />
        <Menu
          theme='dark'
          mode="inline"
          defaultSelectedKeys={['0']}
          style={{ height: '100%', borderRight: 0,padding:0 }}
        >
           <Menu.Item key={0} icon={<DesktopOutlined/>}>
          <Link to={'/'}>DashBoard</Link>
          </Menu.Item>
          {
          subItems?.map((subItem) => (
                <SubMenu title={subItem.subName} key={subItem.key} icon={<UserOutlined/>} >
                        {
                        subItem.subItems.map((item) => (
                          <Menu.Item key={item.key} icon={item.icon} style={{paddingLeft:35}} >
                          <Link to={item.path} onClick={handleClick}>{item.name}</Link>
                    </Menu.Item>
                        ))
                        }
                </SubMenu>
            ))
          }     
           {
            menuItem?.map((item)=>(
              <Menu.Item key={item.key} icon={item.icon}>
          <Link to={item.path} onClick={handleClick}>{item.name}</Link>
          </Menu.Item>
            ))
          } 
        </Menu>     
      </Sider>
      <Layout style={{marginInlineStart:collapsed?80:200}}>
      <Header style={{ padding: 0, background: colorBgContainer,display:'flex' }}>        
     <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
          <div className='w-full pe-5 flex justify-between items-center'>
              <a href='/'>Quick</a> 
              <a href="/login">LogOut</a>
          </div>
        </Header>
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            {/* <Breadcrumb.Item>Product Management</Breadcrumb.Item> */}
            <Breadcrumb.Item> {newString} </Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 15,
              maxHeight: 492,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
              overflowY:'auto'
            }}
          >
            <Routes>
              <Route path='/' element={<DashBoard/>}></Route>
              <Route path='/about' element={<About/>}></Route>
              <Route path='/content' element={<Contents/>}></Route>
              <Route path='/users' element={<Users/>}></Route>
              <Route path='/users/adduser' element={<Add_Users/>}></Route>
              <Route path='editusers' element={<Edit_Users/>}></Route>
              <Route path='/deleteusers' element={<Delete_Users/>}></Route>
              <Route path='/patients' element={<Patients/>}></Route>
            </Routes>
          </div>
        </Content>
        {/* <Footer
          style={{
            textAlign: 'center',
            padding:'5px 30px'
          }}
        >
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer> */}
      </Layout>
    </Layout>
  );
};
export default Home;