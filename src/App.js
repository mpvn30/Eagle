import React, { useState } from "react";
import { Route } from "react-router-dom";
import Cards from "./components/Card";
import Navi from "./components/Nav";
import Label from "./components/Label";
import EditForm from "./components/EditForm";
import "./components/styles.css"

function App() {
  const [editing, setEditing] = useState(false)

  const initialFormState = {
    id: null,
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
  const [currentData, setCurrentData] = useState(initialFormState)

  const [data, setData] = useState([
    {
      id: 0,
      name: "All Purpose Flour",
      brand: "Pillsbury",
      packagingAmount: 10.0,
      packaging: "plastic",
      stock: 68000.0,
      threshold: 5000,
      ceiling: 20000,
      unit: "kg",
      amount: 6800,
      status: "active"
    },
    {
      id: 1,
      name: "Black Pepper",
      brand: null,
      packagingAmount: 5.0,
      packaging: "plastic",
      stock: 1000.0,
      threshold: 5000,
      ceiling: 20000,
      unit: "kg",
      amount: 200,
      status: "active"
    }
  ]);

  const addData = newData => {
    newData.id = data.length + 1;
    setData([...data, newData]);
  };

  const deleteData = id => {
    setData(data.filter(item => item.id !== id));
  };

  const editRow = newData => {
    setEditing(true)
  
    setCurrentData({  id: newData.id,
      name: newData.name,
      brand: newData.brand,
      packagingAmount: newData.packagingAmount,
      packaging: newData.packaging,
      stock: newData.stock,
      threshold: newData.threshold,
      ceiling: newData.ceiling,
      unit: newData.unit,
      amount: newData.amount,
      status: newData.status })
  }

  const updateData = (id, updatedData) => {
    setEditing(false)
  
    setData(data.map(item => (item.id === id ? updatedData : item)))
  }

  return (
    <div className="App">
      <Route exact path="/">
        <Navi
          addData={data => {
            addData(data);
          }}
        />
        <Label />
        <Cards data={data} delete={id => deleteData(id)} editRow={editRow} />
      </Route>
        <EditForm editing={editing}
        setEditing={setEditing}
        currentData={currentData}
        updateData={updateData} />
    </div>
  );
}

export default App;
