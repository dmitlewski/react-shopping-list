import React, {useState} from 'react';
import './App.css';

// named import -> {}
// from ./path , without extensions .ts, .tsx, .js, .jsx
import {Welcome} from './Welcome'
import {Game} from './Game'


// export weil es im index.tsx importiert wird
export function App  () {
  const[list , setList] = useState([]);
  const[inputData , setInputData] = useState("test");
  

  function handleInputData(event : Event ){
    setInputData(event);
  }

  function handleAddItem(){
    const newList = [list , {inputData}]
    setList(newList);
    setInputData(""); //erase inputfield afterwards
  }




  return (
    <div className="App">
      <div className ="input">
        <input type="text" value={inputData} onChange={handleInputData(event)}/>
        <input type="button" value="ADD" onClick={handleAddItem()}/>
      </div>

      <div className="list">
        {/* list be here */}
      </div>
    </div>
  );
}
