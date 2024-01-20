// import { createContext,  useReducer , useEffect } from "react";

// const  initialState = {
//     salon:localStorage.getItem('salon') !==undefined ? JSON.parse(localStorage.getItem('salon')) : null,
//     role:localStorage.getItem('role') || null,
//     token:localStorage.getItem('token') || null, 
   
// };
// // export the authContext here 

// export const authContext=  createContext(initialState);
// const  authReducer= (state,action) =>{

//     switch (action.type) {
//         case 'LOGIN_START':
            
//           return {
//             salon:null,
//             role:null,
//             token:null,
//           };

//           case 'LOGIN_SUCCESS':

//           return{
//             salon:action.payload.salon,
//             role:action.payload.role,
//             token:action.payload.token,
           
//           };

//           case 'LOGOUT':

//           return{
//             salon:null,
//             role:null,
//             token:null,
           
//           };
//         default:
//            return state;
//     }
// };

//  // Aucontext provider
// export const AuthContPro= ({children})=>{
      
//     const [state, dispatch]= useReducer(authReducer, initialState)

//     useEffect(()=>{
//       //console.log(state);
//       localStorage.setItem('salon', JSON.stringify(state.salon))
//       localStorage.setItem('role', state.role)
//       localStorage.setItem('token', state.token)
     

//     }, [state]);

//     return ( 
//     <authContext.Provider value={{salon:state.salon, token:state.token, role:state.salon?.role  ,  dispatch}}>
//         {children}
//         </authContext.Provider>
//     )
// };
// // authcontext fro salon login