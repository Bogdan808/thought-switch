import { Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { useTimerStore } from "./store/useTimerStore";

export const FinalMessage = () => {
  const { disruptions, maxSeconds } = useTimerStore((store) => store);
  const disruptionsCount = [...new Set(disruptions)].length;
  const result = maxSeconds - disruptionsCount;
  return (
    <Finished>
      <Typography variant={"h3"}>
        Your have finished the task. <br />
        Your result: {result}
      </Typography>
    </Finished>
  );
};

export const Finished = styled.div`
  text-align: center;
`;
