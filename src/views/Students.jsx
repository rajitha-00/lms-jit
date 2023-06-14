import React, { useState } from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,

} from 'reactstrap';
import DataTable from '../components/DataTable';
import '../sass/theme.css'
import StudentsForm from '../components/forms/StudentsForm';


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


  return (
    <>
    <div className="wrapper">
      <div className="innerWrapper">

        <Accordion open={openAccordion1} toggle={toggleAccordion1}>
          <AccordionItem>
            <AccordionHeader style={{ background: 'var(--primary-light)' }} targetId="1">Student Details</AccordionHeader>
            <AccordionBody accordionId="1">
              <StudentsForm />
            </AccordionBody>
          </AccordionItem>
        
        </Accordion>

        <Accordion className='mt-5' open={openAccordion2} toggle={toggleAccordion2}>
          <AccordionItem>
            <AccordionHeader className='bgHeader' targetId="1">Exsisting Students</AccordionHeader>
            <AccordionBody accordionId="1">
              <DataTable
              headers={headers} data={data}
              />
            </AccordionBody>
          </AccordionItem>
        
        </Accordion>
      </div>
    </div>
    </>
  )
}

export default Students
