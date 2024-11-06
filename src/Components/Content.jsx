// App.js

import { PDFDownloadLink } from '@react-pdf/renderer';
import Invoice from './invoice';
import {CloudDownloadOutlined} from '@ant-design/icons'



const Contents = () => {


  return (
    <div>
      <PDFDownloadLink document={
        <Invoice  />} 
        fileName="invoice.pdf">
        {({ loading }) => (loading ? 'Loading document...' : <CloudDownloadOutlined/>)}
      </PDFDownloadLink>
    </div>
  );
};



export default Contents