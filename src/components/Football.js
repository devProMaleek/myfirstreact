// Import the necessary libraries.
import React from 'react';
import { BrowserRouter,  } from 'react-router-dom';

// Football component

const Football = ({isGoal}) => {
    // const shoot = () => {
    //     alert('What a great shot');
    // }
    //
    // return (
    //     <button onClick={shoot}>Shoot a great shot</button>
    // )


    // React Events Object
    // const shoot = (a, b) => {
    //     alert(b.type);
    // }
    //
    // return (
    //     <button onClick={(event) => shoot('Goal', event)}>Take the Shot</button>
    // )

    // React Conditional Rendering
    // React Conditional Rendering.
    // function MissedGoal() {
    //     return <h1>Missed!</h1>
    // }

    // function MadeGoal() {
    //     return <h1>Goal!</h1>
    // }


    // if (isGoal) {
    //     return <MadeGoal/>
    // }
    //     return <MissedGoal/>


    // React List

    // const Car = ({ brand }) => {
    //     return <li>I am a {brand}</li>
    // }

    // const  cars =  ["Lexus", "Toyota", "Benz", "Acura", "Honda"];

    // return (
    //     <>
    //       <h1>Who lives in my garage?</h1>
    //       <ul>
    //           {cars.map((car) => (
    //               <Car brand={car}/>
    //           ))}
    //       </ul>
    //     </>
    // )

    // Refactoring to include key.
    // const Car = (brand) => {
    //     return <li>I am a {brand}</li>
    // }

    // const cars = [
    //     { id: 1, brand: "Lexus"},
    //     { id: 2, brand: "Toyota"},
    //     { id: 3, brand: "Benz"},
    //     { id: 4, brand: "Acura"},
    //     { id: 5, brand: "Honda"}
    // ]

    // return (
    //     <>
    //       <h1>Who lives in my garage?</h1>
    //       <ul>
    //           {cars.map((car) => 
    //              <><Car key={car.id} brand={car.brand}/></> 
    //             )}
    //       </ul>
    //     </>
    // )

    // React Routing
}

export default Football;