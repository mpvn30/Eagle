import React from "react";
import { Breadcrumb, BreadcrumbItem, Button } from "reactstrap";

const Navi = props => {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="#">Home</a>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <a href="#">Library</a>
        </BreadcrumbItem>
        <Button>Add Data</Button>
      </Breadcrumb>
    </div>
  );
};

export default Navi;
