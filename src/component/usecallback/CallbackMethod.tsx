import React,{useState,useEffect} from 'react'

const CallbackMethod = ({getItem}:any) => {
    const [item,setItem]= useState<number[]>([]);

    useEffect(()=>{
        setItem(getItem());
        console.log("updating items");
    },[getItem])
  return (
    item.map(item=><div key={item}>{item}</div>)
  )
}

export default CallbackMethod
