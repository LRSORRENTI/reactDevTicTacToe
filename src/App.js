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

export default function Board() {
  return (
    <>
    <h1>TicTacToe</h1>
      <div className="board-row">
        <button className="square">1</button>
        <button className="square">2</button>
        <button className="square">3</button>
      </div>
      <div className="board-row">
        <button className="square">4</button>
        <button className="square">5</button>
        <button className="square">6</button>
      </div>
      <div className="board-row">
        <button className="square">7</button>
        <button className="square">8</button>
        <button className="square">9</button>
      </div>
    </>
  );
}