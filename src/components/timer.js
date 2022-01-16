// React Hooks: useEffect Hooks

import { useState, useEffect } from "react"
import React from 'react';


// Timer Component.
const Timer = () => {
    const [count, setCount] = useState(0);

    // useEffect.
    useEffect(() => {
        setTimeout(() => {
            setCount((count) => count + 1);
        }, 1000)
    }, []);

    return <h1>I have rendered {count} times!</h1>
}

export default Timer;
