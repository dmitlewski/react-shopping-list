import React, {useState} from 'react';
import './App.css';

// named import -> {}
// from ./path , without extensions .ts, .tsx, .js, .jsx
import {Welcome} from './Welcome'
import {Game} from './Game'


// export weil es im index.tsx importiert wird
export function App() {
  const[list , setList] = useState([]);
  const[inputData , setInputData] = useState("type item here");
  

  function handleInputData(event: string){
    setInputData(event);
  }

  function handleAddItem{
    const newList = [list , {inputData}]
    setList(newList);
    setInputData(""); //erase inputfield afterwards
  }




  return (
    <div className="App">
      <p>Welcome to the shopping list</p>
      <div className ="input">
        <input type="text" value={inputData} onChange={(e) =>handleInputData(e.target.value)}/>       {/* wenn es ein event e gibt, dann trigger diese funktion und übergib den wert von e */}
        <input type="button" value="ADD" onClick={handleAddItem}/>
      </div>

      <div className="list">
        {/* list be here */}
      </div>
    </div>
  );
}
