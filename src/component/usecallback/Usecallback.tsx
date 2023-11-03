import React, { useState } from 'react'
import CallbackMethod from './CallbackMethod';

const Usecallback = () => {

    const [count,setCount]= useState<number>(0);
    const [dark,setDark] = useState(false);

    const getItem= ()=>{
        return[count,count+1,count+2];
    }

    const theme = {
        backgound: dark ? "black" : "white",
        color: !dark ? "black" : "white"
    }
  return (
    <div>
      <input type="number" onChange={e=>setCount(Number(e.target.value))} />
      <button onClick={()=>setDark(predark => !predark)}>Change Theme</button>
      <CallbackMethod getItem={getItem}/>
    </div>
  )
}

export default Usecallback
