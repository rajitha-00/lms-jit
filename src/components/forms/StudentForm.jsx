import React from 'react';
import { Col, Form, Row } from 'reactstrap';
import SelectForm from '../SelectForm';
import InputForm from '../InputForm';
import { getStudentById } from '../../services/student.service';

const StudentForm = ({ reloadTable, std }) => {
  const [formData, setFormData] = React.useState({});
  const [students, setStudents] = React.useState([]);
  
 
const getStudents = async () => {
  const { result, error } = await getStudentById(std.id);
  if (error) {
    console.log(error);
  }
  if (result) {
    console.log(result.data);
    setStudents(result.data);
  }
};

  const setFieldValue = (e) => {
    const { name, value, type } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === 'number' ? parseInt(value) : value,
    }));
  };


  React.useEffect(() => {
    if (std && std.id) {
      getStudents();
    }
  }, [std]);

  const options = students.map((student) => ({
    label: `${student.firstName} ${student.lastName}`,
    value: student.id,
  }));
  return (
    <>
      <Form>
      <Row>
          <Col md={6}>
          <SelectForm
            label="Student"
            id="firstName"
            name="firstName"
            placeholder="Student"
            type="select"
            options={options}
            defaultValue={std ? std.id : ''}
            selectedValue={formData.firstName || ''}
            onChangeSelect={setFieldValue}
          />

           
          </Col>
          <Col md={6}>
            <InputForm
                label="Class Room"
                id="classId"
                name="classId"
                placeholder=" Class Room"
                type="text"
                value={formData.classId}
                onChange={setFieldValue}
            />
            
          </Col>
          <Col md={6}>
            <InputForm
                label="Contact Person"
                id="contactPerson"
                name="contactPerson"
                placeholder=" Contact Person"
                type="text"
                value={formData.contactPerson}
                onChange={setFieldValue}
            />
            
          </Col>
          <Col md={6}>
            <InputForm
                label="Email Address"
                id="email"
                name="email"
                placeholder=" Email"
                type="email"
                value={formData.firstName}
                onChange={setFieldValue}
            />
            
          </Col>
          <Col md={6}>
            <InputForm
                label="Contact No."
                id="contactNumber"
                name="contactNumber"
                placeholder=" Contact No"
                type="number"
                value={formData.contactNumber}
                onChange={setFieldValue}
            />
            
          </Col>
          <Col md={6}>
            <InputForm
                label="Date of Birth"
                id="dateOfBirth"
                name="dateOfBirth"
                placeholder="Date of Birth"
                type="date"
                value={formData.dateOfBirth}
                onChange={setFieldValue}
            />
            
          </Col>
        </Row>
      </Form>
    </>
  )
}

export default StudentForm
