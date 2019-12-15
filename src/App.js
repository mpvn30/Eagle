import React from 'react';
import Cards from './components/Card';
import Navi from './components/Nav';
import Label from './components/Label';
import Data from './components/data';

function App() {
  return (
    <div className="App">
     <Navi /> 
     <Label />
     <Cards data={Data} />
    </div>
  );
}

export default App;
