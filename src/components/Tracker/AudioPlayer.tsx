import ReactAudioPlayer from "react-audio-player";
import { createRef, useEffect, useState } from "react";
import { useTimerStore } from "./store/useTimerStore";
import styled from "styled-components";
import { MusicNote, MusicOff } from "@mui/icons-material";

export const AudioPlayer = () => {
  const isLaunched = useTimerStore((store) => store.isLaunched);
  const ref = createRef<ReactAudioPlayer>();
  const [isMusicOn, setMusicOn] = useState(true);

  useEffect(() => {
    ref.current?.audioEl.current?.play();
  }, [isLaunched]);
  const replay = () => {
    ref.current?.audioEl.current?.play();
  };

  const toggleMusic = () => {
    setMusicOn(!isMusicOn);
    if (isMusicOn) {
      ref.current?.audioEl.current?.pause();
    } else {
      ref.current?.audioEl.current?.play();
    }
  };

  return (
    <Wrapper>
      <SoundSwitcher>
        {isMusicOn && <MusicNote fontSize={"large"} onClick={toggleMusic} />}
        {!isMusicOn && <MusicOff fontSize={"large"} onClick={toggleMusic} />}
      </SoundSwitcher>

      <ReactAudioPlayer
        src="https://cdn.pixabay.com/audio/2021/09/06/audio_37aad22374.mp3"
        ref={ref}
        onEnded={replay}
      />
    </Wrapper>
  );
};

const Wrapper = styled.span``;
const SoundSwitcher = styled.div``;
