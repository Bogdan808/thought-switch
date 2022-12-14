import styled from "styled-components";
import { Button, Slider } from "@mui/material";
import { useTimerStore } from "./store/useTimerStore";
export const Track = () => {
  const { seconds, initSecond, disruptions, maxSeconds } = useTimerStore(
    (store) => store
  );

  return (
    <Wrapper>
      <Slider
        min={0}
        marks={disruptions}
        max={maxSeconds}
        disabled
        value={seconds}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  height: 16px;
  width: 100%;
`;
