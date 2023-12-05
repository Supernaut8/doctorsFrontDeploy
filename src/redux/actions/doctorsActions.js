import { createAction } from "@reduxjs/toolkit";

export const loadDoctors = createAction( "load_doctors", (doctors) => {
    return {
        payload: doctors
    }   
})