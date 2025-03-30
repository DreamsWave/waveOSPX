import TrayTextureSVG from "@/assets/textures/pc/tray.svg";
import { getBorderImage } from "@/styles/styledUtils";
import { getFormattedTime } from "@/utils/functions";
import { useEffect, useState } from "react";
import styled from "styled-components";

const StyledSystemTray = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.s(2)}px;
  ${getBorderImage(TrayTextureSVG, 1)}
`;

const StyledTime = styled.span`
  font-size: ${({ theme }) => theme.s(5)}px;
  color: ${({ theme }) => theme.pc.taskbar.time.color};
  font-family: ${({ theme }) => theme.formats.systemFont};
  white-space: nowrap;
  margin: 0 ${({ theme }) => theme.s(2)}px;
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
      <StyledTime>{currentTime}</StyledTime>
    </StyledSystemTray>
  );
};

export default SystemTray;
