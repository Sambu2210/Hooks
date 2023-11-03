import React,{useState} from 'react'

const Usememo = () => {

  const[num,setNum]=useState(0);
  const[color,setColor]=useState(false);
  const themeStyle = {
    color: color ? "white" :  "black",
    background: color ? "black" : "white"
  }

  const doublenum = setdobulnum(num);

  return (
    <div>
      <input type="number" onChange={e=> setNum(Number(e.target.value))}/>
      <button onClick={()=>setColor(dark=>!dark)}>Change Color</button>
      <div style={themeStyle}>{doublenum}</div>
    </div>
  )
}

export default Usememo;



function setdobulnum(num:number){
    console.log("calling slwo function")
    for(let i:number=0;i<100;i++){}
    return num*2;
}
