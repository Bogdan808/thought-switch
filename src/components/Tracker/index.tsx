import React, { useMemo } from "react";
import { Center } from "../styles";
import styled from "styled-components";
import { Timer } from "./Timer";
import { Track } from "./Track";
import { AddDisruption } from "./AddDisruption";
import { Selector } from "./Selector";
import { useTimerStore } from "./store/useTimerStore";
import shallow from "zustand/shallow";
import { RunButton } from "./RunButton";
import { AudioPlayer } from "./AudioPlayer";

export const Tracker = () => {
  const [maxSeconds] = useTimerStore((store) => [store.maxSeconds], shallow);
  const isLaunched = useTimerStore((store) => store.isLaunched);
  return (
    <Wrapper>
      <Header>
        <Actions>
          <SelectorWrapper>
            <Selector maxSeconds={maxSeconds} />
          </SelectorWrapper>

          <AudioWrapper>
            <AudioPlayer />
          </AudioWrapper>
        </Actions>

        <TimerWrapper>
          <Timer />
        </TimerWrapper>
      </Header>
      <Track />
      <Footer>
        {isLaunched && <AddDisruption />}
        {!isLaunched && <RunButton />}
      </Footer>
    </Wrapper>
  );
};

const Header = styled(Center)`
  align-items: center;
`;

const Wrapper = styled.div`
  padding-top: 28px;
`;

const Footer = styled(Center)`
  align-items: center;
  margin-top: 120px;
`;
const Actions = styled.div`
  margin-right: auto;
  display: flex;
  align-items: center;
`;
const SelectorWrapper = styled.div``;
const AudioWrapper = styled.div`
  margin-left: 16px;
`;
const TimerWrapper = styled.div``;
