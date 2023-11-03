// export const INNITIAL_STATE ={
//     loading:false,
//     props:"",
//     error:false
// }

// export const postReducer =(state:any,action:any)=>{
//    switch(action.type){
//     case "FETCH_STATE":
//         return {
//             loading:true,
//             props:{},
//             error:false
//         }
//     case "FETCH_SUCCESS":
//         return {
//             // ...state, 
//             loading:false,
//             props:action.payload,
//             error:false
//         }
//     case "FETCH_ERROR":
//         return {
//             loading:false,
//             props:{},
//             error:true
//         }
//         default:
//              return state;
//     }  
// }

export const INNITIAL_STATE = {
    title:{},
    loading:false,
    error:false,
}

export const postreducer = (state:any,action:any)=>{
    switch(action.type){
        case "FETCH_START":
            return{
                title:{},
                loading:false,
                error:false
            }
        case "FETCH_SUCCESS":
        return{
            title:action.payload,
            loading:false,
            error:false
        }
        case "FETCH_ERROR":
            return{
                title:{},
                loading:false,
                error:true
            }
        default:
            return state;
}
}