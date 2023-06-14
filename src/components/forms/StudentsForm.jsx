import React from 'react';
import { Form } from 'reactstrap';
import { Col, Row } from 'reactstrap';
import InputForm from '../InputForm'; // Correct the import path
import SelectForm from '../SelectForm'; // Correct the import path

const StudentsForm = () => {
  const options = [
    { label: 'Class 1', value: 'class1' },
    { label: 'Class 2', value: 'class2' },
    { label: 'Class 3', value: 'class3' },
    { label: 'Class 4', value: 'class4' },
  ];

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
              label="Contact Person"
              id="contact_person"
              name="contact_person"
              placeholder="Enter Your Contact Person"
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
          <Col sm={10} md={6}>
            <InputForm
              label="Date of Birth"
              id="dob"
              name="dob"
              placeholder="Enter Your Date of Birth"
              type="date"
            />
          </Col>
          <Col sm={10} md={6}>
            <InputForm
              label="Age"
              id="age"
              name="age"
              placeholder="Enter Your Age"
              type="number"
            />
          </Col>
          <Col sm={10} md={6}>
            <SelectForm
              label="Classroom"
              id="classroom"
              name="classroom"
              placeholder="Select Your Classroom"
              type="select"
              options={options}
              defaultValue="class1"
            />
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default StudentsForm;
