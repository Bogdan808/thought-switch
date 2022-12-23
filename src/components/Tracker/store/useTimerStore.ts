import create from "zustand";
import { IDisruption, TStatusTracker } from "../types";

export interface ITimerStore {
  status: TStatusTracker;
  setStatus: (value: TStatusTracker) => void;
  seconds: number;
  setSeconds: (value: number) => void;
  getSeconds: () => number;
  incrementSeconds: () => void;
  disruptions: IDisruption[];
  addDisruption: (value: number) => void;
  initSecond: number;
  setInitSecond: (value: number) => void;
  maxSeconds: number;
  setMaxSeconds: (value: number) => void;
  getMaxSeconds: () => number;
  isLaunched: boolean;
  toggleLaunch: () => void;
  restartLaunch: () => void;
}

export const useTimerStore = create<ITimerStore>((set, get) => ({
  status: "init",
  setStatus: (value) => set((state) => ({ ...state, status: value })),
  seconds: 0,
  setSeconds: (value) => {
    set((store) => ({ ...store, seconds: value }));
  },
  getSeconds: () => {
    return get().seconds;
  },
  incrementSeconds: () => {
    set((store) => ({ ...store, seconds: store.seconds + 1 }));
  },
  disruptions: [],
  addDisruption: (value) => {
    set((store) => ({
      ...store,
      disruptions: [
        ...store.disruptions,
        {
          value: value,
          label: ``,
          marker: true,
        },
      ],
    }));
  },
  initSecond: 0,
  setInitSecond: (value) => {
    set((store) => ({ ...store, initSecond: value }));
  },
  maxSeconds: 120,
  getMaxSeconds: () => get().maxSeconds,
  setMaxSeconds: (value) => {
    set((store) => ({ ...store, maxSeconds: value }));
  },
  isLaunched: false,
  toggleLaunch: () =>
    set((store) => ({ ...store, isLaunched: !store.isLaunched })),
  restartLaunch: () =>
    set((store) => ({ ...store, isLaunched: false, seconds: 0 })),
}));
