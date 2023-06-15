import React from 'react';
import { Col, FormGroup, Input, Label } from 'reactstrap';

const SelectForm = ({ label, id, name, placeholder, type, options, defaultValue, selectedValue, onChangeSelect }) => {
  const handleSelectChange = (e) => {
    const { value } = e.target;
    onChangeSelect({ target: { name, value } });
  };

  return (
    <FormGroup row>
      <Label for={id} sm={2}>
        {label}
      </Label>
      <Col sm={10}>
        <Input id={id} name={name} placeholder={placeholder} type={type} value={selectedValue} onChange={handleSelectChange}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Input>
      </Col>
    </FormGroup>
  );
};

export default SelectForm;
