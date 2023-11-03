import { useReducer, useState } from "react"
import { INNITIAL_STATE, postreducer } from "./postReducer"
const Reducer=()=>{
    const [state,dispatch] = useReducer(postreducer,INNITIAL_STATE);
    
    const fetchData=()=>{
        dispatch({type:"FETCH_START"})
        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then((data) => {
            dispatch({type:"FETCH_SUCCESS",payload:data})
        })
        .catch((err)=>{
            dispatch({type:"FETCH_ERROR"})
        })
    }
//    const [state,dispatch] = useReducer(postreducer,INNITIAL_STATE);
//    const fetchData = ()=>{
//     dispatch({type:"FETCH_STATE"})
//     fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then(response => response.json())
//     .then((data) => {
//        dispatch({type:"FETCH_SUCCESS",payload:data})
//     }).catch((err)=>{
//         dispatch({type:"FETCH_ERROR"})
//     }
//     )
//    }

    return(
        <>
        <button onClick={fetchData}>{state.loading? "wait...":"Fetch the Data"}</button>
        <p>{state.title.title}</p>
        <p>{state.error?"Somthing went worng!":""}</p>
        </>
    );
}
export default Reducer;

// import { useReducer, useState } from "react";
// const Reducer = ()=>{

//     const [props,setProps] = useState({title:""});
//     const [loading,setLoading] = useState(false);
//     const [error,setError] = useState(false);

//     function fetchData(){
//         setLoading(true);

//         fetch('https://jsonplaceholder.typicode.com/posts/1')
//         .then(response => response.json())
//         .then((data) =>{
//                 setLoading(false);
//                 setProps(data);
//         }).catch((err)=>{
//             setError(true);
//         })
//     }

//     return(
//         <>
//             <button onClick = {fetchData}>{loading?"wait...":"Fetching data"}</button>
//             <h2>{props.title}</h2>
//             <h3>{error?"somthing wrong":""}</h3>
//         </>
//     )
// }

// export default Reducer;