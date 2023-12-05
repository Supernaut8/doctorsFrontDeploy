import { configureStore } from "@reduxjs/toolkit"
import  {doctorReducer}  from "./reducers/doctorsReducer"
import { mainReducer } from "./reducers/mainReducer"

export const store = configureStore({
    reducer: {
        storedoctors : doctorReducer,
        storeUser: mainReducer
    }
})