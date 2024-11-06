import { Button, Space } from 'antd';
import {  useState } from 'react';
import Occupation from './Occupation';
import UserType from './UserType';

function Master() {
  const [activeDiv, setActiveDiv] = useState(1);

  return (
    <div>
      <Space size={[8, 16]} wrap>
        <Button onClick={() => setActiveDiv(1)}>User Type</Button>
        <Button onClick={() => setActiveDiv(2)}>Occupation</Button>
        <Button onClick={() => setActiveDiv(3)}>Button 3</Button>
      </Space>

      <div className="mt-4 p-2">
        {activeDiv === 1 && 
        (
          <div>
           <UserType/>
          </div>
        )
        }
        {activeDiv === 2 && 
          <div>
       <Occupation/>
          </div>
        }
        {activeDiv === 3 && 
        <div>
          
        </div>
        }

      </div>
    </div>
  );
}

export default Master;
