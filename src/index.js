import React from "react";
import ReactDOM from "react-dom";
// import Car from '/src/App.js'
const rootEl = document.getElementById("root");
// const myFirstElement = (
//   <section>
//     <h1>I am a header too</h1>

//     <div>
//       <h1>I am a header</h1>
//     </div>
//   </section>
// );

// ReactDOM.render(myFirstElement, document.getElementById("root"));

// Use of if statements

// const x = 5;
// let text = "Goodbye"

// if (x < 10) {
//   text = "Hello";
// }
// const myElement = <h1>{text}</h1>

// ReactDOM.render(myElement, document.getElementById("root"))

// Use ternary expressions instead.

// const x = 5;

// const myElement = <h1>{x < 10 ? "Hello" : "Goodbye"}</h1>

// ReactDOM.render(myElement, rootEl)

// Creating Class Components

// class Car extends React.Component {
//   render() {
//     return <h2>Hi, I'm devProMaleek, I'm learning React.</h2>
//   }
// }

// ReactDOM.render(<Car />, rootEl)

// Creating a Function Components

// function Car() {
//   return <h2>Hi, I'm devProMaleek, I'm learning React.</h2>
// }

// ReactDOM.render(<Car />, rootEl)

// Component Constructor

// class Car extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       color: 'red'
//     }
//   }
//   render() {
//     return <h2>I am a {this.state.color} car</h2>
//   }
// }

// ReactDOM.render(<Car />, rootEl)

// Props

// class Car extends React.Component {
//     render() {
//       return <h2>I am a {this.props.color} Car!</h2>
//     }
// }

// ReactDOM.render(<Car color="red"/>, rootEl)

// Components in a Component
// class Car extends React.Component {
//   render() {
//     return <h2>I am a 2021 Toyota Camry.</h2>;
//   }
// }

// class Garage extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Who lives in my garage?</h1>
//         <Car />
//       </div>
//     );
//   }
// }

// ReactDOM.render(<Garage />, rootEl);


// Components in Files

// ReactDOM.render(<Car />, rootEl);

// React Props

// class Car extends React.Component {
//   render() {
//     return <h2>I am a {this.props.brand}!</h2>
//   }
// }

// const myElement = <Car brand='Toyota'/>

// ReactDOM.render(myElement, rootEl)

// Pass Data with Props

// class Car extends React.Component {
//   render() {
//     return <h2>I am a {this.props.brand}</h2>
//   }
// }

// class Garage extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Who lives in my Garage?</h1>
//         <Car brand= '2021 Toyota camry'/>
//       </div>
//     )
//   }
// }

// ReactDOM.render(<Garage/>, rootEl   )