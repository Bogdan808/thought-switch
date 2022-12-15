import create from "zustand";

export interface ITimerStore {
  seconds: number;
  setSeconds: (value: number) => void;
  getSeconds: () => number;
  incrementSeconds: () => void;
  disruptions: IDiscuption[];
  setDisruption: (value: number) => void;
  initSecond: number;
  setInitSecond: (value: number) => void;
  maxSeconds: number;
  setMaxSeconds: (value: number) => void;
  getMaxSeconds: () => number;
  isLaunched: boolean;
  toggleLaunch: () => void;
}

interface IDiscuption {
  value: number;
  label: string;
}

export const useTimerStore = create<ITimerStore>((set, get) => ({
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
  setDisruption: (value) => {
    set((store) => ({
      ...store,
      disruptions: [
        ...store.disruptions,
        {
          value: value,
          label: `${value}`,
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
}));
