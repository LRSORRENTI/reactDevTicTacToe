// The code in App.js creates a component. 
// In React, a component is a piece of reusable
//  code that represents a part of a user interface.
 
//  Components are used to render, manage, 
//  and update the UI elements in your application. 
 
//  Let’s look at the component
//  line by line to see what’s going on:

// export default function Square() {
//   return <button className="square">X</button>;
// }

// The first line defines a function called Square. 
// The export JavaScript keyword makes this 
// function accessible outside of this file. 

// The default keyword tells other files using your
//  code that it’s the main function in your file

// The second line returns a button.
//  The return JavaScript keyword means 
//  whatever comes after is returned as 
//  a value to the caller of the function.
 
//  <button> is a JSX element. 
//   A JSX element is a combination of 
//   JavaScript code and HTML tags that
//    describes what you’d like to display. 
//    className="square" is a button property
//     or prop that tells CSS how to style the button.
//      X is the text displayed inside of the 
//      button and </button> closes the JSX 
//      element to indicate that any following 
//      content shouldn’t
//  be placed inside the button.

// Building the board 
// Let’s get back to App.js. 
// This is where you’ll spend
//  the rest of the tutorial.

// Currently the board is only a 
// single square, but you need nine! 
// If you just try and copy
//  paste your square to make 
//  two squares like this:

// export default function Square() {
//   return <button className="square">X</button><button className="square">X</button>;
// }

// You’ll get this error:

// Console
// /src/App.js: Adjacent JSX 
// elements must be wrapped in an 
// enclosing tag. Did you want a 
// JSX fragment <>...</>?

// React components need to return a
//  single JSX element and not multiple
//   adjacent JSX elements like two buttons.
  
//   To fix this you can use fragments 
//   (<> and </>) to wrap multiple 
//   adjacent JSX elements like this:

// export default function Square() {
//   return (
//     <>
//       <button className="square">X</button>
//       <button className="square">X</button>
//     </>
//   );
// }

// Oh no! The squares are all in a single line, 
// not in a grid like you need for our board.

// To fix this you’ll need to group your 
// squares into rows with divs and add some
//  CSS classes. While you’re at it, 
//  you’ll give each square a number
//   to make sure you know where each square 
//   is displayed.

// In the App.js file, update the
//  Square component to look like this:

// export default function Board() {
//   return (
//     <>
//     <h1>TicTacToe</h1>
//       <div className="board-row">
//         <button className="square">1</button>
//         <button className="square">2</button>
//         <button className="square">3</button>
//       </div>
//       <div className="board-row">
//         <button className="square">4</button>
//         <button className="square">5</button>
//         <button className="square">6</button>
//       </div>
//       <div className="board-row">
//         <button className="square">7</button>
//         <button className="square">8</button>
//         <button className="square">9</button>
//       </div>
//     </>
//   );
// }
// Passing data through props:

// Next, you’ll want to change 
// the value of a square from empty to “X” 
// when the user clicks on the square.

// With how you’ve built the board so
//  far you would need to copy-paste
//   the code that updates the square
//    nine times
//    (once for each square you have)! 
//    Instead of copy-pasting, React’s component 
//    architecture allows you to create a
//     reusable component to avoid messy, duplicated code.

// First, you are going to copy the 
// line defining your first square (<button className="square">1</button>)
//  from your Board component into a new Square component:

//  function Square(){
//  return (
//     <>
//     <button className="square">1</button>
//     </>
//   )
// }

// Then you’ll update the Board component to
//  render that Square component using JSX syntax:

// export default function Board(){
//   return(
//     <>
//         <div className="board-row">
//         <Square />
//         <Square />
//         <Square />
//       </div>
//       <div className="board-row">
//         <Square />
//         <Square />
//         <Square />
//       </div>
//       <div className="board-row">
//         <Square />
//         <Square />
//         <Square />
//       </div>
//     </>
//   )
// }

// So now our Board is rendered in the DOM like:
// 1 1 1
// 1 1 1 
// 1 1 1

// Oh no! You lost the numbered 
// squares you had before.
//  Now each square says “1”. 
 
//  To fix this, you will use props
//   to pass the value each square
//    should have from the parent 
//    component (Board) to its child (Square).

// Update the Square component to
//  read the value prop that 
//  you’ll pass from the Board:


// function Square({value}){
//   return (
//      <>
//      <button className="square">1</button>
//      </>
//    )
//  }
 
//  You wanted to render the JavaScript
//   variable called value from your component,
//    not the word “value”. To “escape into
//     JavaScript” from JSX, you need curly braces.
//   Add curly braces around value in JSX like so:

// function Square({value}) {
//   return <button className="square">{value}</button>;
// }


// export default function Board(){
//   return(
//     <>
//         <div className="board-row">
//         <Square value={"X"}/>
//         <Square />
//         <Square />
//       </div>
//       <div className="board-row">
//         <Square />
//         <Square />
//         <Square />
//       </div>
//       <div className="board-row">
//         <Square />
//         <Square />
//         <Square />
//       </div>
//     </>
//   )
// }

// As of right now, the code above is rendering an 
// empty board except for the first space, that's 
// because we passed in "X" as the value for that 
// Square

// Making an interactive component:

// Let’s fill the Square component with
//  an X when you click it.
 
//  Declare a function called 
//  handleClick inside of the Square.
 
//  Then, add onClick to the props of the button
//  JSX element returned from the Square:

// function Square({value}) {
//   function handleClick() {
//     console.log('clicked!');
//   }

//   return (
//     <button
//       className="square"
//       onClick={handleClick}
//     >
//       {value}
//     </button>
//   );
// }

// export default function Board(){
//   return(
//     <>
//         <div className="board-row">
//         <Square value={"X"}/>
//         <Square />
//         <Square />
//       </div>
//       <div className="board-row">
//         <Square />
//         <Square />
//         <Square />
//       </div>
//       <div className="board-row">
//         <Square />
//         <Square />
//         <Square />
//       </div>
//     </>
//   )
// }

// If you click on a square now,
//  you should see a log saying "clicked!" 
//  in the Console tab of the browser
  
//   Clicking the square more than
//    once will log "clicked!" again.
//     Repeated console logs with the
//      same message will not create more
//       lines in the console. 
      
//       Instead, you will see an
//        incrementing counter next 
// //        to your first "clicked!" log.

// For the next setPriority, we'll want to 
// make sure each Square component will 
// "remmember" if it's been clicked or not, and 
// fill it in with an "X"

// For components to "remmember" things we use a 
// concept known as STATE

// React includes a special built-in function called 
// "useState", we call useState from a component where 
// we want it to remember things. Let's store the 
// current value of Square in state, and change it when 
// onClick event fires, when the grid get's clicked 

// In order to make use of useState we need to import
// it, like you would if you were bringing in any 
// kind of module

// import { useState } from "react";

// Now that we have useState imported, 
// remove the {value} parameter from 
// Square, and we use a special 
// syntax to utilize useState, 


// function Square({value}) {
//   function Square(){
// const [valueAsStateVar, setValueSetterFunc] = useState(null);
// valueAsStateVar stores the value, and setValueSetterFunc
// is a function that will be used to change the valueAsStateVar
// value, the null passed in to useState is used as an initial 
// value for the state variable, so value initially begins as null  

// and since the Square component no longer accepts 
// props anymore, we remove the  <Square value={"X"}/>
// we added below and change it to just <Square />

// function handleClick() {
  // Now you’ll change Square to display an “X”
  //  when clicked. Replace the 
  //  console.log("clicked!"); 
  //  event handler with setValue('X');. 
  // Now your Square component looks like this:
    // setValueSetterFunc("X");
    // by calling the setter function from 
    // the onClick handler, handleClick, 
    // we tell React to re-render that 
    // square whenever the button is clicked
    // after the update the Square's valueAsStateVar
    // becomes "X", 
//     console.log('clicked!');
//   }

//   return (
//     <button
//       className="square"
//       onClick={handleClick}
//     >
//       {valueAsStateVar}
//     </button>
//   );
// }

// export default function Board(){
//   return(
//     <>
//         <div className="board-row">
//        <Square />
//         <Square />
//         <Square />
//       </div>
//       <div className="board-row">
//         <Square />
//         <Square />
//         <Square />
//       </div>
//       <div className="board-row">
//         <Square />
//         <Square />
//         <Square />
//       </div>
//     </>
//   );
// }

 // And in the React developer tools in the 
 // devtools, a few options over from console, 
// and memory tabs, we can see our React squares, 
// the squares that we clicked have: 

// new entry: ""
// hooks 1 State: null
//  this is on an empty square,
// hooks 1 State: "X"
//  this is on a clicked square
// rendered by

// Board
// createRoot()
// react-dom@18.2.0

// =======================
// COMPLETING THE GAME 
// =======================

// By this point we've learned the basic building 
// blocks for the tic-tac-toe game, to complete 
// the game we need to alternate placing "X" and "O"
// to determine a winner 

// How do we determine a winner?

// ================
// LIFTING STATE UP 
// ================

// Currently each Square component maintains a 
// part of the games state, for our game to 
// determine a winner, we need to somehow implement 
// a way to check the state of all nine Square components 

/* It may seem like one way to approach this 
would be to "ask" each square for it's 
state. This approach is technically possible 
in React, we at React heavily discourage this approach
because of three factors: 

1. Your code becomes much more difficult to 
understand 

2. Your code becomes much more susceptible to 
bugs

3. Your code becomes much more challenging to refactor 
in the future

What's the ideal approach to determining a winner then?

We should store the game's state in the parent 
Board component, instead of in each Square

The parent Board component can tell each square what to 
display by passing in a property, or prop 

Just like we did with Square where we set the value 
to be a number. or "X" / "O"

To collect data from multiple child components, 
or to have multiple child components communicate 
with each other, we declare the shared in the parent 
Board component, and that parent Board component 
will pass that state down to the children via 
props, this keeps the child Square components nice 
and *nsync with each other, and the parent Board 
component

Lifting state into a parent component is common 
when React components are refactored 

Let's try this out, edit the Board component
 so that it declares a state variable named 
 squares, which defaults to an array 
 of 9 nulls, 1 for each empty square

*/

// import { useState } from "react";

// export default function Board() {
//   const [squares, setSqaures] = useState(Array(9).fill(null))
  // Array(9).fill(null) will create an array, with 
  // nine elements and sets each of them to null, the 
  // useState() call around it declares a state variable
  // that's initially set to that array, each entry in 
  // that array corresponds to the value of a square, 
  // when we fill the board in later, the squares array 
  // above will look like: 

  // ['O', 'null', 'X', 'X', 'X', 'X', 'O', 'O', null, null]

  // Now the Board component needs to pass the value
  // prop down to each square that it renders
  //   return (
  //   <>
  //   <div className="board-row">
  //     <Square value={[squares[0]]} /> 
  //     <Square value={[squares[1]]} /> 
  //     <Square value={[squares[2]]} /> 
  //   </div>
  //   <div className="board-row">
  //     <Square value={[squares[3]]} /> 
  //     <Square value={[squares[4]]} /> 
  //     <Square value={[squares[5]]} /> 
  //   </div>
  //   <div className="board-row">
  //     <Square value={[squares[6]]} /> 
  //     <Square value={[squares[7]]} /> 
  //     <Square value={[squares[8]]} /> 
  //   </div>
  // </>
  //   );
  // }

  // Now we can edit the Square component to receive the 
  // value prop from the Board component, this requires 
  // removing the Square component's own stateful tracking 
  // of value and the button's onClick prop: 

  // function Square({value}) {
  //   return <button className="square">{value}</button>;
  // }

  // function Square({value}) {
  //   return <button className="square">{value}</button>;
  // }

// Now our code should look like: 




  import { useState } from "react";

  export default function Board() {
    const [squares, setSqaures] = useState(Array(9).fill(null))

  return (
    <>
    <div className="board-row">
      <Square value={[squares[0]]} /> 
      <Square value={[squares[1]]} /> 
      <Square value={[squares[2]]} /> 
    </div>
    <div className="board-row">
      <Square value={[squares[3]]} /> 
      <Square value={[squares[4]]} /> 
      <Square value={[squares[5]]} /> 
    </div>
    <div className="board-row">
      <Square value={[squares[6]]} /> 
      <Square value={[squares[7]]} /> 
      <Square value={[squares[8]]} /> 
    </div>
  </>
    );
  }

  // And our Board should be empty

  // But now each square will receive a value 
  // prop that will be 'X', 'O', or null for 
  // empty sqaures 

  /* 
  Now we need to change what happens when a Square 
  is clicked, the Board component now maintains 
  which squares are filled, we need to create a 
  way for the a Square component to update the 
  Boards state, since State is private to 
  the component which defines it, we can't ever 
  directly update Board's state from a Square component

  */ 

  /* 
  Instead we pass down a function from the Board 
  parent component to the Square component, and 
  we'll have a Square call that function when that 
  particular Square is clicked, we can call this 
  function onSquareClick:
  */

  // function Square({ value }) {
  //   return (
  //     <button className="square" onClick={onSquareClick}>
  //       {value}
  //     </button>
  //   );
  // }

  // Now that we have that we add that function to 
  // Square component props: 

  function Square({value, onSquareClick}){
    return (
      <button className="square" onClick={onSquareClick}>
        {value}
      </button>
    )
  }