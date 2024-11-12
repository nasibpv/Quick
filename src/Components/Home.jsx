import  { useState } from 'react';
import {
  DesktopOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  SettingOutlined,
  // UserDeleteOutlined,
  
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme,Button} from 'antd';
// import SubMenu from 'antd/es/menu/SubMenu';
import {Routes,Route,useLocation, Link} from 'react-router-dom';
import About from './About';
import DashBoard from './DashBoard';
import Users from './User Management/Users';
import Add_Users from './User Management/Add_Users';
import Edit_Users from './User Management/Edit_Users';
import Patients from './Patient Management/Patients';
import Appointment from './Appointment';
import Profile from './Profile';
import PatientProfile from './Patient Management/PatientProfile';
import Add_Patient from './Patient Management/Add_Patients';
import Doctor_Profiles from './Doctor Management/Doctor_Profiles';
import Doctors from './Doctor Management/Doctors';
import Settings from './Settings/Settings';
import Edit_patients from './Patient Management/Edit_patients';
import Master from './User Management/Master';
import UserDetail from './User Management/UserDetail';
import PasswordChange from './Settings/PasswordChange';
import PermissionManagement from './Settings/PermissionManagement';
// import Edit_patients from './Patient Management/Edit_patients';

const { Header, Content,  Sider } = Layout;

const Home = () => {
  const [collapsed, setCollapsed] = useState(true);
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

  // const menuItem = [
    
  //   {
  //     name:'About',
  //     icon:<PieChartOutlined/>,
  //     path:'about',
  //     key:12
  //   },
  // ]

  // const subItems = [
  //   {
  //     subName:'Users Management',
  //     key:105,
  //     subItems:[
  //       {
  //         name:'Users',
  //         icon:<TeamOutlined/>,
  //         path:'users',
  //         key:501
  //       },
  //       {
  //         name:'Edit Users',
  //         icon:<TeamOutlined/>,
  //         path:'editusers',
  //         key:502
  //       },
  //       {
  //         name:'Delete Users',
  //         icon:<TeamOutlined/>,
  //         path:'deleteusers',
  //         key:503
  //       },
  //     ]
  //   },
  //   {
  //     subName:'Patient Management',
  //     key:106,
  //     subItems:[
  //       {
  //         name:'Patient',
  //         icon:<TeamOutlined/>,
  //         path:'patients',
  //         key:601
  //       },
  //     ]
  //   },
  //   {
  //     subName:'Doctor Management',
  //     key:107,
  //     subItems:[
  //       {
  //         name:'Doctors',
  //         icon:<TeamOutlined/>,
  //         path:'doctorslist',
  //         key:602
  //       },
  //     ]
  //   },
   
  // ]
  const menuItems = [
    {
      key: 10.1,
      icon: <DesktopOutlined />,
      label: <Link to="/" onClick={handleClick}>DashBoard</Link>,
    },
    {
      key: 105,
      label: 'Users Management',
      icon: <UserOutlined />,
      children: [
        {
          key: 501,
          icon: <TeamOutlined />,
          label: <Link to="/users" onClick={handleClick}>Users</Link>,
        },
        {
          key: 502,
          icon: <TeamOutlined />,
          label: <Link to="/adduser" onClick={handleClick}>Add Users</Link>,
        },
        {
          key: 503,
          icon: <TeamOutlined />,
          label: <Link to="/master" onClick={handleClick}>Master</Link>,
        },
        
      ],
    },
    {
      key: 106,
      label: 'Patient Management',
      icon: <UserOutlined />,
      children: [
        {
          key: 601,
          icon: <TeamOutlined />,
          label: <Link to="/patients" onClick={handleClick}>Patients</Link>,
        },
        {
          key: 608,
          icon: <TeamOutlined />,
          label: <Link to="addpatient" onClick={handleClick}>Add Patient</Link>,
        },
      ],
    },
    {
      key: 107,
      label: 'Doctor Management',
      icon: <UserOutlined />,
      children: [
        {
          key: 602,
          icon: <TeamOutlined />,
          label: <Link to="/doctorslist" onClick={handleClick}>Doctors</Link>,
        },
      ],
    },
    // {
    //   key: 108,
    //   label: 'Reporting ',
    //   icon: <UserOutlined />,
    //   children: [
    //     {
    //       key: 511,
    //       icon: <TeamOutlined />,
    //       label: <Link to="/patients Report" onClick={handleClick}>Users</Link>,
    //     },
    //     {
    //       key: 512,
    //       icon: <TeamOutlined />,
    //       label: <Link to="/doctor report" onClick={handleClick}>Edit Users</Link>,
    //     },
    //     {
    //       key: 513,
    //       icon: <UserDeleteOutlined />,
    //       label: <Link to="/" onClick={handleClick}>Delete Users</Link>,
    //     },
    //   ],
    // },
    {
      key: 12,
      icon: <PieChartOutlined />,
      label: <Link to="/about" onClick={handleClick}>About</Link>,
    },
    {
      key: 13,
      icon: <SettingOutlined />,
      label: <Link to="/settings" onClick={handleClick}>Settings</Link>,
    },
    
  ];
  
  const siderStyle = {
    overflow: 'auto',
    height: '100vh',
    // position: 'fixed',
    insetInlineStart: 0,
    top: 0,
    bottom: 0,
    scrollbarWidth: 'thin',
    // scrollbarColor: 'unset',
  };
  
  return (
    <Layout style={{minHeight: '100vh',}}>
      <Sider style={siderStyle}  collapsed={collapsed}  >
        <div className="demo-logo-vertical " />
        {/* <Menu
          theme='dark'
          mode="inline"
          
          defaultSelectedKeys={['0']}
          style={{ height: '100%', borderRight: 0,padding:0}}
        >
           <Menu.Item key={0} icon={<DesktopOutlined/>} >
          <Link to={'/'} onClick={handleClick}>DashBoard</Link>
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
        </Menu>      */}
      <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={['0']}
              style={{ height: '100%', borderRight: 0, padding: 0 }}
              items={menuItems}
            />
      </Sider>
      <Layout style={{}}>
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
            margin: '0 10px',
            
          }}
        >
          <Breadcrumb
          items={[
            { title: newString }
          ]}
            style={{
              margin: '10px 0',
            }}
          >
            {/* <Breadcrumb.Item>Product Management</Breadcrumb.Item> */}
            {/* <Breadcrumb.Item> {newString} </Breadcrumb.Item> */}
          </Breadcrumb>
          <div
            style={{
              padding: 10,
              maxHeight: 510,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
              overflowY:'auto',
            }}
          >
            <Routes>
              <Route path="/*" element={<DashBoard />} />
              <Route path="/about" element={<About />} />
              <Route path="/users/*" element={<Users />} />
              <Route path='user/:id' element={<UserDetail/>}></Route>
              <Route path="/adduser" element={<Add_Users />} />
              <Route path="/master" element={<Master />} />
              <Route path="/editusers" element={<Edit_Users />} />
              <Route path="/patients" element={<Patients />} />
              <Route path="/doctorslist" element={<Doctors />} />
              <Route path="/appointment" element={<Appointment />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/patient/:id" element={<PatientProfile />} />
              <Route path="/addpatient" element={<Add_Patient />} />
              <Route path="/d-profile/:id" element={<Doctor_Profiles />} />
              <Route path='settings' element={<Settings/>}></Route>
              <Route path='/change_password' element={<PasswordChange/>}></Route>
              <Route path='/permission-management' element={<PermissionManagement/>}></Route>
              <Route path='editpatient/:id' element={<Edit_patients/>}></Route>

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