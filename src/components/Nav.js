import React, {useState} from "react";
import { Breadcrumb, BreadcrumbItem, Button, ModalFooter, Modal, ModalHeader, Form, FormGroup, Label, Input } from "reactstrap";

const Navi = props => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="#">Home</a>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <a href="#">Library</a>
        </BreadcrumbItem>
        <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
        <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
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
        <ModalFooter>
        </ModalFooter>
      </Modal>
      </Breadcrumb>
    </div>
  );
};

export default Navi;
