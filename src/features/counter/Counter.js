import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {increment, decrement, selectCount } from './counterSlice';

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');
  const incrementValue = Number(incrementAmount) || 0;
 
  console.log(incrementAmount)

  return (
    <div>
        <button onClick={() => dispatch(decrement())}>
          Decrement
        </button>
        <h1>
        <span>{count}</span>
        </h1>
        <button onClick={() => dispatch(increment())}>
            Increment
        </button>
    </div>
  );
}
