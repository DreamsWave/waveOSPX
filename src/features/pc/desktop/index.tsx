import MusicPlayerIcon from "@/assets/icons/music-player-64-64-x3.png";
import TextEditorIcon from "@/assets/pc/icons/apps/text-editor.png";
import { launchApplication } from "@/features/pc/applications/launchApplication";
import Shortcut from "@/features/pc/desktop/Shortcut";
import { StyledDesktop, StyledDesktopItem } from "@/features/pc/desktop/styles";
import { useAppDispatch } from "@/store";

const Desktop = () => {
  const dispatch = useAppDispatch();
  return (
    <StyledDesktop>
      <StyledDesktopItem>
        <Shortcut
          action={() => dispatch(launchApplication("musicPlayer"))}
          label="Music Player"
          icon={MusicPlayerIcon}
        />
      </StyledDesktopItem>
      <StyledDesktopItem>
        <Shortcut
          action={() => dispatch(launchApplication("textEditor"))}
          label="Text Editor"
          icon={TextEditorIcon}
        />
      </StyledDesktopItem>
    </StyledDesktop>
  );
};

export default Desktop;
