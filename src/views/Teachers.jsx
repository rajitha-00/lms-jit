import React, { useState } from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';
import DataTable from '../components/DataTable';
import TeachersForm from '../components/forms/TeachersForm';

const Teachers = () => {
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

  const headers = ['First Name', 'Last Name', 'Contact No', 'Email Address'];
  const data = [
    ['John', 'Doe', '+1234567890', 'john.doe@example.com'],
    ['Alice', 'Smith', '+9876543210', 'alice.smith@example.com'],
    ['Michael', 'Johnson', '+1122334455', 'michael.johnson@example.com'],
    ['Sarah', 'Davis', '+9988776655', 'sarah.davis@example.com'],
    ['David', 'Wilson', '+5544332211', 'david.wilson@example.com']
  ];
  

  return (
    <>
      <Accordion open={openAccordion1} toggle={toggleAccordion1}>
        <AccordionItem>
          <AccordionHeader targetId="1">Teacher Details</AccordionHeader>
          <AccordionBody accordionId="1">
            <TeachersForm />
          </AccordionBody>
        </AccordionItem>
       
      </Accordion>

      <Accordion className='mt-5' open={openAccordion2} toggle={toggleAccordion2}>
        <AccordionItem>
          <AccordionHeader targetId="1">Exsisting Teachers</AccordionHeader>
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
 

export default Teachers
