import React from "react";
import { Center } from "../styles";
import styled from "styled-components";
import { Timer } from "./Timer";
import { AddDisruption } from "./AddDisruption";
import { Selector } from "./Selector";
import { useTimerStore } from "./store/useTimerStore";
import shallow from "zustand/shallow";
import { RunButton } from "./RunButton";
import { AudioPlayer } from "./AudioPlayer";
import { RestartButton } from "./RestartButton";
import { ShowResult } from "./Track";
import { Space } from "../common/Space";
import { FinalMessage } from "./FinalMessage";
import { TStatusTracker } from "./types";

export const Tracker = () => {
  const [maxSeconds] = useTimerStore((store) => [store.maxSeconds], shallow);
  const status: TStatusTracker = useTimerStore((store) => store.status);
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
      <ShowResult />
      <Footer>
        {status === "launched" && <AddDisruption />}
        {status !== "launched" && <RunButton />}
        {status === "launched" && <RestartButton />}
      </Footer>
      {status === "finished" && <FinalMessage />}
      <Space />
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
  flex-direction: column;

  & > button {
    margin-bottom: 8px;
  }
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
