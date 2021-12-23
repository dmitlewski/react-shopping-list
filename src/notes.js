const myFunction = function withName(param1, param2) {
  doStuff()
}
// myFunction()
// withName()

// annonym
const myFunction = function(param1, param2) {
    doStuff()
}

const myFunction = (param1, param2) => {
    doStuff()
}


const add = (a, b) => {
  // multiple statements
  return a + b
}


const add = (a, b) =>
  // one expression
  a + b



const singleDiv = <div />
const singleDiv_ = React.createElement("div")

const thing =
  <div className="myDiv">
    <span>hello</span>
  </div>

const thing_ =
  React.createElement("div", {className: "myDiv"},
    React.createElement("span", {}, "hello")
  )
// {
//   "type": "div",
//   "key": null,
//   "ref": null,
//   "props": {
//     "className": "myDiv",
//     "children": {
//       "type": "span",
//       "key": null,
//       "ref": null,
//       "props": {
//         "children": "hello"
//       },
//       "_owner": null,
//       "_store": {}
//     }
//   },
//   "_owner": null,
//   "_store": {}
// }


[1,2,3,4,5,6,7,8,9,10]
  .filter(x => x > 5)
  .map(x => x * 10)
  .map(x => x + " chickens")
  .join(" and ")
// "60 chickens and 70 chickens and 80 chickens and 90 chickens and 100 chickens"





card1 = {
  color: "green",
  count: 2,
  shape: "wave",
  fill: "half",
}
card2 = {
  color: "blue",
  count: 2,
  shape: "wave",
  fill: "half",
}

const valid =
  (card1.shape === card2.shape && card2.shape === card3.shape
    || card1.shape !== card2.shape && card2.shape !== card3.shape
      && card1.shape !== card3.shape)
  &&
  (card1.color === card2.color && card2.color === card3.color
    || card1.color !== card2.color && card2.color !== card3.color
      && card1.color !== card3.color)
  &&
  (card1.fill === card2.fill && card2.fill === card3.fill
    || card1.fill !== card2.fill && card2.fill !== card3.fill
      && card1.fill !== card3.fill)
  &&
  (card1.count === card2.count && card2.count === card3.count
    || card1.count !== card2.count && card2.count !== card3.count
      && card1.count !== card3.count)


// operator precedence
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
if (x + 2 === 3 && y < 5)

  
  