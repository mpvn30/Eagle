import React, { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  ModalFooter,
  Modal,
  ModalHeader,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

const Navi = props => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const initialFormState = {
    id: 0,
    name: "",
    brand: "",
    packagingAmount: "",
    packaging: "",
    stock: "",
    threshold: "",
    ceiling: "",
    unit: "",
    amount: "",
    status: ""
  };
  const [form, setForm] = useState(initialFormState);

  const handleInputChange = event => {
    const { name, value } = event.target;

    setForm({ ...form, [name]: value });
  };

  return (
    <div>
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="#">Home</a>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <a href="#">Library</a>
        </BreadcrumbItem>
        <Button color="danger" onClick={toggle}>
          {buttonLabel}
        </Button>
        <Modal isOpen={modal} toggle={toggle} className={className}>
          <ModalHeader toggle={toggle}>Modal title</ModalHeader>
          <Form>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="name"
                name="name"
                id="name"
                placeholder="input a name"
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="brand">Brand</Label>
              <Input
                type="brand"
                name="brand"
                id="brand"
                placeholder="input a brand"
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="packagingAmount">packagingAmount</Label>
              <Input
                type="packagingAmount"
                name="packagingAmount"
                id="packagingAmount"
                placeholder="input a packagingAmount"
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="packaging">packaging</Label>
              <Input
                type="packaging"
                name="packaging"
                id="packaging"
                placeholder="input a packaging"
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="stock">stock</Label>
              <Input
                type="stock"
                name="stock"
                id="stock"
                placeholder="input stock"
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="threshold">threshold</Label>
              <Input
                type="threshold"
                name="threshold"
                id="threshold"
                placeholder="input a threshold"
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="ceiling">ceiling</Label>
              <Input
                type="ceiling"
                name="ceiling"
                id="ceiling"
                placeholder="input a ceiling"
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="measurement">measurement</Label>
              <Input
                type="measurement"
                name="measurement"
                id="measurement"
                placeholder="measurement"
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="amount">amount</Label>
              <Input
                type="amount"
                name="amount"
                id="amount"
                placeholder="input amount"
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="status">status</Label>
              <Input
                type="status"
                name="status"
                id="status"
                placeholder="input status"
                onChange={handleInputChange}
              />
            </FormGroup>
            <Button onClick={() => props.addData(form)}>Submit</Button>
          </Form>
          <ModalFooter></ModalFooter>
        </Modal>
      </Breadcrumb>
    </div>
  );
};

export default Navi;
