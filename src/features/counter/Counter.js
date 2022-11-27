import { useSelector, useDispatch } from 'react-redux';
import {increment, decrement } from './counterSlice';

export function Counter() {

  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    
    <>
        
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        
        <h1>{count}</h1>
        
        <button onClick={() => dispatch(increment())}>Increment</button>
        
        
    </>
  );


}
