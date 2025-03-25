import PxIcon from "@/shared/components/PxIcon";
import { memo } from "react";
import styled from "styled-components";

const StyledMusicPlayer = styled.div`
  height: 100%;
  width: 100%;
  background-color: #bac7db;
  color: #615f84;
`;

const StyledAppTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  padding: 0;
  text-align: center;
  text-transform: uppercase;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60%;
`;

type Props = {
  windowId: string;
};

const MusicPlayer = memo(({ windowId }: Props) => {
  return (
    <StyledMusicPlayer>
      <StyledAppTitle>Music Player</StyledAppTitle>
      <StyledContainer>
        <PxIcon size="lg" icon={{ name: "music-player" }} />
        <p style={{ marginTop: 10 }}>Playing music for window {windowId}</p>
        {/* Add audio controls here if implementing playback */}
      </StyledContainer>
    </StyledMusicPlayer>
  );
});

export default MusicPlayer;
