import styled from "styled-components";
import { useEffect } from "react";
import { useTimerStore } from "./store/useTimerStore";
import { Typography } from "@mui/material";
import { useSetInitSeconds } from "./presets/presets";
export const Timer = () => {
  const { incrementSeconds, getSeconds, seconds, maxSeconds } = useTimerStore(
    (store) => store
  );
  const status = useTimerStore((store) => store.status);
  const setStatus = useTimerStore((store) => store.setStatus);
  const getMaxSeconds = useTimerStore((store) => store.getMaxSeconds);

  useSetInitSeconds(118);

  useEffect(() => {
    if (status === "launched") {
      const interval = setInterval(() => {
        incrementSeconds();
        const seconds = getSeconds();
        if (seconds >= getMaxSeconds()) {
          clearInterval(interval);
          setStatus("finished");
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [status]);

  return (
    <Wrapper>
      <Typography align={"left"} variant={"h1"}>
        {seconds} / {maxSeconds}
      </Typography>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
