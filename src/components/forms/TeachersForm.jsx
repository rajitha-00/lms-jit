import React from 'react';
import { Form } from 'reactstrap';
import { Col, Row } from 'reactstrap';
import InputForm from '../InputForm'; // Correct the import path

const TeachersForm = () => {
  return (
    <>
        <Form>
            <Row>
            <Col sm={10} md={6}>
                <InputForm
                label="First Name"
                id="first_name"
                name="first_name"
                placeholder="Enter Your First Name"
                type="text"
                />
            </Col>
            <Col sm={10} md={6}>
                <InputForm
                label="Last Name"
                id="last_name"
                name="last_name"
                placeholder="Enter Your Last Name"
                type="text"
                />
            </Col>
           
            <Col sm={10} md={6}>
                <InputForm
                label="Contact No"
                id="contact_no"
                name="contact_no"
                placeholder="Enter Your Contact No"
                type="number"
                />
            </Col>
            <Col sm={10} md={6}>
                <InputForm
                label="Email Address"
                id="email_address"
                name="email_address"
                placeholder="Enter Your Email Address"
                type="email"
                />
            </Col>
            
            </Row>
        </Form>
    </>
  )
}

export default TeachersForm
