import PxIcon from "@/components/PxIcon";
import { memo } from "react";
import styled, { useTheme } from "styled-components";

const StyledMusicPlayer = styled.div`
  min-height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.pc.window.background};
  color: ${({ theme }) => theme.pc.window.text};
`;

const StyledAppTitle = styled.h2`
  font-size: ${({ theme }) => `${theme.s(theme.common.fontSizes.lg)}px`};
  font-weight: 600;
  padding: 0;
  text-align: center;
  text-transform: uppercase;
  padding-top: ${({ theme }) => `${theme.s(3)}px`};
  padding-bottom: ${({ theme }) => `${theme.s(3)}px`};
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${({ theme }) => `${theme.s(70)}px`};
`;

type Props = {
  windowId: string;
};

const MusicPlayer = memo(({ windowId }: Props) => {
  const theme = useTheme();
  return (
    <StyledMusicPlayer>
      <StyledAppTitle>Music Player</StyledAppTitle>
      <StyledContainer>
        <PxIcon size="lg" icon={{ name: "music-player" }} />
        <p style={{ marginTop: `${theme.s(3)}px` }}>
          Playing music for window {windowId}
        </p>
        {/* Add audio controls here if implementing playback */}
      </StyledContainer>
    </StyledMusicPlayer>
  );
});

export default MusicPlayer;
