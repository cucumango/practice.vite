/**
 *
 */
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

type State = {
    count: number;
    now: number;
};

type Actions = {
    increment: () => void;
    decrement: () => void;
};

export const useCountStore = create<State & Actions>()(
    immer((set) => ({
        count: 0,
        now: 0,
        increment: () =>
            set((state) => {
                state.count++;
            }),
        decrement: () =>
            set((state) => {
                state.count--;
            }),
    }))
);
