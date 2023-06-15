
import React from 'react';
import { Form } from 'reactstrap';
import { Col, Row } from 'reactstrap';
import InputForm from '../InputForm';
import PrimaryBtn from '../buttons/PrimaryBtn';
import DangerBtn from '../buttons/DangerBtn';
import WarinnigBtn from '../buttons/WarinnigBtn';
import { createSubject } from '../../services/subject.service';
const SubjectForm = (reloadTable, sbjct) => {
  const initialValues = {
    id: sbjct ? sbjct.id : 0,
    subjectName: sbjct ? sbjct.subjectName : '',
   
  };
  const [formData, setFormData] = React.useState(initialValues);

  const resetForm = () => {
    setFormData(initialValues);
  };

  const saveSubject = async () => {
    console.log('Saving subject', formData);

    const { result, error } = await createSubject(formData);
    if (error) {
      console.log(error);
    }
    if (result) {
      console.log(result);
      alert('Subject saved successfully');
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
                label="Subject Name"
                id="subjectName"
                name="subjectName"
                placeholder="Enter Your Subject Name"
                type="text"
                value={formData.subjecttName}
                onChange={setFieldValue}
                />
            </Col>
            
            </Row>
            <Row>
            <Col md={3}></Col>
            <Col md={3}>
              <PrimaryBtn btnName="Add" onClick={saveSubject} />
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

export default SubjectForm
