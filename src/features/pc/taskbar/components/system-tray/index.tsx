import {
  StyledSystemTray,
  StyledTime,
} from "@/features/pc/taskbar/components/system-tray/styles";
import { getFormattedTime } from "@/utils/functions";
import { useEffect, useState } from "react";

const SystemTray = () => {
  const [currentTime, setCurrentTime] = useState<string>(getFormattedTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(getFormattedTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <StyledSystemTray>
      <StyledTime>{currentTime}</StyledTime>
    </StyledSystemTray>
  );
};

export default SystemTray;
