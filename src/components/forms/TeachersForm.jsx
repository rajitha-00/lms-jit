import React from 'react';
import { Form } from 'reactstrap';
import { Col, Row } from 'reactstrap';
import InputForm from '../InputForm'; // Correct the import path
import { createTeacher } from '../../services/teacher.service';
import PrimaryBtn from '../buttons/PrimaryBtn';
import DangerBtn from '../buttons/DangerBtn';
import WarinnigBtn from '../buttons/WarinnigBtn';

const TeachersForm = ({reloadTable,tchr}) => {

const initialValues = {
    id: tchr ? tchr.id : 0,
    firstName: tchr ? tchr.firstName : '',
    lastName: tchr ? tchr.lastName : '',
    contactNumber: tchr ? tchr.contactNumber : 0,
    email: tchr ? tchr.email : '',
 
    };
    const [formData, setFormData] = React.useState(initialValues);

    const resetForm = () => {
      setFormData(initialValues);
    };
    const saveTeacher = async () => {
        console.log('Saving teacher', formData);
    
        const { result, error } = await createTeacher(formData);
        if (error) {
          console.log(error);
        }
        if (result) {
          console.log(result);
          alert('Teacher saved successfully');
          resetForm();
          reloadTable();
        }
      };
    
      const setFieldValue = (e) => {
        const { name, value, type } = e.target;
    
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: type === 'number' ? parseInt(value) : value,
        }));
      };

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
                value={formData.firstName}
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
                value={formData.lastName}
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
                value={formData.contactNumber}
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
                value={formData.email}
                onChange={setFieldValue}
                />
            </Col>
            
            </Row>
            <Row>
          <Col md={3}></Col>
          <Col md={3}>
            <PrimaryBtn btnName="Add" onClick={saveTeacher} />
          </Col>
          <Col md={3}>
            <DangerBtn btnName="Delete" />
          </Col>
          <Col md={3}>
            <WarinnigBtn btnName="Reset" onClick={resetForm} />
          </Col>
        </Row>
        </Form>
    </>
  )
}

export default TeachersForm
