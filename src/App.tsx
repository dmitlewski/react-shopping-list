import React, {useState} from 'react';
import './App.css';

// named import -> {}
// from ./path , without extensions .ts, .tsx, .js, .jsx



// export weil es eventuell exportiert wird
export function App() {
  const[list , setList] = useState<String[]>([]);
  const[inputData , setInputData] = useState("");
  const addText = "ADD";
  const [fieldClicked , setFieldClicked] = useState(false);
  
  function getReady(){
    hideInitialText();
    displayAddButton();

  }

  function handleInputData(event: React.ChangeEvent<HTMLInputElement>){ //abgefahrener Typ = INstanz
    setInputData(event.target.value); //ist jetzt ein String
  }

  function handleAddItem(){

    const newList = [...list , inputData] //array-spread
    setList(newList);
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

        <input type="text" value={inputData} placeholder={"type item here.."} className="textBar" onClick={getReady} onChange={function blaNamebla (e) {handleInputData(e)}}/>       {/* wenn es ein event e gibt, dann trigger diese funktion und übergib den wert von e */}
        {fieldClicked&&<input type="button" value="ADD" className="button" onClick={handleAddItem}/>} {/* button wird erst angezeigt wenn man ins Feld klickt */}
      </div>

      <div className="list">
        {/* list be here */}
      </div>
    </div>
  );
}
