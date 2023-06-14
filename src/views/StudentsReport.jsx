import React from 'react'
import { Card, Col, Row } from 'reactstrap'
import DataTable from '../components/DataTable';
import SelectForm from '../components/SelectForm';
import InputForm from '../components/InputForm';

const StudentsReport = () => {
  const headers = ['Subject', 'Teacher'];
  const data = [
    ['Mathematics', 'John Smith'],
    ['Science', 'Alice Johnson'],
    ['English', 'Michael Davis'],
    ['History', 'Sarah Wilson'],
    ['Art', 'David Thompson']
  ];
  const options = [
    { label: 'student 1', value: 'student1' },
    { label: 'student 2', value: 'student2' },
    { label: 'student 3', value: 'student3' },
    { label: 'student 4', value: 'student4' },
  ];
  return (
    <>
    <div className="wrapper">
      <div className="innerWrapper">

      <Card>
        <div className="cardHeader">
          <h1>Student Details</h1>
        </div>
        <Row>
          <Col md={6}>
            <SelectForm
              label="Student"
              id="student"
              name="student"
              placeholder="Student"
              type="select"
              options={options}
              defaultValue="class1"
            />
           
          </Col>
          <Col md={6}>
            <InputForm
                label="Class Room"
                id="class_room"
                name="class_room"
                placeholder=" Class Room"
                type="text"
            />
            
          </Col>
          <Col md={6}>
            <InputForm
                label="Contact Person"
                id="contact_person"
                name="contact_person"
                placeholder=" Contact Person"
                type="text"
            />
            
          </Col>
          <Col md={6}>
            <InputForm
                label="Email Address"
                id="class_room"
                name="class_room"
                placeholder=" Email"
                type="email"
            />
            
          </Col>
          <Col md={6}>
            <InputForm
                label="Contact No."
                id="contact_no"
                name="contact_no"
                placeholder=" Contact No"
                type="number"
            />
            
          </Col>
          <Col md={6}>
            <InputForm
                label="Date of Birth"
                id="dob"
                name="dob"
                placeholder="Date of Birth"
                type="date"
            />
            
          </Col>
        </Row>
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
