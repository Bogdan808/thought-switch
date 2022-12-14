import styled from "styled-components";
import { useEffect } from "react";
import { useTimerStore } from "./store/useTimerStore";
import { Typography } from "@mui/material";
export const Timer = () => {
  const {
    incrementSeconds,
    setSeconds,
    getSeconds,
    seconds,
    maxSeconds,
    getMaxSeconds,
  } = useTimerStore((store) => store);
  const isLaunched = useTimerStore((store) => store.isLaunched);

  useEffect(() => {
    setSeconds(0);
  }, []);

  useEffect(() => {
    if (isLaunched) {
      const interval = setInterval(() => {
        incrementSeconds();
        const seconds = getSeconds();
        if (seconds === getMaxSeconds()) {
          clearInterval(interval);
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
