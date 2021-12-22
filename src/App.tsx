import React, {useState} from 'react';
import './App.css';

// named import -> {}
// from ./path , without extensions .ts, .tsx, .js, .jsx



// export weil es eventuell exportiert wird
export function App() {

  const[list , setList] = useState<String[]>([]);
  const[inputData , setInputData] = useState("");
  const [textWasPutInBar , setTextWasPutInBar] = useState(false);
  const [showDeleteButton , setShowDeleteButton] = useState(false);

  
  function getReady(){
    hideInitialText();
    setShowDeleteButton(false);
  }

  function handleInputData(event: React.ChangeEvent<HTMLInputElement>){ //abgefahrener Typ = Instanz
    setInputData(event.target.value); //ist jetzt ein String und keine Instanz mehr - auf String runtergebrochen
    showAddButton();
  }

  function handleAddItem(){
    const newList = [...list , inputData]  //array-spread:bisherige Liste wird ausgepackt mit ... und die inputData angehängt
    setList(newList);
    setInputData(""); //erase inputfield afterwards
    
  }

  function removeItemFromList(index: number){
    const newList = [];                 //newList wird angelegt, leer
      for (let i = 0; i < list.length; i++){
        if (index != i){ //wenn der index ungleich der Laufvariable, dann setze das Item auf die newList - d.h. alle nicht angeklickten Items werden wieder auf die newList gesetzt
          newList.push(list[i]); //pushe das item mit dem Index i aus der list in die newList
        }
      }
      setList(newList);     //mache newList zur list
  }




  function hideInitialText(){
    setInputData(""); //erase initial message "type item here"
  }

  function showAddButton(){
    setTextWasPutInBar(true);
  }

  function handleShowDeleteButton(){
    if(showDeleteButton === false){
      setShowDeleteButton(true);
    }
    else if(showDeleteButton === true){
      setShowDeleteButton(false);
    }
    
  }



//{}= Expression in JS
//{}= Objekt im React-Syntax


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
          onClick={ function blablafooname () { getReady() } }
          onChange={ function blablaname(evt) { handleInputData(evt) } } //wenn onchange getriggert wird, dann dann wird eine function erstellt, die die Variable evt definiert und diese wird vom browser als ChangeEvent Objekt initilisiert
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

        {/* button wird erst angezeigt wenn etwas eingegeben wurde ins Feld */}
        {/*textWasPutInBar && <input type="button" value="ADD" className="button" onClick={handleAddItem}/>*/} {/* // ist das selbe wie der button unten bloß reactish */}
        {textWasPutInBar && <button className="button" onClick={handleAddItem}>ADD</button>}
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
      <div className="list">
        {
          list.map(function transformStringToLi(item, index) {
            return <div>
            
            
            <span className={showDeleteButton === false? "item" : "toggle"} onClick={handleShowDeleteButton} >{item} </span>



            {showDeleteButton && <button className="deleteButton" onClick={ function foo() {removeItemFromList(index)}} >X</button>}
            </div>
          })
          // list.map(item => (
          //   <li>
          //     {item}
          //     <button>X</button>
          //   </li>
          // ))
        }
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

{} = expression (wert) (innerhalb der JS Syntax)
{} = erzeuge ein Objekt (innerhalb der React Syntax)

*/