import React from 'react'
import { Card, Col, Form, Row } from 'reactstrap'
import DataTable from '../components/DataTable';
import SelectForm from '../components/SelectForm';
import PrimaryBtn from '../components/buttons/PrimaryBtn';
import WarinnigBtn from '../components/buttons/WarinnigBtn';

const AssignSubject = () => {
  const headers = ['Subject', 'Action'];
  const data = [
    ['Mathematics', <WarinnigBtn btnName="Deallocate"/>],
    ['Science', <WarinnigBtn btnName="Deallocate"/>],
    ['English', <WarinnigBtn btnName="Deallocate"/>],
    ['History', <WarinnigBtn btnName="Deallocate"/>],
    ['Art', <WarinnigBtn btnName="Deallocate"/>]
  ];
  const options1 = [
    { label: 'Teacher 1', value: 'teacher1' },
    { label: 'Teacher 2', value: 'teacher2' },
    { label: 'Teacher 3', value: 'teacher3' },
    { label: 'Teacher 4', value: 'teacher4' },
  ];
  const options2 = [
    { label: 'subject 1', value: 'subject1' },
    { label: 'subject 2', value: 'subject2' },
    { label: 'subject 3', value: 'subject3' },
    { label: 'subject 4', value: 'subject4' },
  ];
  return (
    <>

        <Card>
          <h1>Teachers details</h1>
          <Row>
            <Col sm={10} md={6} >
              <Form >

                <Row>
                  <Col md={9}>
                    <SelectForm
                      label="Classroom"
                      id="classroom"
                      name="classroom"
                      placeholder="Select Your Classroom"
                      type="select"
                      options={options1}
                      defaultValue="class1"
                    />
                  </Col>
                  <Col md={3}>
                    <PrimaryBtn
                    btnName="Save"
                    />
                  </Col>
                </Row>
              </Form>
                
            </Col>
          </Row>
        </Card>
        <Card className='mt-5'>
          <h1>Allocate subjects</h1>
          <Col sm={10} md={6} >
              <Form >

                <Row>
                  <Col md={9}>
                    <SelectForm
                      label="Subject"
                      id="subject"
                      name="subject"
                      placeholder="Select Your Subject"
                      type="select"
                      options={options2}
                      defaultValue="subject-1"
                    />
                  </Col>
                  <Col md={3}>
                    <PrimaryBtn
                    btnName="Allocate"
                    />
                  </Col>
                </Row>
              </Form>
                
            </Col>
          <div className='mt-5'></div>
          <DataTable 
          headers={headers} data={data}
          />
        </Card>

    </>
  )
}

export default AssignSubject
