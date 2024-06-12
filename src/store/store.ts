import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./feature/counterSlice";

export const store = configureStore({
    reducer:{
        // Add reducteur
        counter: counterSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch