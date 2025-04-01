import Palette from "@/components/Palette";
import { memo } from "react";
import styled from "styled-components";

const StyledSettings = styled.div`
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
  width: 100%;
`;

const Settings = memo(() => {
  return (
    <StyledSettings>
      <StyledAppTitle>Settings</StyledAppTitle>
      <StyledContainer>
        <Palette />
      </StyledContainer>
    </StyledSettings>
  );
});

export default Settings;
