import { useTimerStore } from "./store/useTimerStore";
import { Button } from "@mui/material";

export const RunButton = () => {
  // const run = useTimerStore((store) => store.toggleLaunch);
  const setStatus = useTimerStore((store) => store.setStatus);

  const onClick = () => {
    setStatus("launched");
  };

  return (
    <Button variant={"contained"} size={"large"} onClick={onClick}>
      Start
    </Button>
  );
};
