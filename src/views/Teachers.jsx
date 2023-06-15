import React, { useState } from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';
import DataTable from '../components/DataTable';
import TeachersForm from '../components/forms/TeachersForm';
import { getAllTeachers } from '../services/teacher.service';

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

  const headers = ['Id','FirstName', 'LastName', 'ContactNumber', 'Email'];

  const [teachers, setTeachers] = React.useState([]);
  const getTeachers = async () => {
    const {result, error} = await getAllTeachers(); 
    if(error) {
        console.log(error);
    }
    if(result){
      console.log(result.data);
      setTeachers(result.data);
    }
  }
  React.useEffect(() => {
   
    getTeachers();
  }, []);

  return (
    <>
    <div className="wrapper">
      <div className="innerWrapper">
        <Accordion open={openAccordion1} toggle={toggleAccordion1}>
          <AccordionItem>
            <AccordionHeader targetId="1">Teacher Details</AccordionHeader>
            <AccordionBody accordionId="1">
              <TeachersForm  reloadTable={getTeachers}/>
            </AccordionBody>
          </AccordionItem>
        
        </Accordion>

        <Accordion className='mt-5' open={openAccordion2} toggle={toggleAccordion2}>
          <AccordionItem>
            <AccordionHeader targetId="1">Exsisting Teachers</AccordionHeader>
            <AccordionBody accordionId="1">
              <DataTable
              headers={headers} data={teachers}
              />
            </AccordionBody>
          </AccordionItem>
        
        </Accordion>

      </div>
    </div>
    </>
  )
}
 

export default Teachers
