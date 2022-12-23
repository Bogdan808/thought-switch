import { useEffect } from "react";
import { useTimerStore } from "../store/useTimerStore";

export const useSetInitSeconds = (seconds: number) => {
  const { setSeconds } = useTimerStore((store) => store);
  useEffect(() => {
    setSeconds(seconds);
  }, []);
};
