import React, { useState, useEffect } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

const EditForm = props => {
  const [data, setData] = useState(props.currentData)
  console.log(props.currentData)
  console.log(data)
  const handleInputChange = e => {
    const { name, value } = e.target
    
    setData({ ...data, [name]: value })
  }

  useEffect(() => {
    setData(props.currentData)
  }, [props])

  return (
    <Form onSubmit={event => {
      event.preventDefault()

      props.updateData(data.id, data)
      console.log(data)
    }}>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input type="text" name="name" id="name" placeholder="input a name"
        value={data.name}
        onChange={handleInputChange} />
      </FormGroup>
      <FormGroup>
        <Label for="brand">Brand</Label>
        <Input
          type="text"
          name="brand"
          id="brand"
          placeholder="brand"
          value={data.brand}
          onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="packagingAmount">packagingAmount</Label>
        <Input
          type="text"
          name="packagingAmount"
          id="packagingAmount"
          placeholder="input a packagingAmount"
          value={data.packagingAmount}
          onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="packaging">packaging</Label>
        <Input
          type="text"
          name="packaging"
          id="packaging"
          placeholder="input a packaging"
          value={data.packaging}
          onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="stock">stock</Label>
        <Input type="text" name="stock" id="stock" placeholder="input stock" 
        value={data.stock}
        onChange={handleInputChange} />
      </FormGroup>
      <FormGroup>
        <Label for="threshold">threshold</Label>
        <Input
          type="text"
          name="threshold"
          id="threshold"
          placeholder="input a threshold"
          value={data.threshold}
          onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="ceiling">ceiling</Label>
        <Input
          type="text"
          name="ceiling"
          id="ceiling"
          placeholder="input a ceiling"
          value={data.ceiling}
          onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="unit">measurement</Label>
        <Input
          type="text"
          name="unit"
          id="unit"
          placeholder="unit"
          value={data.unit}
          onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="amount">amount</Label>
        <Input
          type="text"
          name="amount"
          id="amount"
          placeholder="input amount"
          value={data.amount}
          onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="status">status</Label>
        <Input
          type="text"
          name="status"
          id="status"
          placeholder="input status"
          value={data.status}
          onChange={handleInputChange}
        />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
};

export default EditForm;
