 // React Hooks: useReducer Hook.
import React from 'react';
import { useReducer } from "react";

//Reducer Function
const myReducer = (prevState, action) => {
    let array;
    switch (action.type) {
        case 'Add': 
            array = [...prevState];
            array.push(action.payload);
            return array;
        case 'Remove': 
            array = [...prevState];
            array.pop();
            return array;
        case 'Clear':
            return prevState = [];
        default: 
            break;
    }
}

const UseCaseMultipleStates = props => {
    const [state, dispatcher] = useReducer(myReducer, [ 107 ])
    console.log(state);

    // Three different state triggers.
    const addHandler = () => {
        dispatcher({type: 'Add', payload: Math.round((Math.random() * 100 + 100))})
    }

    const removeHandler = () => {
        dispatcher({ type: "Remove" });
    }

    const clearHandler = () => {
        dispatcher({ type: "Clear" });
    }

    return (
        <>
            <hr/>
            <h2> useReducer Hook use case</h2>
            <h3>Manage multiple states: Modify an array</h3>
            <button onClick={addHandler}>[+] Add random value to array</button>
            <button style={{ margin: "0 2rem"}} onClick={removeHandler}>[-] Remove last value from array</button>
            <button onClick={clearHandler}>[x] Clear array</button>
            <p>Shopping cart array:</p>
            <p><b>{state.length === 0 && '(empty)'}{state.join(' - ')}</b></p>
        </>
    )
};

export default UseCaseMultipleStates;




    


