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

import { useState } from "react";

// Now that we have useState imported, 
// remove the {value} parameter from 
// Square, and we use a special 
// syntax to utilize useState, 


// function Square({value}) {
  function Square(){
const [valueAsStateVar, setValueSetterFunc] = useState(null);
// valueAsStateVar stores the value, and setValueSetterFunc
// is a function that will be used to change the valueAsStateVar
// value, the null passed in to useState is used as an initial 
// value for the state variable, so value initially begins as null  

// and since the Square component no longer accepts 
// props anymore, we remove the  <Square value={"X"}/>
// we added below and change it to just <Square />

function handleClick() {
    console.log('clicked!');
  }

  return (
    <button
      className="square"
      onClick={handleClick}
    >
      {value}
    </button>
  );
}

export default function Board(){
  return(
    <>
        <div className="board-row">
       <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  )
}
