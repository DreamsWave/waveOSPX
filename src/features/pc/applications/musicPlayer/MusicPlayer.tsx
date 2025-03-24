import { memo } from "react";
import styled from "styled-components";

const StyledMusicPlayer = styled.div`
  height: 100%;
  width: 100%;
  background-color: #bac7db;
  color: #615f84;
`;

type Props = {
  windowId: string;
};

const MusicPlayer = memo(({ windowId }: Props) => {
  return (
    <StyledMusicPlayer>
      <h3>Music Player</h3>
      <p>Playing music for window {windowId}</p>
      {/* Add audio controls here if implementing playback */}
    </StyledMusicPlayer>
  );
});

export default MusicPlayer;
