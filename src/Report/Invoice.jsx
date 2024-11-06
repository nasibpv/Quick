import { Document, Page, View, Text, StyleSheet } from '@react-pdf/renderer';
import { useEffect, useState } from 'react';

const styles = StyleSheet.create({

  container: {
    width: '100%',
    border: '1px solid #000',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    margin:10
  },
  header: {
    color: '#1E90FF',
    padding: 5,
    fontSize: 38,
    fontWeight: 'bold',
  },
  section: {
    width:'100%',
    display: 'flex',
    flexDirection: 'row', 
    justifyContent: 'space-between',
    borderBottom: '1px solid #000',
    paddingBottom: 10,
  },
  section_left:{
    width:'48%',
    
  },
  description: {
    minHeight: 200,
    marginTop: 10,
  },
  paragraph: {
    margin: 5,
    fontStyle:"Monospace"
  },
  paragraphData:{
    color:'#000',
    fontWeight:'demibold',
    backgroundColor:'#f2f2f2',
    padding:1,
    fontStyle:'Serif'
  }
  
});

// const Invoice = ({formData}) => (
//   <Document>
//   <Page size="A4" style={styles.container}>
//     <Text style={styles.header}>Quick</Text>
//     <View style={styles.section}>
//       <View style={styles.section_left}>
//         <Text style={styles.paragraph}>UH ID: 
//         <Text style={styles.paragraphData}>21</Text>
//         </Text>
//         <Text style={styles.paragraph}>Name : 
//         <Text style={styles.paragraphData}>21</Text>
//         </Text>
//         <Text style={styles.paragraph}>Number: 
//         <Text style={styles.paragraphData}>21</Text>
//         </Text>
//         <Text style={styles.paragraph}>Age : 
//           <Text style={styles.paragraphData}>21</Text>
//         </Text>
//       </View>
//       <View style={styles.section_left}>
//         <Text style={styles.paragraph}>Admission ID: 
//         <Text style={styles.paragraphData}>21</Text>
//         </Text>
//         <Text style={styles.paragraph}>Department: 
//         <Text style={styles.paragraphData}>21</Text>
//         </Text>
//         <Text style={styles.paragraph}>Dr.: 
//         <Text style={styles.paragraphData}>21</Text>
//         </Text>
//         <Text style={styles.paragraph}>Date: 
//         <Text style={styles.paragraphData}>21</Text>
//         </Text>
//       </View>
//     </View>
//     <Text style={styles.paragraph}>Description </Text>
//     <View style={styles.description}>
//       {/* You can insert any description content here */}
//     </View>
//   </Page>
// </Document>
  
  
// );
const  Invoice=(formData) =>{
  const [timestamp,setTimestamp]=useState('')
  const formDatas = formData.formData
  const currentDate = new Date().toLocaleString();
  useEffect(()=>{
    setTimestamp(currentDate)
  },[])
  return(
    <Document>
    <Page size="A4" style={styles.container}>
      <Text style={styles.header}>Quick</Text>
      <View style={styles.section} >
        <View style={styles.section_left} >
          <Text style={styles.paragraph}>UH ID: 
          <Text style={styles.paragraphData}>21</Text>
          </Text>
          <Text style={styles.paragraph}>Name : 
          <Text style={styles.paragraphData}>{formDatas.firstName} {formDatas.lastName} </Text>
          </Text>
          <Text style={styles.paragraph}>Number: 
          <Text style={styles.paragraphData} >{formDatas.number}</Text>
          </Text>
          <Text style={styles.paragraph}>Age : 
            <Text style={styles.paragraphData}>{formDatas.age}</Text>
          </Text>
        </View>
        <View style={styles.section_left}>
          <Text style={styles.paragraph}>Admission ID: 
          <Text style={styles.paragraphData}></Text>
          </Text>
          <Text style={styles.paragraph}>Department: 
          <Text style={styles.paragraphData}>{formDatas.department}</Text>
          </Text>
          <Text style={styles.paragraph}>Dr.: 
          <Text style={styles.paragraphData}>{formDatas.doctor}</Text>
          </Text>
          <Text style={styles.paragraph}>Date: 
          <Text style={styles.paragraphData}>{timestamp}</Text>
          </Text>
        </View>
      </View>
      <Text style={styles.paragraph}>Description </Text>
      <View style={styles.description}>
        {/* You can insert any description content here */}
      </View>
    </Page>
  </Document>
  )
}



export default Invoice;
