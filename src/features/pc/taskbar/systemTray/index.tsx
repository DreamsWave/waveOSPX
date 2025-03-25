import TrayTextureSVG from "@/assets/textures/pc/tray.svg";
import NinePatch from "@/shared/components/NinePatch";
import { getFormattedTime, px } from "@/utils/functions";
import { useEffect, useState } from "react";
import styled from "styled-components";

const StyledSystemTray = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: ${px(2)};
`;

const StyledTime = styled.span`
  font-size: ${px(5)};
  color: ${({ theme }) => theme.colors.pc.taskbar.time.color};
  font-family: ${({ theme }) => theme.formats.systemFont};
  white-space: nowrap;
  margin: 0 ${px(2)};
`;

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
      <NinePatch texture={TrayTextureSVG} patchMargin={1}>
        <StyledTime>{currentTime}</StyledTime>
      </NinePatch>
    </StyledSystemTray>
  );
};

export default SystemTray;
