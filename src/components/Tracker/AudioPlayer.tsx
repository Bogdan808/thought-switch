import ReactAudioPlayer from "react-audio-player";
import { createRef, useEffect } from "react";
import { useTimerStore } from "./store/useTimerStore";

export const AudioPlayer = () => {
  const isLaunched = useTimerStore((store) => store.isLaunched);
  const ref = createRef<ReactAudioPlayer>();
  useEffect(() => {
    ref.current?.audioEl.current?.play();
  }, [isLaunched]);
  const replay = () => {
    ref.current?.audioEl.current?.play();
  };
  return (
    <ReactAudioPlayer
      src="https://cdn.pixabay.com/audio/2021/09/06/audio_37aad22374.mp3"
      controls
      ref={ref}
      autoPlay
      onEnded={replay}
    />
  );
};
