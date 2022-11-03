import React, {useState} from 'react';
import store from "./redux-app";
import {decreaseAction, increaseAction} from "./action/counter-action";

function Counter() {
    const [counter, setCounter] = useState(0);
    function handleIncrease() {
        store.dispatch(increaseAction(10))
    }
    function handleDecrease() {
        store.dispatch(decreaseAction(20))
    }
    store.subscribe(() => {
        setCounter(store.getState().counter);
    });
    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={handleIncrease}>INCREASE</button>
            <button onClick={handleDecrease}>DECREASE</button>
        </div>
    );
}

export default Counter;