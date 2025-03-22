import MusicPlayerIcon from "@/assets/icons/music-player-64-64-x3.png";
import { launchApplication } from "@/features/pc/applications/launchApplication";
import Shortcut from "@/features/pc/desktop/Shortcut";
import {
  StyledDesktop,
  StyledShortcutsGrid,
  StyledShortcutsGridItem,
} from "@/features/pc/desktop/styles";
import { useAppDispatch } from "@/store";

const Desktop = () => {
  const dispatch = useAppDispatch();
  return (
    <StyledDesktop>
      <StyledShortcutsGrid>
        {Array.from({ length: 64 }).map((_, i) => (
          <StyledShortcutsGridItem key={i}>
            <Shortcut
              action={() => dispatch(launchApplication("musicPlayer"))}
              label="Music Player"
              icon={MusicPlayerIcon}
            />
          </StyledShortcutsGridItem>
        ))}
      </StyledShortcutsGrid>
    </StyledDesktop>
  );
};

export default Desktop;
