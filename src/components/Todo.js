import React from "react";
import { useState, memo } from "react";

// Todos Component

const Todos = ({ todos }) => {
    const [todo, setTodo] = useState("");
    console.log("child render");

    return (
        <>
            <h2>My Todos</h2>
            {todos.map((todo, index) => {
                return <p key={index}>{todo}</p>
            })}

            <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)}/> <br/>
            <button onClick={setTodo}>Add task</button>
        </>
    )
};


export default memo(Todos);