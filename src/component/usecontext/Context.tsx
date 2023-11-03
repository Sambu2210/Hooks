import { useState, createContext, useContext } from "react";
const UserContext = createContext("");

function Context(){
  const [user,setUser]=useState("sanjay");
  return(
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user} !`}</h1>
      <Component2/>
    </UserContext.Provider>
  );
}
export default Context;
function Component2(){
  return(
    <>
    <h1>component 2</h1>
    <Component3/>
    </>
  )
}
function Component3(){
  return(
    <>
    <h1>component 3</h1>
    <Component4/>
    </>
  )
}
function Component4(){
  const user = useContext(UserContext);
  return(
    <>
    <h1>component 4</h1>
    <h2>{`This is ${user} again!`}</h2>
    </>
  )
}

