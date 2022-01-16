// Import the necessary libraries.
import React from 'react';
import { useState, useEffect, useContext, createContext, useRef, useReducer, useCallback } from 'react';
// import Todos from './Todo';
// import Timer from "./timer";
// import UseCaseMultipleStates from './Reducer';
// import UseCaseComplexStates from './Complaexstate';
import Todos from './Todos';
// import { BrowserRouter, Routes, Route  } from 'react-router-dom';
// import Layout from './pages/Layout';
// import Blog from './pages/Blogs';
// import Contact from './pages/Contact';
// import Home from './pages/Home';
// import NoPage from './pages/Nopages';

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
    // 

    // React Routing

    // <BrowserRouter>
    //     <Routes>
    //         <Route path="/" element={<Layout/>}>
    //             <Route index element={<Home/>}/>
    //             <Route path="blogs" element={<Blog/>} />
    //             <Route path="contact" element={<Contact/>} />
    //             <Route path="*" element={<NoPage/>} />
    //         </Route>
    //     </Routes>
    // </BrowserRouter>

    // React Memo.
    // const [count, setCount] = useState(0);
    // const [todos, setTodos] = useState(["Todo 1", "Todo 2"]);

    // const increment = () => {
    //     setCount((c) => c + 1 );
    // }
    // const addTodo = () => {
    //     setTodos(todos.push())
    // }

    // return (
    //     <>
    //         <Todos todos={todos} />
    //         <button onClick={addTodo}>Add task</button>
    //         <hr/>

    //         <div>
    //             Count: {count} 
    //             <button onClick={increment}>+</button>
    //         </div>            
    //     </>
    // )

    // React Hooks: useState Hooks.
    // const [model, setModel] = useState("Mustang")
    // const [color, setColor] =  useState("red");
    // const [brand, setBrand] = useState("Ford");
    // const [year, setYear] = useState('1964');

    // return (
    //     <>
    //         <h1>My {brand}!</h1>
    //         {/* Updating the state. */}
    //         <p>It is a {color} {model} from {year}</p>
    //     </>
    // ) 
    // const Ford = {brand: "Toyota", model: "Corolla", year: "2022", color: "Red"}
    // const newFord = {brand: "Lexus", model: "is250", year: "2022", color: "Black"}
    // const [car, setCar] = useState(Ford)

    // return (
    //     <>
    //         <h1>My {car.brand}!</h1>
    //         <p> It is a {car.color} {car.model} from {car.year}</p>

    //         <button type='button' onClick={() => setCar(newFord)}>Update State</button>
    //     </>
    // )


    // React Hooks: useEffect Hooks.
    // return <Timer />

    // React Hooks: useContext Hooks.

    // const UserContext = createContext();
    
    
    // const [user, setUser] = useState("Adebayo Abdulmalik");

    // return (
    //     <UserContext.Provider>
    //         <h1>{`Hello ${user}!`}</h1>
    //         <Component2 user={user} />
    //     </UserContext.Provider>
    // )

    // function Component2() {
    //     return (
    //         <>
    //             <h1>Component 2</h1>
    //             <Component3/>
    //         </>
    //     );
    // }

    // function Component3() {
    //     return (
    //         <>
    //             <h1>Component 3</h1>
    //             <Component4 />
    //         </>
    //     );
    // }

    // function Component4() {
    //     return (
    //         <>
    //             <h1>Component 4</h1>
    //             <Component5 />
    //         </>
    //     )
    // }

    // function Component5() {

    //     const user = useContext(UserContext);
    //     return (
    //         <>
    //             <h1>Component 5</h1>
    //             <h2>{`Hello ${user} again!`}</h2>
    //         </>
    //     );
    // }


    // React Hooks: useRef Hooks
    
    // const [inputValue, setInputValue] = useState("");
    // const count = useRef(0);

    // useEffect(() => {
    //     count.current = count.current + 1;
    // });

    // return (
    //     <>
    //         <input type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)}></input>
    //         <h1>Render Count: {count.current}</h1>
    //     </>
    // )

    // return <UseCaseMultipleStates/>

    // return <UseCaseComplexStates/>

    // React Hooks: useCallback Hooks.

    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    const increment = () => {
        setCount((c) => c + 1 )
    };

    const addTodo = useCallback(() => {
        setTodos((t) => [...t, newTodo]);
    }, [newTodo])

    const addNewTodo = () => {
        setNewTodo((e) => todos.push(newTodo) )
    }

    return (
        <>
            <Todos todos={todos} addTodo={addTodo} addNewTodo={addNewTodo} newTodo={newTodo} />
            <hr/>

            <div>
                Count: {count} <br/>
                <button type='button' onClick={increment}>[+]</button>
            </div>
        </>
    )


   

 
}
    
export default Football;