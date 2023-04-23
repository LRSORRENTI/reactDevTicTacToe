// The code in App.js creates a component. 
// In React, a component is a piece of reusable
//  code that represents a part of a user interface.

import { useState } from "react";

 
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




  // import { useState } from "react";

  // export default function Board() {
  //   const [squares, setSqaures] = useState(Array(9).fill(null))

  // return (
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

  // function Square({value, onSquareClick}){
  //   return (
  //     <button className="square" onClick={onSquareClick}>
  //       {value}
  //     </button>
  //   )
  // }

  /* 
  Now we need to connect the onSquareClick prop to 
  // a function in the Board component, that we'll name 
  handleClick, to connect onSquareClicj to handleClick, 
  we pass a function to the onSquareClick prop of the 
  first Square component
  */

  
  // import { useState } from "react";

  // export default function Board() {
  //   const [squares, setSquares] = useState(Array(9).fill(null))
// We need to define the handleClick function below that 
// we're passing in to onSquareClick: 
// function handleClick(){
  // this handleClick function will make a copy of 
  // the squares array, we saved that copy to the 
  // variable below: nextSquares, remember, .slice()
  // creates a shallow copy of an array, meaning 
  // it creates a new array with the same elements of 
  // the original, but the original array are still 
  // referring to the same array in memory
  // const nextSquares = squares.slice();
  // then the handleClick updates the nextSquares 
  // array to add 'X' at the zero index
  // nextSquares[0] = "X";
  // then finally below we call the setSquares function 
  // to let React know that the component state has 
  // changed, this will trigger a re-render of the 
  // components that use squares state(Board) as well 
  // as the Square components that make up the board
  // setSquares(nextSquares)
  // JavaScript supports closures which means
  //  an inner function (e.g. handleClick) 
  //  has access to variables and functions
  //   defined in a outer function (e.g. Board).
    
  //   The handleClick function can read the 
  //   squares state and call the setSquares
  //    method because they
  //  are both defined inside of the Board function.

  /*
  Now we can add 'X's to the board, but only to that 
  upper left square, our handleClick function is 
  hardcoded to update the index for the upper left 
  square below 
        <Square value={squares[0]} onSquareClick={handleClick} /> 
   We can now add an argument 'i' to handlClick that 
   takes the index of the square to update 

  */


// }

// export default function Board(){
//   const [squares, setSquares] = useState(Array(9).fill(null));

//   function handleClick(i){
//     const nextSquares = squares.slice();
//     nextSquares[i] = "X";
//     setSquares(nextSquares)
//   }

//   return (
//     <>
//     <div className="board-row">
//       <Square value={squares[0]} onSquareClick={handleClick(0)} /> 
//       <Square value={[squares[1]]} /> 
//       <Square value={[squares[2]]} /> 
//     </div>
//     <div className="board-row">
//       <Square value={[squares[3]]} /> 
//       <Square value={[squares[4]]} /> 
//       <Square value={[squares[5]]} /> 
//     </div>
//     <div className="board-row">
//       <Square value={[squares[6]]} /> 
//       <Square value={[squares[7]]} /> 
//       <Square value={[squares[8]]} /> 
//     </div>
//   </>
//     );
//   }
// console.log(1)

/* 
Now we have a different error message: 

Too many re-renders. React limits the number 
of renders to prevent an infinite loop.

Why didn't this happen earlier? 

When we passed onSquareClick={handleClick}, we 
passed in the handleClick function as a prop, we 
were not actually calling it !

But now we're calling that function right away, 
notice the parentheses in handleClick(0), that's why 
it runs early, we don't want this handleClick to 
fire before the user clicks!

One way we could fix this is creating a func called 
handleFirstSquareClick for handleClick(0), 
handleSecondSquareClick for handleClick(1) etc.. 
all the way until we get to 8, but defining 9 
total functions for each individual square is not 
ideal, there's usually a simpler, less verbose, 
more concise solution

export default function Board() {
  // ...
  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        // ...
  );
}

Notice the new () => syntax. Here, () => handleClick(0) 
is a arrow func, when the square is clicked, the code following 
the => executes, handleClick(0)

So now we need to update the other eight squares to 
call handleClick from the arrow funcs we pass, making 
sure the argument for each call of handleClick 
corresponds to the correct square

*/


// function Square({value, onSquareClick}){
//   return (
//     <button className="square" onClick={onSquareClick}>
//       {value}
//     </button>
//   )
// }


// export default function Board(){
//   const [squares, setSquares] = useState(Array(9).fill(null));

//   function handleClick(i){
//     const nextSquares = squares.slice();
//     nextSquares[i] = "X";
//     setSquares(nextSquares)
//   }

// return (
//   <>
//     <div className="board-row">
//       <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
//       <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
//       <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
//     </div>
//     <div className="board-row">
//       <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
//       <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
//       <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
//     </div>
//     <div className="board-row">
//       <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
//       <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
//       <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
//     </div>
//   </>
// )
// }


/* 
We can now add X to any place on the board by 
clicking on them, but the key difference is that now 
all state management is handled by the Board component

Now that your state handling is in 
the Board component, the parent Board 
component passes props to the child
 Square components so that they can be 
 displayed correctly. 
 
 When clicking on a Square,
  the child Square component now 
  asks the parent Board component
   to update the state of the board.
   
   When the Board’s state changes, 
   both the Board component and every 
   child Square re-renders automatically.
    Keeping the state of all squares in
     the Board component will allow it 
     to determine the winner in the future.

Let’s recap what happens when a
 user clicks the top left square
  on your board to add an X to it:

  1. Clicking on the upper left square runs
   the function that the button received 
   as its onClick prop from the Square. 
   The Square component received that 
   function as its onSquareClick prop 
   from the Board. The Board component 
   defined that function directly 
   in the JSX. It calls handleClick 
   with an argument of 0.

  2. handleClick uses the argument 
  (0) to update the first 
  element of the squares array from null to X.

  3. The squares state of the Board
   component was updated,
    so the Board and all of
     its children re-render.
     This causes the value prop 
     of the Square component 
     with index 0 to change from null to X.

     NOTE: The DOM <button> element’s onClick 
     attribute has a special meaning to React 
     because it is a built-in component.
      For custom components like Square, 
      the naming is up to you.
      
      You could give any name to the 
      Square’s onSquareClick prop or
       Board’s handleClick function, 
       and the code would work the same. 
       In React, it’s conventional to use 
       onSomething names for props which 
       represent events and handleSomething 
       for the function definitions which handle 
       those events.

*/

/* 

Why immutability is important: 

Note how with handleClick we call.slice() create a 
copy of the squares array, instead of modifying 
the existing array 

The reason this is important to note has to do 
with the concept of IMMUTABILITY, this concept 
is critical to digest and absorb, it's a concept 
applicable across programming

There are two approaches to changing data: 

1. Mutate the data directly by changing the value's 
of said data

2. Replace the data with a new copy with the 
desired changes

let's look at an example of mutating the squares 
array:

*/

// const squares = [null, null, null, null, null, null, null, null, null];
// squares[0] = 'X';

// Now `squares` is ["X", null, null, null, null, null, null, null, null];
// We've directly mutated the array

// And here is what it would look like 
// if you changed data without mutating 
// the squares array:

// const squares = [null, null, null, null, null, null, null, null, null];
// const nextSquares = ['X', null, null, null, null, null, null, null, null];
// Now `squares` is unchanged, but `nextSquares` first element is 'X' rather than `null`

// We've achieved the same but without mutating the 
// original array data directly, and in this we gain 
// several benefits

/*
Immutability makes complex features much easier 
to implement, later in this project we'll implement 
a 'time travel' feature to review the game's history 
and 'jump back in time' to previous moves 

This kind of functionality is not specific to games 
like tic-tac-toe, the ability to revert to previous 
states is common for applications these days, and 
avoiding directly mutating the original data, helps 
us achieve this goal. We can keep previous versions 
of data intact, to re-use them later if need be

*/

/* 

Another benefit of immutability, is that by default 
every child component re-renders automatically,
when the state of a parent component changes. 

This includes even the child components that weren't 
affected by the change, although re-rendering by itself 
is not noticebale to the end user, we should do our best 
to avoid re-rendering whenever possible, it's a good 
practice to skip re-rendering part of the tree if it 
was not clearly affected by it for performance reasons

Immutability makes it very cheap for components to compare 
whether or not their data has been mutated or not. 

Here's a link to view how react chooses when to 
re-render here: https://www.react.dev/reference/react/memo



*/ 

/*

TAKING TURNS

Now let's fix the major defect in this game as it is
right now, how do we insert "O"'s on the board.

You'll set the first move to be "X" by default, 
let's keep track of this by adding another piece of 
state to the Board component:

function Board() {

     const [xIsNext, setXIsNext] = useState(true);
     // The above is our new piece of state

     const [squares, setSquares] = useState(Array(9).fill(null));

}

Each time a player moves, xIsNext(our boolean) is 
flipped to determine which player goes next and the 
game's state will be saved

We update the Board's handleClick() function to flip 
the value of xIsNext

export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  return (
    //...
  );
}



*/

function Square({value, onSquareClick}){
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  )
}


const squares = [null, null, null, null, null, null, null, null, null];
const nextSquares = ['X', null, null, null, null, null, null, null, null];

export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  )
  }

/* 

Now as we click from one square to another, we see 
it does alternate from "X"'s to "O"'s

But we have a problem, if we click on a square that's 
already been clicked and is displaying an "X" or "O"

We see the behavior is that the square keeps changing 
back and forth "X" to "O", "O" to "X" on every click 
event

*/
