import { createReducer } from "@reduxjs/toolkit";
import { loadDoctors } from "../actions/doctorsActions.js";

const initialState = {
    doctors : []
}

export const doctorReducer = createReducer( initialState, (builder) => {
    return builder.addCase( loadDoctors, ( state, action ) =>  {
        // const newState = { ... state, doctors:action.payload }    
        // return newState
        return { ... state, doctors:action.payload }
    })
})

