import React from 'react'
import { Card, Col, Form, Row } from 'reactstrap'
import DataTable from '../components/DataTable';
import SelectForm from '../components/SelectForm';
import PrimaryBtn from '../components/buttons/PrimaryBtn';
import WarinnigBtn from '../components/buttons/WarinnigBtn';

const AssignClass = () => {
  const headers = ['Classroom', 'Action'];
  const data = [
    ['class A', <WarinnigBtn btnName="Deallocate"/>],
    ['class B', <WarinnigBtn btnName="Deallocate"/>],
    ['class C', <WarinnigBtn btnName="Deallocate"/>],
    ['class D', <WarinnigBtn btnName="Deallocate"/>],
    ['class E', <WarinnigBtn btnName="Deallocate"/>]
  ];
  const options1 = [
    { label: 'Teacher 1', value: 'teacher1' },
    { label: 'Teacher 2', value: 'teacher2' },
    { label: 'Teacher 3', value: 'teacher3' },
    { label: 'Teacher 4', value: 'teacher4' },
  ];
  const options2 = [
    { label: 'classroom 1', value: 'classroom1' },
    { label: 'classroom 2', value: 'classroom2' },
    { label: 'classroom 3', value: 'classroom3' },
    { label: 'classroom 4', value: 'classroom4' },
  ];
  return (
    <>

        <Card className='formCard'>
          <div className="cardContent">

          <h1>Teachers details</h1>
          <Row >
            <Col  lg={6} >
              <Form >

                <Row>
                  <Col sm={12 } md={9}>
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
          </div>
        </Card>
        <Card className='mt-5'>
          <h1>Allocate Classrooms</h1>
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

export default AssignClass
