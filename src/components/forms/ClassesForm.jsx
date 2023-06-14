
import React from 'react';
import { Form } from 'reactstrap';
import { Col, Row } from 'reactstrap';
import InputForm from '../InputForm'; // Correct the import path

const ClassesForm = () => {
  return (
    <>
       <Form>
            <Row>
            <Col sm={10} md={6}>
                <InputForm
                label="Classroom Name"
                id="classroom_name"
                name="classroom_name"
                placeholder="Enter Your Classroom Name"
                type="text"
                />
            </Col>
            
            </Row>
        </Form>
    </>
  )
}

export default ClassesForm
