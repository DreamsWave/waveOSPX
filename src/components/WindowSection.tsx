import WindowSectionBorderImageSVG from "@/assets/textures/pc/window-section.svg";
import { getBorderImage } from "@/styles/styledUtils";
import styled from "styled-components";

export const StyledWindowSection = styled.div`
  margin-top: ${({ theme }) => theme.s(4)}px;
  margin-bottom: ${({ theme }) => theme.s(6)}px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.s(4)}px;
  position: relative;
  padding: ${({ theme }) => theme.s(3)}px;

  ${getBorderImage(WindowSectionBorderImageSVG, 2)}
`;

export const WindowSectionTitle = styled.h3`
  position: absolute;
  bottom: 100%;
  left: ${({ theme }) => theme.s(3)}px;
  transform: translateY(70%);
  font-size: ${({ theme }) => theme.getFontSize("base")};
  background: ${({ theme }) => theme.pc.window.background};
  color: ${({ theme }) => theme.common.text.primary};
  padding: 0 ${({ theme }) => theme.s(2)}px;
`;

type Props = {
  children: React.ReactNode;
  title: string;
};

const WindowSection = ({ children, title }: Props) => {
  return (
    <StyledWindowSection>
      <WindowSectionTitle>{title}</WindowSectionTitle>
      {children}
    </StyledWindowSection>
  );
};

export default WindowSection;
