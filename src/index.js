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

// Create an object named "carinfo" and send it to the car component

// class Car extends React.Component{
//   render() {
//     return <h2>I am a {this.props.brand.year} {this.props.brand.model}</h2>
//   }
// }

// class Garage extends React.Component{
//   render() {
//     const carInfo = {name: "Toyota", model: "Camry", year: 2021};
//     return (
//       <div>
//         <h1>Who is in my garage?</h1>
//         <Car brand={carInfo}/>
//       </div>
//     )
//   }
// }

// ReactDOM.render(<Garage/>, rootEl)

// Props in Constructor

// class Car extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return <h2>I am a{this.props.model}</h2>
//   }
// }

// ReactDOM.render(<Car model="Camry Toyota"/>, rootEl)


// React State

// creating State object
// class Car extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {brand: 'Toyota', model: 'Camry', color: 'red', year: '2021'};
//   }

//   render() {
//     return (
//       <div>
//         <h1>My {this.state.brand}</h1>
//         <p>
//           It is a {this.state.color} {this.state.model} from {this.state.year}
//         </p>
//       </div>
//     )
//   }
// }

// ReactDOM.render(<Car/>, rootEl)

// Changing the State object

// class Car extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {brand: "Toyota", model: "Corolla", color: "red", year: "2021"}
//   }
//   changeColor = () => {
//     this.setState({color: "green"});
//   }
//   render() {
//     return (
//       <div>
//         <h1>My {this.state.brand}</h1>
//         <p>It is a {this.state.color} {this.state.model} from {this.state.year}</p>

//         <button type='button' onclick={this.changeColor}>Change Color</button>
//       </div>
//     )
//   }
// }

// ReactDOM.render(<Car/>, rootEl)

// React lifecycle

// constructor

// class Header extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {favoriteColor: "red"}
//   }
//   render() {
//     return (
//       <h1>My favorite color is {this.state.favoriteColor}</h1>
//     )
//   }
// }


// ReactDOM.render(<Header/>, rootEl)

// getDerivedStateFromProps

// class Header extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {favoriteColor: "red"}
//   }

//   static getDerivedStateFromProps(props, state) {
//     return {favoriteColor: props.favCol}
//   }
//   render() {
//     return (
//       <h1>My favorite color is {this.state.favoriteColor}</h1>
//     )
//   }
// }

// ReactDOM.render(<Header favCol="yellow"/>, rootEl)

// componentDidMount

// class Header extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {favoriteColor: "red"}
//   }

//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({favoriteColor: "yellow"})
//     }, 1000)
//   }
//   render() {
//     return (
//       <h1>My favorite color is {this.state.favoriteColor}</h1>
//     )
//   }
// }
// ReactDOM.render(<Header/>, rootEl )


// Updating

// getDerivedStateFromProps

// class Header extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {favoriteColor: "red"}
//   }

//   static getDerivedStateFromProps(props, state) {
//     return {favoriteColor: props.favCol}
//   }

//   changeColor = () => {
//     this.state({favoriteColor: "blue"})
//   }

//   render() {
//     return (
//       <div>
//         <h1>My Favorite Color is {this.state.favoriteColor}</h1>
//         <button type="button" onClick={this.changeColor}>Change the color text</button>
//       </div>
//     )
//   }
// }

// ReactDOM.render(<Header favCol="yellow"/>, rootEl)

// shouldComponentUpdate

// Returns false

// class Header extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {favoriteColor: "red"}
//   }

//   shouldComponentUpdate() {
//     return false;
//   }

//   changeColor = () => {
//     this.setState({favoriteColor: "blue"})
//   }

//   render() {
//     return (
//       <div>
//         <h1>My Favorite Color is {this.state.favoriteColor}</h1>
//         <button type="button" onClick={this.changeColor}>Change color</button>
//       </div>
//     )
//   }
// }

// ReactDOM.render(<Header/>, rootEl)

// shouldComponentUpdate methods return true

// class Header extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {favoriteColor: "red"}
//   }

//   shouldComponentUpdate() {
//     return true;
//   }

//   changeColor = () => {
//     this.setState({favoriteColor: "blue"})
//   }

//   render() {
//     return (
//       <div>
//         <h1>My favorite color is {this.state.favoriteColor}</h1>
//         <button type="button" onClick = {this.changeColor}>Change color</button>
//       </div>
//     )
//   }
// }

// ReactDOM.render(<Header/>, rootEl)

// Render

// class Header extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {favoriteColor: "red"}
//   }

//   changeColor = () => {
//     this.setState({favoriteColor: "green"})
//   }

//   render() {
//     return (
//       <div>
//         <h1>My favorite color is {this.state.favoriteColor}</h1>

//         <button type="button" onClick={this.changeColor}>Change color</button>
//       </div>
//     )
//   }
// }

// ReactDOM.render(<Header/>, rootEl)


// getSnapshotBeforeUpdate Method

// class Header extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {favoriteColor: "red"}
//   } 

//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({favoriteColor: "yellow"})
//     }, 1000)
//   }

//   getSnapshotBeforeUpdate(prevProps, prevState) {
//     document.getElementById('div1').innerHTML = "Before the update, the favorite color was " + prevState.favoriteColor
//   }

//   componentDidUpdate() {
//     document.getElementById('div2').innerHTML = "The updated favorite color is " + this.state.favoriteColor;
//   }

//   render() {
//     return (
//       <div>
//         <h1>My Favorite Color is {this.state.favoriteColor}</h1>
//         <div id="div1"></div>
//         <div id="div2"></div>
//       </div>
//     )
//   }
// }

// ReactDOM.render(<Header/>, rootEl)

// componentDidUpdate Method

// class Header extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {favoriteColor: "red"}
//   }

//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({favoriteColor: "green"})
//     }, 2000)
//   }

//   componentDidUpdate() {
//     document.getElementById("div1").innerHTML = "The updated favorite is " + this.state.favoriteColor
//   }

//   render() {
//     return (
//       <div>
//         <h1>My favorite color is {this.state.favoriteColor}</h1>

//         <div id="div1"></div>
//       </div>

//     )
//   }
// }

// ReactDOM.render(<Header/>, rootEl)

// componentWillUnmount Method 

// class Container extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {show: true}
//   }

//   delHeader = () => {
//     this.setState({show: false})
//   }

//   render() {
//     let myHeader;
//     if (this.state.show) {
//       myHeader = <Child/>
//     }

//     return (
//       <div>
//         {myHeader}
//         <button type="button" onClick={this.delHeader}>Delete Header</button>
//       </div>
//     )
//   }
// }

// Create Child Component

// class Child extends React.Component {
//   componentWillMount() {
//     alert("The component named Header is about to be unmounted")
//   }

//   render() {
//     return (
//       <h1>Hello World!</h1>
//     )
//   }
// }

// ReactDOM.render(<Container/>, rootEl)

// React Event Handlers

// class Football extends React.Component {
//   shoot = () => {
//     alert(this)
//   }

//   render() {
//     return (
//       <button onClick={this.shoot}>Take the shot!</button>
//     )
//   }
// }


// ReactDOM.render(<Football/>, rootEl)

// If you must use regular functions instead of arrow functions you have to bind this to the component instance using the bind() method:

// class Football extends React.Component {
//   constructor(props) {
//     super(props);
//     this.shoot = this.shoot.bind(this);
//   }
//
//   shoot = function () {
//     alert(this)
//   }
//
//   render() {
//     return (
//       <button onClick={this.shoot}>Take the shot!</button>
//     )
//   }
// }
//
// ReactDOM.render(<Football/>, rootEl)

// Passing Arguments

// Two options
// Option one

// class Football extends React.Component {
//   shoot = (a) => {
//     alert(a)
//   }
//   render() {
//     return (
//         <button onClick={() => this.shoot("Goal")}>Take the shot!</button>
//     )
//   }
// }
//
// ReactDOM.render(<Football/>, rootEl)

// Option two: Bind the event handler to this

// class Foot extends React.Component {
//   shoot(a) {
//     alert(a);
//   }
//
//   render() {
//     return (
//         <button onClick={this.shoot.bind(this, "Goal")}>Take the shot!</button>
//     )
//   }
// }
//
// ReactDOM.render(<Foot/>, rootEl)


// React Event Object

// class Football extends React.Component {
//   shoot = (a, b) => {
//     alert(b.type)
//   }
//
//   render() {
//     return (
//         <button onClick={this.shoot.bind(this, "Goal")}>Take the shot!</button>
//     )
//   }
// }
//
// ReactDOM.render(<Football/>, rootEl)