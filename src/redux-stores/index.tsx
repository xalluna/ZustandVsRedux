import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { counterStore } from "./redux-store";

export type CounterState = ReturnType<typeof counterStore.getState>;
export type CounterDispatch = typeof counterStore.dispatch;

export const useCounterDispatch: () => CounterDispatch = useDispatch;
export const useCounterSelector: TypedUseSelectorHook<CounterState> =
  useSelector;
