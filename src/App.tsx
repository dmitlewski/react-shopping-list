import React, {useState} from 'react';
import './App.css';

// named import -> {}
// from ./path , without extensions .ts, .tsx, .js, .jsx



// export weil es im index.tsx importiert wird
export function App() {
  const[list , setList] = useState([]);
  const[inputData , setInputData] = useState("type item here");
  const addText = "ADD";
  const [fieldClicked , setFieldClicked] = useState(false);
  

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




  return (
    <div className="App">
      <p className = "welcomeTitle" >Welcome to the shopping list</p>
      <div className ="input">
        <input type="text" value={inputData} className="textBar" onClick={hideInitialText} onChange={(e) =>handleInputData(e.target.value)}/>       {/* wenn es ein event e gibt, dann trigger diese funktion und übergib den wert von e */}
        <input type="button" value="ADD" className="button" onClick={handleAddItem}/>
      </div>

      <div className="list">
        {/* list be here */}
      </div>
    </div>
  );
}
