import React from 'react';
import { Form } from 'reactstrap';
import { Col, Row } from 'reactstrap';
import InputForm from '../InputForm'; // Correct the import path
import SelectForm from '../SelectForm'; // Correct the import path
import PrimaryBtn from '../buttons/PrimaryBtn';
import DangerBtn from '../buttons/DangerBtn';
import WarinnigBtn from '../buttons/WarinnigBtn';
import { createStudent } from '../../services/student.service';

const StudentsForm = ({reloadTable}) => {
  const options = [
    { label: 'Class 1', value: 'class1' },
    { label: 'Class 2', value: 'class2' },
    { label: 'Class 3', value: 'class3' },
    { label: 'Class 4', value: 'class4' },
  ];

  const initialValeus ={
    id: 0,
    firstName: "",
    lastName: "",
    contactPerson: "",
    contactNumber: 0,
    email: "",
    dateOfBirth: "",
    age: 0,
    classId: 1
  };

  const [std, setStd] = React.useState(initialValeus);

 const resetForm = () => {
  setStd(initialValeus);
 }

  const saveStudent = async () => {
    console.log("Saving studen", std);
  
      const {result, error} = await createStudent(std); 
      if(error) {
          console.log(error);
      }
      if(result){
        console.log(result);   
        alert("Student saved successfully");     
        resetForm();
        reloadTable(); 
      }
  }

  const setFieldValue = (e) => {  
    if(e.target.type === "number"){
      setStd({
        ...std,
        [e.target.name]: parseInt(e.target.value)
      });
    }else{
      setStd({
        ...std,
        [e.target.name]: e.target.value
      });
    }
  }

  return (
    <>
      <Form>
        <Row>
          <Col sm={10} md={6}>
            <InputForm
              label="First Name"
              id="firstName"
              name="firstName"
              placeholder="Enter Your First Name"
              type="text"
              onChange={setFieldValue}
            />
          </Col>
          <Col sm={10} md={6}>
            <InputForm
              label="Last Name"
              id="lastName"
              name="lastName"
              placeholder="Enter Your Last Name"
              type="text"
              onChange={setFieldValue}
            />
          </Col>
          <Col sm={10} md={6}>
            <InputForm
              label="Contact Person"
              id="contactPerson"
              name="contactPerson"
              placeholder="Enter Your Contact Person"
              type="text"
              onChange={setFieldValue}
            />
          </Col>
          <Col sm={10} md={6}>
            <InputForm
              label="Contact No"
              id="contactNumber"
              name="contactNumber"
              placeholder="Enter Your Contact No"
              type="number"
              onChange={setFieldValue}
            />
          </Col>
          <Col sm={10} md={6}>
            <InputForm
              label="Email Address"
              id="email"
              name="email"
              placeholder="Enter Your Email Address"
              type="email"
              onChange={setFieldValue}
            />
          </Col>
          <Col sm={10} md={6}>
            <InputForm
              label="Date of Birth"
              id="dateOfBirth"
              name="dateOfBirth"
              placeholder="Enter Your Date of Birth"
              type="date"
              onChange={setFieldValue}
            />
          </Col>
          <Col sm={10} md={6}>
            <InputForm
              label="Age"
              id="age"
              name="age"
              placeholder="Enter Your Age"
              type="number"
              onChange={setFieldValue}
            />
          </Col>
          <Col sm={10} md={6}>
            <SelectForm
              label="Classroom"
              id="classId"
              name="classId"
              placeholder="Select Your Classroom"
              type="select"
              options={options}
              defaultValue="class1"
            />
          </Col>
        </Row>
        <Row>
          <Col md={3}></Col>
          <Col md={3}>
            <PrimaryBtn btnName="Add" onClick={saveStudent} />
          </Col>
          <Col md={3}>
            <DangerBtn btnName="Delete"/>

          </Col>
          <Col md={3}>
            <WarinnigBtn btnName="Reset"/>

          </Col>
        </Row>
      </Form>
    </>
  );
};

export default StudentsForm;
