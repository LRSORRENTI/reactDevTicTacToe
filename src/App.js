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


function Square({value}){
  return (
     <>
     <button className="square">{value}</button>
     </>
   )
 }
 
//  You wanted to render the JavaScript
//   variable called value from your component,
//    not the word “value”. To “escape into
//     JavaScript” from JSX, you need curly braces.
//   Add curly braces around value in JSX like so:


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
