import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { RootState } from "../store"

interface CounterState {
    value: number
}
const initialState: CounterState = {
    value: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        //Action
        increment: (state) => {
            state.value += 1
        },
        //Action
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        }
    }
})

export const { increment, incrementByAmount, decrement } = counterSlice.actions
export const selectCount = (state: RootState) => state.counter.value
export default counterSlice.reducer