import React from 'react';
import { Col, FormGroup, Input, Label } from 'reactstrap';

const InputForm = ({ label, id, name, placeholder, type, children }) => {
  return (
    <FormGroup row>
      <Label for={id} sm={2}>
        {label}
      </Label>
      <Col sm={10}>
        <Input id={id} name={name} placeholder={placeholder} type={type}>
          {children}
        </Input>
      </Col>
    </FormGroup>
  );
};

export default InputForm;