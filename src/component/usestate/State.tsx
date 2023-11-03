import React,{useState} from 'react';
import "./State.css"

const State = () => {
    const [count,setCount]= useState<number>(0);

    const increase = ()=>{
      setCount(count+1);
    }
    const decrease = ()=>{
      setCount(count-1);
    }
    const reset=()=>{
      setCount(0);
    }
  return (
    <div>
      <div className="state">
        <button onClick={decrease}>-</button>
        <span>{count}</span>
        <button onClick={increase}>+</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  )
}

export default State
