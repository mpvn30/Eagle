import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

// name: "All Purpose Flour",
// brand: "Pillsbury",
// packagingAmount: 10.00,
// packaging: "plastic",
// stock: 68000.00,
// threshold: 5000,
// ceiling: 20000,
// unit: "kg",
// amount: 6800,
// status: "active"

const AddForm = props => {
  return (
    <Form>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input type="name" name="name" id="name" placeholder="input a name" />
      </FormGroup>
      <FormGroup>
        <Label for="brand">Brand</Label>
        <Input
          type="brand"
          name="brand"
          id="brand"
          placeholder="input a brand"
        />
      </FormGroup>
      <FormGroup>
        <Label for="packagingAmount">packagingAmount</Label>
        <Input
          type="packagingAmount"
          name="packagingAmount"
          id="packagingAmount"
          placeholder="input a packagingAmount"
        />
      </FormGroup>
      <FormGroup>
        <Label for="packaging">packaging</Label>
        <Input
          type="packaging"
          name="packaging"
          id="packaging"
          placeholder="input a packaging"
        />
      </FormGroup>
      <FormGroup>
        <Label for="stock">stock</Label>
        <Input type="stock" name="stock" id="stock" placeholder="input stock" />
      </FormGroup>
      <FormGroup>
        <Label for="threshold">threshold</Label>
        <Input
          type="threshold"
          name="threshold"
          id="threshold"
          placeholder="input a threshold"
        />
      </FormGroup>
      <FormGroup>
        <Label for="ceiling">ceiling</Label>
        <Input
          type="ceiling"
          name="ceiling"
          id="ceiling"
          placeholder="input a ceiling"
        />
      </FormGroup>
      <FormGroup>
        <Label for="measurement">measurement</Label>
        <Input
          type="measurement"
          name="measurement"
          id="measurement"
          placeholder="measurement"
        />
      </FormGroup>
      <FormGroup>
        <Label for="amount">amount</Label>
        <Input
          type="amount"
          name="amount"
          id="amount"
          placeholder="input amount"
        />
      </FormGroup>
      <FormGroup>
        <Label for="status">status</Label>
        <Input
          type="status"
          name="status"
          id="status"
          placeholder="input status"
        />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
};

export default AddForm;
