import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  initialState,
  name: "counter",
  reducers: {
    increment(state) {
      state.count += 1;
    },
    decrement(state) {
      state.count -= 1;
    },
    incrementByValue(state, action) {
      state.count += action.payload;
    },
  },
});

export const {
  increment: reduxIncrement,
  decrement: reduxDecrement,
  incrementByValue: reduxIncrementByValue,
} = counterSlice.actions;

export const counterStore = configureStore(counterSlice);
