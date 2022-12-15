import styled from "styled-components";
import { Slider } from "@mui/material";
import { useTimerStore } from "./store/useTimerStore";

export const Track = () => {
  const { seconds, disruptions, maxSeconds } = useTimerStore((store) => store);

  return (
    <Wrapper>
      <Slider
        min={0}
        marks={disruptions}
        max={maxSeconds}
        disabled
        value={seconds}
        components={{ MarkLabel: MarkLabelCustom }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  height: 16px;
  width: 100%;
`;

const MarkLabelCustom = styled.span`
  background-color: #ab003c;
  width: 8px;
  height: 16px;
  position: absolute;
  transform: translateY(10px) translateX(-2px);
  overflow: hidden;
  content-visibility: hidden;
`;
