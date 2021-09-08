import React, {useReducer, createContext, useContext} from 'react';
import {reducer, initialState} from './Reducer';
const AuthStateContext = createContext();
const AuthDispatchContext = createContext();

export function useAuthState() {
 const context = useContext(AuthStateContext);
    if(!context){
    throw Error('error in AuthStateContext')
        }
    return context;
}  

export function useAuthDispatch() {
 const context = useContext(AuthDispatchContext);
 if(!context){
    throw Error('error in AuthDispatchContext')
 }
 return context;
}  

function AuthContext({children}) {

    const [state, dispatch] = useReducer(reducer, initialState);
    
    return (
        <AuthStateContext.Provider value={state}>
            <AuthDispatchContext.Provider value={dispatch}>
              {children}
            </AuthDispatchContext.Provider>
        </AuthStateContext.Provider>
    )
}

export default AuthContext
