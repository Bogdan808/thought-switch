import styled from "styled-components";
import { useEffect } from "react";
import { useTimerStore } from "./store/useTimerStore";
import { Typography } from "@mui/material";
export const Timer = () => {
  const { incrementSeconds, setSeconds, getSeconds, seconds, maxSeconds } =
    useTimerStore((store) => store);
  const isLaunched = useTimerStore((store) => store.isLaunched);
  const setStatus = useTimerStore((store) => store.setStatus);
  const getMaxSeconds = useTimerStore((store) => store.getMaxSeconds);

  useEffect(() => {
    setSeconds(119);
  }, []);

  useEffect(() => {
    if (isLaunched) {
      const interval = setInterval(() => {
        incrementSeconds();
        const seconds = getSeconds();
        if (seconds === getMaxSeconds()) {
          clearInterval(interval);
          setStatus("finished");
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isLaunched]);

  return (
    <Wrapper>
      <Typography align={"left"} variant={"h1"}>
        {seconds} / {maxSeconds}
      </Typography>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
