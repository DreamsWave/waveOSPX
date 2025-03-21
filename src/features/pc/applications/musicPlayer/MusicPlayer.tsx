import { memo } from "react";
import styled from "styled-components";

const StyledMusicPlayer = styled.div`
  padding: 10px;
  color: ${({ theme }) => theme.colors.text};
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
