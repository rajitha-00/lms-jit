import React, { useState } from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';
import DataTable from '../components/DataTable';
import ClassesForm from '../components/forms/ClassesForm';
import { getAllClassrooms } from '../services/classroom.service';

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

  const headers = ['Id', 'ClassroomName'];
  const [classrooms, setClassrooms] = React.useState([]);
  const getClassrooms = async () => {
    const {result, error} = await getAllClassrooms(); 
    if(error) {
        console.log(error);
    }
    if(result){
      console.log(result.data);
      setClassrooms(result.data);
    }
  }
  React.useEffect(() => {
   
    getClassrooms();
  }, []);
  
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
              headers={headers} data={classrooms}
              />
            </AccordionBody>
          </AccordionItem>
        
        </Accordion>

    </>
  )
}

export default ClassRooms
