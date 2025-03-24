import AppIcon from "@/assets/icons/music-player-64-64-x3.png";
import StartMenuButton from "@/features/pc/taskbar/StartMenuButton";
import {
  StyledTaskbar,
  StyledTaskbarAppButtons,
  StyledTaskbarSeparator,
} from "@/features/pc/taskbar/styles";
import SystemTray from "@/features/pc/taskbar/systemTray";
import TaskbarButton from "@/features/pc/taskbar/taskbarButton";

const Taskbar = () => {
  return (
    <StyledTaskbar>
      <StartMenuButton />
      <StyledTaskbarSeparator />
      <StyledTaskbarAppButtons>
        <TaskbarButton
          icon={AppIcon}
          label="Some App Some App Some App Some App Some App Some App Some App "
          isActive
        />
        <TaskbarButton icon={AppIcon} label="Another App" />
      </StyledTaskbarAppButtons>
      <SystemTray />
    </StyledTaskbar>
  );
};

export default Taskbar;
