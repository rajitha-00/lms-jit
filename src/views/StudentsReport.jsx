import React from 'react'
import { Card } from 'reactstrap'
import DataTable from '../components/DataTable';

const StudentsReport = () => {
  const headers = ['Subject', 'Teacher'];
  const data = [
    ['Mathematics', 'John Smith'],
    ['Science', 'Alice Johnson'],
    ['English', 'Michael Davis'],
    ['History', 'Sarah Wilson'],
    ['Art', 'David Thompson']
  ];
  return (
    <>
      <Card>
        <h1>Teachers details</h1>
      </Card>
      <Card className='mt-5'>
        <h1>Teacher & Subject Details</h1>
        <div className='mt-5'></div>
        <DataTable 
         headers={headers} data={data}
        />
      </Card>

    </>
  )
}
export default StudentsReport
