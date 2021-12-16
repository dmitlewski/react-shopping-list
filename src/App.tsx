import React, {useState} from 'react';
import './App.css';

// named import -> {}
// from ./path , without extensions .ts, .tsx, .js, .jsx



// export weil es eventuell exportiert wird
export function App() {
  const[list , setList] = useState([]);
  const[inputData , setInputData] = useState("type item here...");
  const addText = "ADD";
  const [fieldClicked , setFieldClicked] = useState(false);
  
  function getReady(){
    hideInitialText();
    displayAddButton();

  }

  function handleInputData(event: string){
    setInputData(event);
  }

  function handleAddItem(){
    const newList = [list , {inputData}]
    // setList(newList); not working
    setInputData(""); //erase inputfield afterwards
  }

  function hideInitialText(){
    setInputData(""); //erase initial message "type item here"
  }

  function displayAddButton(){
    setFieldClicked(true);
  }


  return (
    <div className="App">
      <p className = "welcomeTitle" >Welcome to the shopping list</p>
      <div className ="input">
        {/* wenn es ein event e gibt, dann trigger diese funktion und übergib den wert von e */}
        <input
          type="text"
          value={inputData}
          className="textBar"
          onClick={ function() { getReady() } }
          onChange={ function(e) { handleInputData(e.target.value) } }
          // onClick={getReady}
          // onChange={e => setInputData(e.target.value)}
        />
        {/*
          React.createElement("input", {
            type: "text",
            value: inputData,
            className: "textBar",
            onClick: getReady,
            onChange: (e) => handleInputData(e.target.value),
          })
        */}

        {/* button wird erst angezeigt wenn man ins Feld klickt */}
        {fieldClicked && <input type="button" value="ADD" className="button" onClick={handleAddItem}/>}
      </div>

      <div className="list">
        {/* list be here */}
      </div>
    </div>
  );
}


/*

var a = 5;
let b = 6;
const c = 7;

function myFunction(d) {
  const e = d + 1;
  const a = 1;  // shadows outer a
  console.log(a, b, c, d, e)  // 1, 6, 7, 8, 9
}

function myOtherFunction(d) {
  const e = d + 1000;
  console.log(a, b, c, d, e)  // 5, 6, 7, 8, 1008
}

myFunction(8)
myOtherFunction(8)

*/