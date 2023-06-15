import React from 'react';
import { Form, Col, Row } from 'reactstrap';
import InputForm from '../InputForm'; // Corrected the import path
import SelectForm from '../SelectForm'; // Corrected the import path
import PrimaryBtn from '../buttons/PrimaryBtn';
import DangerBtn from '../buttons/DangerBtn';
import WarinnigBtn from '../buttons/WarinnigBtn';
import { createStudent } from '../../services/student.service';

const StudentsForm = ({ reloadTable, std }) => {
  const options = [
    { label: 'Class 1', value: 'class1' },
    { label: 'Class 2', value: 'class2' },
    { label: 'Class 3', value: 'class3' },
    { label: 'Class 4', value: 'class4' },
  ];

  const initialValues = {
    id: std ? std.id : 0,
    firstName: std ? std.firstName : '',
    lastName: std ? std.lastName : '',
    contactPerson: std ? std.contactPerson : '',
    contactNumber: std ? std.contactNumber : 0,
    email: std ? std.email : '',
    dateOfBirth: std ? std.dateOfBirth : '',
    age: std ? std.age : 0,
    classId: std ? std.classId : 1,
  };

  const [formData, setFormData] = React.useState(initialValues);

  const resetForm = () => {
    setFormData(initialValues);
  };

  const saveStudent = async () => {
    console.log('Saving student', formData);

    const { result, error } = await createStudent(formData);
    if (error) {
      console.log(error);
    }
    if (result) {
      console.log(result);
      alert('Student saved successfully');
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
              label="Contact Person"
              id="contactPerson"
              name="contactPerson"
              placeholder="Enter Your Contact Person"
              type="text"
              value={formData.contactPerson}
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
          <Col sm={10} md={6}>
            <InputForm
              label="Date of Birth"
              id="dateOfBirth"
              name="dateOfBirth"
              placeholder="Enter Your Date of Birth"
              type="date"
              value={formData.dateOfBirth}
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
              value={formData.age}
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
              value={formData.classId}
              options={options}
              onChange={setFieldValue}
            />
          </Col>
        </Row>
        <Row>
          <Col md={3}></Col>
          <Col md={3}>
            <PrimaryBtn btnName="Add" onClick={saveStudent} />
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
  );
};

export default StudentsForm;
