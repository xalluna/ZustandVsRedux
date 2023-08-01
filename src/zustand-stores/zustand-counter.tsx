import { create } from "zustand";

export type CounterStoreVariables = {
  count: number;
};

export type CounterStoreFunctions = {
  increment: () => void;
  decrement: () => void;
  incrementByValue: (count: number) => void;
};

export type CounterStore = CounterStoreVariables & CounterStoreFunctions;

const INITIAL_VALUES: CounterStoreVariables = {
  count: 0,
};

export const useZustandCounter = create<CounterStore>((set, get) => ({
  ...INITIAL_VALUES,
  increment: () => {
    const { count: previous } = get();

    set({ count: previous + 1 });
  },
  decrement: () => {
    const { count: previous } = get();

    set({ count: previous - 1 });
  },
  incrementByValue: (count: number) => {
    const { count: previous } = get();

    set({ count: previous + count });
  },
}));
