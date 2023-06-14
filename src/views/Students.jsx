import React, { useState } from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Col,
  Form,
  Row,
} from 'reactstrap';
import DataTable from '../components/DataTable';
import InputForm from '../components/InputForm';
import SelectForm from '../components/SelectForm';


const Students = () => {
  const [openAccordion1, setOpenAccordion1] = useState('1');
  const [openAccordion2, setOpenAccordion2] = useState('1');

  const toggleAccordion1 = (id) => {
    if (openAccordion1 === id) {
      setOpenAccordion1('');
    } else {
      setOpenAccordion1(id);
    }
  };

  const toggleAccordion2 = (id) => {
    if (openAccordion2 === id) {
      setOpenAccordion2('');
    } else {
      setOpenAccordion2(id);
    }
  };

  const headers = ['First Name', 'Last Name', 'Contact Person ', 'Contact No', 'Email Address', 'Date of Birth', 'Age','Classroom'];
  const data = [
    ['John', 'Doe', 'Jane Doe', '+1234567890', 'john.doe@example.com', '1990-05-15', 33, 'Class A'],
    ['Alice', 'Smith', 'Bob Smith', '+9876543210', 'alice.smith@example.com', '1995-09-10', 28, 'Class B'],
    ['Michael', 'Johnson', 'Emily Johnson', '+1122334455', 'michael.johnson@example.com', '1988-11-25', 35, 'Class C'],
    ['Sarah', 'Davis', 'Mark Davis', '+9988776655', 'sarah.davis@example.com', '1992-07-18', 31, 'Class A'],
    ['David', 'Wilson', 'Emma Wilson', '+5544332211', 'david.wilson@example.com', '1997-03-05', 26, 'Class B']
  ];
  const options = [
    { label: 'Class 1', value: 'class1' },
    { label: 'Class 2', value: 'class2' },
    { label: 'Class 3', value: 'class3' },
    { label: 'Class 4', value: 'class4' },
  ];

  return (
    <>
      <Accordion open={openAccordion1} toggle={toggleAccordion1}>
        <AccordionItem>
          <AccordionHeader targetId="1">Student Details</AccordionHeader>
          <AccordionBody accordionId="1">
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
          </AccordionBody>
        </AccordionItem>
       
      </Accordion>

      <Accordion className='mt-5' open={openAccordion2} toggle={toggleAccordion2}>
        <AccordionItem>
          <AccordionHeader targetId="1">Exsisting Students</AccordionHeader>
          <AccordionBody accordionId="1">
            <DataTable
            headers={headers} data={data}
            />
          </AccordionBody>
        </AccordionItem>
       
      </Accordion>
    </>
  )
}

export default Students
