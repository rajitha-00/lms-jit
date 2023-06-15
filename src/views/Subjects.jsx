import React, { useState } from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';
import DataTable from '../components/DataTable';
import SubjectForm from '../components/forms/SubjectForm';
import { getAllSubjects } from '../services/subject.service';

const Subjects = () => {
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

  const headers = ['Id', 'SubjectName'];
  const [subjects, setSubjects] = React.useState([]);
  const getSubjects = async () => {
    const {result, error} = await getAllSubjects(); 
    if(error) {
        console.log(error);
    }
    if(result){
      console.log(result.data);
      setSubjects(result.data);
    }
  }
  React.useEffect(() => {
   
    getSubjects();
  }, []);
  
  return (
    <>

      <Accordion open={openAccordion1} toggle={toggleAccordion1}>
        <AccordionItem>
          <AccordionHeader targetId="1">Subject Details</AccordionHeader>
          <AccordionBody accordionId="1">
            <SubjectForm reloadTable={getSubjects} />
          </AccordionBody>
        </AccordionItem>
       
      </Accordion>

      <Accordion className='mt-5' open={openAccordion2} toggle={toggleAccordion2}>
        <AccordionItem>
          <AccordionHeader targetId="1">Exsisting Subjects</AccordionHeader>
          <AccordionBody accordionId="1">
            <DataTable
            headers={headers} data={subjects}
            />
          </AccordionBody>
        </AccordionItem>
       
      </Accordion>
    </>
  )
}

export default Subjects
