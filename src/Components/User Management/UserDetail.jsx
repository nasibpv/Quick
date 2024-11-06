import { EditOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';


function UserDetail() {
    const [isEditing, setIsEditing] = useState(false);
    const [isEditingAddress, setIsEditingAddress] = useState(false);
    const [userData, setUserData] = useState(null);
    const params = useParams();
    console.log(userData);
    

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetch('/data.json');
                const data = await result.json();
                const user = data.dataSource.find(item => item.id == params.id);
                setUserData(user);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [params.id]);

    const handleEdit = () => {
        setIsEditing(true);
    };
    const handleEditAddress = () => {
        console.log(isEditingAddress);
        
        setIsEditingAddress(true);
    };

    const handleOK = () => {
        setIsEditing(false);
        // Optionally, save the updated user data here
    };
    const handleAddress = () => {
        setIsEditingAddress(false);
        // Optionally, save the updated user data here
    };

    const handleDelete = () => {
        if (window.confirm('Are you sure you want to delete this user?')) {
            alert('Deleted user: ' + (userData ? userData.firstName : 'Unknown User'));
            window.history.back();
        }
    };

    if (!userData) {
        return <div>Loading...</div>; // Optional loading state
    }

    return (
        <div className="container grid gap-2">
            <div className="p-2 border rounded-xl">
                <div className="flex justify-between items-center">
                    <h3>Personal Information</h3>
                    <button className="text-xs p-1 rounded-xl border" onClick={handleEdit}>
                        Edit <EditOutlined />
                    </button>
                </div>

                <div className='grid grid-cols-2 gap-2 p-2'>
                    <div>
                        <input type="text" value={userData.id} disabled className='p-1' />
                    </div>
                    <div></div>
                    <div>
                        <label htmlFor="firstName">First Name:</label>
                        <input
                            type="text"
                            name='firstName'
                            value={userData.name}
                            className='p-1'
                            disabled={!isEditing}
                            onChange={(e) => setUserData({ ...userData, firstName: e.target.value })}
                        />
                    </div>
                    <div>
                        <label htmlFor="lastName">Last Name:</label>
                        <input
                            type="text"
                            name='lastName'
                            value={userData.lastName}
                            className='p-1'
                            disabled={!isEditing}
                            onChange={(e) => setUserData({ ...userData, lastName: e.target.value })}
                        />
                    </div>
                    <div>
                        <label htmlFor="firstName">First Name:</label>
                        <input
                            type="text"
                            name='email'
                            value={userData.email}
                            className='p-1'
                            disabled={!isEditing}
                            onChange={(e) => setUserData({ ...userData, firstName: e.target.value })}
                        />
                    </div>
                    <div>
                        <label htmlFor="lastName">Last Name:</label>
                        <input
                            type="text"
                            name='phoneNumber'
                            value={userData.phone}
                            className='p-1'
                            disabled={!isEditing}
                            onChange={(e) => setUserData({ ...userData, lastName: e.target.value })}
                        />
                    </div>
                    <div className=''>
                        <label htmlFor="lastName">Last Name:</label>
                        <input
                            type="text"
                            name='phoneNumber'
                            value={userData.phone}
                            className='p-1'
                            disabled={!isEditing}
                            onChange={(e) => setUserData({ ...userData, lastName: e.target.value })}
                        />
                    </div>
                </div>
                <div className='flex justify-end p-2'>
                  {isEditing && <Button onClick={handleOK} type='primary' >OK</Button>}
                </div>
            </div>

            <div className="p-2 border rounded-xl">
                <div className="flex justify-between items-center">
                    <h3>Personal Information</h3>
                    <button className="text-xs p-1 rounded-xl border" onClick={handleEditAddress}>
                        Edit <EditOutlined />
                    </button>
                </div>
                <div className='grid grid-cols-2 gap-2 p-2'>
                    <div>
                        <input type="text" value={userData.id} disabled className='p-1' />
                    </div>
                    <div></div>
                    <div>
                        <label htmlFor="firstName">First Name:</label>
                        <input
                            type="text"
                            name='firstName'
                            value={userData.name}
                            className='p-1'
                            disabled={!isEditing}
                            onChange={(e) => setUserData({ ...userData, firstName: e.target.value })}
                        />
                    </div>
                    <div>
                        <label htmlFor="lastName">Last Name:</label>
                        <input
                            type="text"
                            name='lastName'
                            value={userData.lastName}
                            className='p-1'
                            disabled={!isEditing}
                            onChange={(e) => setUserData({ ...userData, lastName: e.target.value })}
                        />
                    </div>
                    <div>
                        <label htmlFor="firstName">First Name:</label>
                        <input
                            type="text"
                            name='email'
                            value={userData.email}
                            className='p-1'
                            disabled={!isEditing}
                            onChange={(e) => setUserData({ ...userData, firstName: e.target.value })}
                        />
                    </div>
                    <div>
                        <label htmlFor="lastName">Last Name:</label>
                        <input
                            type="text"
                            name='phoneNumber'
                            value={userData.phone}
                            className='p-1'
                            disabled={!isEditing}
                            onChange={(e) => setUserData({ ...userData, lastName: e.target.value })}
                        />
                    </div>
                    <div className=''>
                        <label htmlFor="lastName">Last Name:</label>
                        <input
                            type="text"
                            name='phoneNumber'
                            value={userData.phone}
                            className='p-1'
                            disabled={!isEditing}
                            onChange={(e) => setUserData({ ...userData, lastName: e.target.value })}
                        />
                    </div>
                </div>
                <div className='flex justify-end p-2'>
                {isEditingAddress && <Button onClick={handleAddress} type='primary' >OK</Button>}

                </div>
                {/* Display address information here if available */}
            </div>

            <div>
                <a className="text-red-400" onClick={handleDelete}>Delete User</a>
            </div>
        </div>
    );
}

export default UserDetail;
