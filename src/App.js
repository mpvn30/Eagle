import React from "react";
import { Route } from 'react-router-dom';
import Cards from "./components/Card";
import Navi from "./components/Nav";
import Label from "./components/Label";
import Data from "./components/data";
import EditForm from "./components/EditForm";


function App() {
  return (
    <div className="App">
      <Route exact path="/">
      <Navi />
      <Label />
      <Cards data={Data} />
      </Route>
      <Route path="/edit" component={EditForm}/>
    </div>
  );
}

export default App;
