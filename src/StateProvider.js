import React, { createContext, useContext, useReducer } from 'react';
//prepares the data layer
export const StateContext = createContext();

//wrap our app and provide the data layer
export const StateProvider = ({ reducer, initalState, children })=> (
    <StateContext.Provider value={useReducer(reducer, initalState)}>
        {children}
    </StateContext.Provider>
);
export const useStateValue = () => useContext(StateContext);