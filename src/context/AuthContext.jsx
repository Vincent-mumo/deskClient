import { createContext, useEffect, useReducer } from "react";

//creating initial state
const INITIAL_STATE = {
    user:JSON.parse(localStorage.getItem("user")) || null,
    loading:false,
    error:null
}

export const AuthContext = createContext(INITIAL_STATE)

//defining reducer
const AuthReducer = (state,action) => {
    switch(action.type){
        case 'LOGIN_START':
            return{
                user:null,
                loading:true,
                error:null
            }
        case "LOGIN_SUCCESS":
            return{
                user:action.payload,
                loading:false,
                error:null
            }
        case "LOGIN_FAILURE":
            return{
                user:null,
                loading:false,
                error:action.payload
            }
        case "LOGOUT":
            return{
                 user:null,
                loading:false,
                 error:null
                }
        default:
            return state
    }
}

//providing the context to components i want to consume it
export const AuthContextProvider = ({children}) => {
    const [state,dispatch] = useReducer(AuthReducer,INITIAL_STATE)

    //save user credentials in local host
    useEffect(() => {
        localStorage.setItem("user",JSON.stringify(state.user))
    },[state.user])

    return (
        <AuthContext.Provider value={{user:state.user,
                                      loading:state.loading,
                                      error:state.error,dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}