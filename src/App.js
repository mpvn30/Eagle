import React from "react";
import Cards from "./components/Card";
import Navi from "./components/Nav";
import Label from "./components/Label";
import Data from "./components/data";
import AddForm from "./components/AddForm";
import EditForm from "./components/EditForm";

function App() {
  return (
    <div className="App">
      <Navi />
      <Label />
      <Cards data={Data} />
      <AddForm />
      <EditForm />
    </div>
  );
}

export default App;
