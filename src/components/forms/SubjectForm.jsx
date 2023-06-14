
import React from 'react';
import { Form } from 'reactstrap';
import { Col, Row } from 'reactstrap';
import InputForm from '../InputForm';

const SubjectForm = () => {
  return (
    <>
      <Form>
            <Row>
            <Col sm={10} md={6}>
                <InputForm
                label="Subject Name"
                id="subject_name"
                name="subject_name"
                placeholder="Enter Your Subject Name"
                type="text"
                />
            </Col>
            
            </Row>
        </Form>
    </>
  )
}

export default SubjectForm
