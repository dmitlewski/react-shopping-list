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

        {/* wenn es ein event e gibt, dann trigger diese funktion und übergib den wert von e */}
        <input
          type="text"
          value={inputData}
          placeholder={"type item here.."}
          className="textBar"
          onClick={ function() { getReady() } }
          onChange={ function blablaname(evt) { handleInputData(evt) } } //wenn onchange getriggert wird, dann dann wird eine function aufgeruf, die die Variable evt definiert und diese wird vom browser als ChangeEvent Objekt initilisiert
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
        {/*fieldClicked && <input type="button" value="ADD" className="button" onClick={handleAddItem}/>*/}
        {fieldClicked && <button className="button" onClick={handleAddItem}>ADD</button>}
      </div>

      {/* this is what we want */}
      {/* <ul>
        <li>foo</li>
        <li>bar</li>
        <li>baz</li>
      </ul>*/}
      {/*<ul className="list"> { ["asdf", "foo"] } </ul>*/}
      {/*<ul className="list"> { [<li>asdf</li>, <li>foo</li>] } </ul>*/}
      {/*<ul className="list">{list}</ul>*/}
      <ul className="list">
        {
          list.map(function transformStringToLi(item, _index) {
            return <li>{item}  <button onClick={/*TODO*/}>X</button>  </li>;
          })
          // list.map(item => (
          //   <li>
          //     {item}
          //     <button>X</button>
          //   </li>
          // ))
        }
      </ul>

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