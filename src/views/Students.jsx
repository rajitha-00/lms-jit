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
import { getAllStudents } from '../services/student.service';


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
  const headers = ['Id','FirstName', 'LastName', 'ContactPerson', 'ContactNumber', 'Email', 'DateOfBirth', 'Age'];

  const [students, setStudents] = React.useState([]);
  const getStudents = async () => {
    const {result, error} = await getAllStudents(); 
    if(error) {
        console.log(error);
    }
    if(result){
      console.log(result.data);
      setStudents(result.data);
    }
  }
  React.useEffect(() => {
   
    getStudents();
  }, []);

  return (
    <>
    <div className="wrapper">
      <div className="innerWrapper">

        <Accordion open={openAccordion1} toggle={toggleAccordion1}>
          <AccordionItem>
            <AccordionHeader style={{ background: 'var(--primary-light)' }} targetId="1">Student Details</AccordionHeader>
            <AccordionBody accordionId="1">
              <StudentsForm reloadTable={getStudents} />
            </AccordionBody>
          </AccordionItem>        
        </Accordion>

        <Accordion className='mt-5' open={openAccordion2} toggle={toggleAccordion2}>
          <AccordionItem>
            <AccordionHeader className='bgHeader' targetId="1">Exsisting Students</AccordionHeader>
            <AccordionBody accordionId="1">
              <DataTable
              headers={headers} data={students}
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
