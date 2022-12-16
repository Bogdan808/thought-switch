import { useTimerStore } from "./store/useTimerStore";
import { Button } from "@mui/material";

export const RestartButton = () => {
  const restart = useTimerStore((store) => store.restartLaunch);

  return (
    <Button variant={"text"} size={"large"} onClick={() => restart()}>
      Restart
    </Button>
  );
};
