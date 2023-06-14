import React, { useState } from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';
import DataTable from '../components/DataTable';
import ClassesForm from '../components/forms/ClassesForm';

const ClassRooms = () => {
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

  const headers = ['Subject ID', 'Classroom'];
  const data = [
    ['1', 'Class A'],
    ['2', 'Class B'],
    ['3', 'Class C'],
    ['4', 'Class D'],
    ['5', 'Class E']
  ];
  
  return (
    <>
      <Accordion open={openAccordion1} toggle={toggleAccordion1}>
        <AccordionItem>
          <AccordionHeader targetId="1">Class Details</AccordionHeader>
          <AccordionBody accordionId="1">
            <ClassesForm />
          </AccordionBody>
        </AccordionItem>
       
      </Accordion>

      <Accordion className='mt-5' open={openAccordion2} toggle={toggleAccordion2}>
        <AccordionItem>
          <AccordionHeader targetId="1">Exsisting Classes</AccordionHeader>
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

export default ClassRooms
