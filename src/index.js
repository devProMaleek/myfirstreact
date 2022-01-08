import React from "react";
import ReactDOM from "react-dom";
import App  from "./App";
import './App.css'
const rootEl = document.getElementById("root");



ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>, rootEl
);

// class Color extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {background: '#fff'}
//     }
//
//     handleChangeComplete = (color) => {
//         this.setState({ background: color.hex })
//     }
//     render() {
//         return <CirclePicker
//         color={/>
//     }
// }
// ReactDOM.render(<Color/>, rootEl)
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

// React Forms

// class MyForm extends React.Component{
//   render() {
//     return (
//         <form>
//           <h1>Hello</h1>
//           <label>Enter your name:</label><br/>
//           <input type="text" placeholder="Abdulmalik" required/><br/><br/>
//           <input type="submit" value="Submit"/>
//         </form>
//     )
//   }
// }
//
// ReactDOM.render(<MyForm/>, rootEl)

// Handling Forms in React

// class MyForm extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {username: ''}
//     }
//
//     myChangeHandler = (event) => {
//         this.setState({username: document.getElementById("name").value})
// }
//
//     render() {
//         return (
//             <form>
//                 <h1>Hello {this.state.username}</h1>
//                 <label>Enter your name:</label><br/>
//                 <input type="text" id="name"/><br/><br/>
//
//                 <input type="submit" onClick={this.myChangeHandler} value="Submit"/>
//             </form>
//         )
//     }
// }
//
// ReactDOM.render(<MyForm/>, rootEl)

// Conditional Rendering

// class MyForm extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {username: ""}
//     }
//
//     myChangeHandler = (ev) => {
//         this.setState({username: ev.target.value})
//     }
//
//     render(){
//         let header = "";
//         if (this.state.username) {
//             header = <h1>Hello, {this.state.username}</h1>
//         } else {
//             header = ""
//         }
//
//         return (
//             <form>
//                 {header}
//                 <label>Enter your name: </label>
//                 <input type="text" onChange={this.myChangeHandler}/>
//             </form>
//         )
//     }
// }
//
// ReactDOM.render(<MyForm/>, rootEl)

// Submitting Forms

// class MyForm extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {username: ""}
//     }
//     mySubmitHandler = (ev) => {
//         ev.preventDefault();
//         alert("You are submitting " + this.state.username)
//     }
//     myChangeHandler = (ev) => {
//         this.setState({username: ev.target.value})
//     }
//
//     render(){
//         return (
//             <form onSubmit={this.mySubmitHandler}>
//                 <h1>Hello {this.state.username}</h1>
//                 <label>Enter your name:</label><br/>
//                 <input type="text" onChange={this.myChangeHandler}/><br/><br/>
//                 <input type="submit"/>
//             </form>
//         )}
// }
//
// ReactDOM.render(<MyForm/>, rootEl)

// Multiple Input Fields

// class MyForm extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {username: "", age: null}
//     }
//
//     myChangeHandler = (ev) => {
//         let nam = ev.target.name;
//         let val = ev.target.value;
//         this.setState({[nam]: val})
//     }
//
//     render(){
//         return (
//             <form>
//                 <h1>Hello, my name is {this.state.username} and I'm {this.state.age} years.</h1>
//                 <p>Enter your name:</p>
//                 <input type='text' name='username' onChange={this.myChangeHandler}/>
//
//                 <p>Enter your age:</p>
//                 <input type="text" name="age" onChange={this.myChangeHandler}/>
//             </form>
//         )}
// }
//
// ReactDOM.render(<MyForm/>, rootEl)

// Validating Form Input

// class MyForm extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {username: "", age: null}
//     }
//
//     myChangeHandler = (ev) => {
//         let nam = ev.target.name;
//         let val = ev.target.value;
//         if (nam === "age") {
//             if (!Number(val)) {
//                 alert("Your age must be a number")
//             }
//         }
//         this.setState({[nam]: val})
//     }
//
//     render() {
//         return (
//             <form>
//                 <h1>Hello, my name is {this.state.username} and I'm {this.state.age} years</h1>
//
//                 <p>Enter your name:</p>
//                 <input type="text" name="username" onChange={this.myChangeHandler}/>
//
//                 <p>Enter your age:</p>
//                 <input type="text" name="age" onChange={this.myChangeHandler}/>
//             </form>
//         )
//     }
// }
//
// ReactDOM.render(<MyForm/>, rootEl)

// Submit Form Validation
//
// class MyForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {username: "", age: null}
//     }
//
//     mySubmitHandler = (ev) => {
//         ev.preventDefault();
//         let age = this.state.age;
//         if (!Number(age)) {
//             alert("Your age must be a number")
//         }
//     }
//
//     myChangeHandler = (ev) => {
//         let nam = ev.target.name;
//         let val = ev.target.value;
//         this.setState({[nam]: val})
//     }
//
//     render () {
//         return (
//             <form onSubmit={this.mySubmitHandler}>
//                 <h1>Hello, my name is {this.state.username} and I'm {this.state.age} years </h1>
//                 <p>Enter your name:</p>
//                 <input type="text" name="username" onChange={this.myChangeHandler}/>
//
//                 <p>Enter your age:</p>
//                 <input type="text" name="age" onChange={this.myChangeHandler}/><br/> <br/>
//
//                 <input type="submit"/>
//             </form>
//         )
//     }
// }
//
// ReactDOM.render(<MyForm/>, rootEl)

// Adding Error Message

// class MyForm extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {username: "", age: "", errorMessage: ""}
//     }
//
//     myChangeHandler = (ev) => {
//         let nam = ev.target.name;
//         let val = ev.target.value;
//         let err = "";
//         if (nam ==="age") {
//             if (val != "" && !Number(val)) {
//                 err = <strong>Your age must be a number</strong>
//             }
//         }
//         this.setState({errorMessage: err})
//         this.setState({[nam]: val})
//     }
//
//     render() {
//         return (
//             <form>
//                 <h1>Hello, my name is {this.state.username} and I'm {this.state.age} years</h1>
//
//               <p>Enter your name:</p>
//               <input type="text" name="username" onChange={this.myChangeHandler}/>
//
//                 <p>Enter your age:</p>
//                 <input type="text" name="age" onChange={this.myChangeHandler}/><br/>
//
//                 {this.state.errorMessage}
//             </form>
//         )
//     }
//
// }

// ReactDOM.render(<MyForm/>, rootEl)

// Styling React Using CSS

// Inline Styling

// class MyHeader extends React.Component {
//     render() {
//         return(
//             <div style={{backgroundColor: "green", width: "50%", margin: "auto"}}>
//                 <h1 style={{color: "red", textAlign: "center"}}>Hello, Welcome to React CSS</h1>
//                 <p style={{textAlign: "center", color: "white"}}>Add a little style</p>
//
//             </div>
//         )
//     }
// }
//
// ReactDOM.render(<MyHeader/>, rootEl)

// JavaScript Object Styling

// class MyHeader extends React.Component {
//     render() {
//         const myStyle = {
//             color: "white",
//             backgroundColor: "DodgerBlue",
//             padding: "10px",
//             fontFamily: "Raleway"
//         }
//
//         const divStyle = {
//             textAlign: "center",
//             width: "50%",
//             margin: "auto",
//             backgroundColor: "DodgerBlue",
//             padding: "10px",
//             color: "white"
//         }
//
//         return (
//             <div style={divStyle}>
//                 <h1 style={myStyle}>Hello, Welcome to React CSS</h1>
//                 <p>Add a little style!</p>
//             </div>
//             )
//     }
// }
//
// ReactDOM.render(<MyHeader/>, rootEl)
//
// class MyHeader extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>Hello, Welcome to React CSS</h1>
//                 <p>Add a little settle</p>
//             </div>
//         )
//     }
// }
//
// ReactDOM.render(<MyHeader/>, rootEl)

// class Example extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {count: 0}
//     }
//
//     componentDidMount() {
//         document.title = `You clicked ${this.state.count} times`
//     }
//
//     changeCount = () => {
//         this.setState({count: this.state.count + 1})
//     }
//
//     componentDidUpdate() {
//         document.title = `You clicked ${this.state.count} times`
//     }
//
//     render() {
//         return (
//             <div>
//                 <p>You clicked {this.state.count} times</p>
//                 <button type='submit' onClick={this.changeCount}>Click me</button>
//             </div>
//         )
//     }
// }
//
// ReactDOM.render(<Example />, rootEl)

// class FriendStatus extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {isOnline: null}
//         this.handleStatusChange = this.handleStatusChange.bind(this);
//     }
    
//     componentDidMount() 
//         ChatAPI.subscribeToFriend
//     }
// }




