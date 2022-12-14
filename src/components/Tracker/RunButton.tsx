import { useTimerStore } from "./store/useTimerStore";
import { Button } from "@mui/material";

export const RunButton = () => {
  const run = useTimerStore((store) => store.toggleLaunch);

  return (
    <Button variant={"contained"} size={"large"} onClick={() => run()}>
      Start
    </Button>
  );
};
