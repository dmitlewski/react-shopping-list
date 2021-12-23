// @ts-nocheck
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
    setTextWasPutInBar(false); /// evtl wieder rausnehmen!!!
  }

  function removeItemFromList(index: number){
    const newList = [];                 //newList wird angelegt, leer
      for (let i = 0; i < list.length; i++){
        if (index !== i){ //wenn der index ungleich der Laufvariable, dann setze das Item auf die newList - d.h. alle nicht angeklickten Items werden wieder auf die newList gesetzt
          newList.push(list[i]); //pushe das item mit dem Index i aus der list in die newList
        }
      }

      // [1,2,3,4,5,6,7,8].filter(   function(item) {  return item > 5  }   )
      // const newList = list.filter(   function(_item, i) { return index !== i }  )
      // const newList = list.filter(   (_item, i) => index !== i   )

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

  function handleKeyDownEnter(event: React.KeyboardEvent<HTMLInputElement>){
    if (event.key === 'Enter'){
      handleAddItem();
    } 
  }

  function clearList(){
    const newList: React.SetStateAction<String[]> = [];
    setList(newList); 
  }


//{}= Expression in JS
//{}= Objekt im React-Syntax


  return (
    <div className="App">
      <p className = "welcomeTitle" >Welcome to the shopping list</p>
      <div className ="input" >

        {/* wenn es ein event e gibt, dann trigger diese funktion und übergib den wert von e */}
        <input
          type="text"
          value={inputData}
          placeholder={"type item here.."}
          className="textBar"

          onClick={ function blablafooname(_clickEvent) { getReady() } }

          onChange={ function blablaname(changeEvent) { handleInputData(changeEvent) } } //wenn onchange getriggert wird, dann dann wird eine function erstellt, die die Variable evt definiert und diese wird vom browser als ChangeEvent Objekt initilisiert


          onKeyDown={    function foo2(keyDownEvent) { handleKeyDownEnter(keyDownEvent) }      }

          // onKeyDown={Semmelknödel} // Semmelknödel wird mit KeyDownEvent anstatt Semmel aufgerufen

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
        {textWasPutInBar && !showDeleteButton && <button className="addButton" onClick={handleAddItem}>Add</button>}
        {showDeleteButton && <button className="deleteAllButton" onClick={clearList}>Delete All</button>}

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
          list.map(function transformStringToSpan(item, index) {
            return (
              <li>
                <span
                  className={showDeleteButton === false? "itemStatic" : "itemWiggle"}
                  onClick={handleShowDeleteButton}
                  >{item}</span>
                {showDeleteButton && (
                  <button
                    className="deleteButton"
                    onClick={ function foo() {removeItemFromList(index)}}
                    >X</button>
                )}
              </li>
            )
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

{} = expression (wert) (innerhalb der JS Syntax)
{} = erzeuge ein Objekt (innerhalb der React Syntax)

*/