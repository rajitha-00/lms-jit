import React from 'react'
import { Card, Col, Row } from 'reactstrap'
import DataTable from '../components/DataTable';
import SelectForm from '../components/SelectForm';
import InputForm from '../components/InputForm';
import StudentForm from '../components/forms/StudentForm';

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
    <div className="wrapper">
      <div className="innerWrapper">

      <Card>
        <div className="cardHeader">
          <h1>Student Details</h1>
        </div>
        <StudentForm />
      </Card>
      <Card className='mt-5'>
        <div className="cardHeader">

          <h1>Teacher & Subject Details</h1>
        </div>
        <div className='mt-5'></div>
        <DataTable 
         headers={headers} data={data}
        />
      </Card>
      </div>
    </div>

    </>
  )
}
export default StudentsReport
