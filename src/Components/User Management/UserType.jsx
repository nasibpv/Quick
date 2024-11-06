import { Button,  Modal, Input, message } from 'antd';
import { useEffect, useState } from 'react';


function UserType(){
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [open, setOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [userTypes, setUserTypes] = useState([]);
    
    // Fetch data on component mount
    useEffect(() => {
      const fetchData = async () => {
        const result = await fetch('data.json');
        const data = await result.json();
        setUserTypes(data.userType);
      };
      fetchData();
    }, []);
  
    // Get the key value of 3
    const lastKey=userTypes.length +1

    const showLoading = (item) => {
      setName(item.name);
      setId(item.key);
      setOpen(true);
      setIsEditing(true);
    };
  
    const handleNewClick = () => {
      setName('');
      setId(lastKey);
      setOpen(true);
      setIsEditing(false);
    };
  
    const handleDelete = (key) => {
      const newData = userTypes.filter(item => item.key !== key);
      userTypes(newData);
      message.success('User deleted successfully');
    };
  
    const handleSubmit = () => {
      if (!name) {
        message.error('Please enter a name');
        return;
      }
  
      if (isEditing) {
        const updatedData = userTypes.map(item =>
          item.key === id ? { ...item, name } : item
        );
        setUserTypes(updatedData);
        message.success(`Edited User: ${name}`);
      } else {
        const newUser = { key: lastKey.toString(), name };
        setUserTypes([...userTypes, newUser]);
        message.success(`Added New User: ${name}`);
      }
  
      setOpen(false);
    };
  
    return (
        <div>
            <div className="p-1 flex justify-end">
              <Button className="bg-gray-100 text-blue-500" onClick={handleNewClick}>New</Button>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="py-2 px-4 border-b">ID</th>
                    <th className="py-2 px-4 border-b">Type</th>
                    <th className="py-2 px-4 border-b"></th>
                  </tr>
                </thead>
                <tbody>
                  {
                  userTypes.map(item => (
                    <tr key={item.key} className="hover:bg-gray-100 p-2">
                      <td className="py-2 px-4 border-b">{item.key}</td>
                      <td className="py-2 px-4 border-b">{item.name}</td>
                      <td className="py-2 px-4 border-b ">
                        <Button  className='bg-blue-400 hover:bg-black-500 me-1' onClick={() => showLoading(item)}>Edit</Button>
                        <Button className="bg-red-400 text-white rounded hover:bg-red-600" onClick={() => handleDelete(item.key)}>Delete</Button>
                      </td>
                    </tr>
                  ))
                  }
                </tbody>
              </table>
            </div>
            <Modal
          title="Master"
          footer={[
            <Button key="submit" type="primary" onClick={handleSubmit}>
              Submit
            </Button>,
          ]}
          open={open}
          onCancel={() => setOpen(false)}
        >
          <Input
            placeholder="ID"
            className='mb-4'
            value={id}
            onChange={(e) => setId(e.target.value)}
            disabled // ID should be read-only during editing
            addonBefore="ID" // Inline label for ID
          />
          <Input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mb-4"
            addonBefore="Name" // Inline label for Name
          />
        </Modal>
        </div>
    )
}
export default UserType