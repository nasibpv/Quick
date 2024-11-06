import  { useState } from 'react';
import { Button, message, Steps, theme } from 'antd';
import Detail_p from './DetailsP.';
import Documents from './Documents';

const steps = [
  {
    title: 'First',
    content: <Detail_p/>,
  },
  {
    title: 'Second',
    content: <Documents/>,
    
  },
  {
    title: 'Last',
    content: '',
  },
];
const EditPatients = () => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));
  const contentStyle = {
    // lineHeight: '260px',
    // textAlign: 'center',
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px  ${token.colorBorder}`,
    marginTop: 16,
  };
  const handleSubmit=()=>{
    message.success('Updation complete!')
    window.history.back()
  }
  return (
    <>
      <Steps current={current} items={items} />
      <div style={contentStyle}>
        {steps[current].content}
        {/* <div>gfdgg</div> */}
        </div>
      {/* <div style={contentStyle}>
        <div>gfdgg</div>
        </div> */}
      <div
        style={{
          marginTop: 24,
        }}
      >
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary"  onClick={handleSubmit}>
            Done
          </Button>
        )}
        {current > 0 && (
          <Button
            style={{
              margin: '0 8px',
            }}
            onClick={() => prev()}
          >
            Previous
          </Button>
        )}
      </div>
    </>
  );
};
export default EditPatients;


