import Shortcut from "@/features/pc/desktop/Shortcut";
import { StyledDesktop, StyledDesktopItem } from "@/features/pc/desktop/styles";
import { processDirectory } from "@/features/pc/process/directory";
import { launchApplication } from "@/features/pc/process/functions";
import { useAppDispatch } from "@/store";

const Desktop = () => {
  const dispatch = useAppDispatch();

  return (
    <StyledDesktop>
      {Object.entries(processDirectory).map(([processName, process]) => (
        <StyledDesktopItem key={processName}>
          <Shortcut
            action={() => dispatch(launchApplication(processName))}
            label={process.title}
            icon={process.icon}
          />
        </StyledDesktopItem>
      ))}
    </StyledDesktop>
  );
};

export default Desktop;
