import palette from "@/styles/palette.json";
import type React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: ${({ theme }) => theme.s(4)}px;
  background-color: ${({ theme }) => theme.common.background};
  color: ${({ theme }) => theme.common.text};
  min-height: 100vh;
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.s(theme.common.fontSizes.xl)}px;
  margin-bottom: ${({ theme }) => theme.s(6)}px;
`;

const Subtitle = styled.h2`
  font-size: ${({ theme }) => theme.s(theme.common.fontSizes.lg)}px;
  margin: ${({ theme }) => theme.s(4)}px 0;
`;

const PaletteGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.s(6)}px;
`;

const ColorFamilyContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.pc.border};
  border-radius: ${({ theme }) => theme.s(2)}px;
  overflow: hidden;
`;

const ColorFamilyName = styled.div`
  padding: ${({ theme }) => theme.s(2)}px;
  background: ${({ theme }) => theme.pc.taskbar.background};
  font-weight: bold;
`;

const ColorShades = styled.div`
  display: flex;
  flex-direction: column;
`;

interface ColorShadeProps {
  background: string;
  textColor: string;
}

const ColorShade = styled.div<ColorShadeProps>`
  height: ${({ theme }) => theme.s(10)}px;
  background-color: ${({ background }) => background};
  color: ${({ textColor }) => textColor};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${({ theme }) => theme.s(2)}px;
`;

const ThemeExample = styled.div`
  margin-top: ${({ theme }) => theme.s(8)}px;
  border: 1px solid ${({ theme }) => theme.pc.border};
  border-radius: ${({ theme }) => theme.s(2)}px;
  padding: ${({ theme }) => theme.s(4)}px;
`;

const WindowExample = styled.div`
  border: 1px solid ${({ theme }) => theme.pc.window.outline};
  border-radius: ${({ theme }) => theme.s(1)}px;
  width: 300px;
  overflow: hidden;
`;

const WindowTitleBar = styled.div`
  background-color: ${({ theme }) => theme.pc.window.titleBar.background};
  color: ${({ theme }) => theme.pc.window.titleBar.text};
  height: ${({ theme }) => theme.s(theme.pc.window.titleBar.height)}px;
  display: flex;
  align-items: center;
  padding: 0 ${({ theme }) => theme.s(2)}px;
`;

const WindowContent = styled.div`
  background-color: ${({ theme }) => theme.pc.window.background};
  color: ${({ theme }) => theme.pc.window.text};
  padding: ${({ theme }) => theme.s(3)}px;
  min-height: ${({ theme }) => theme.s(40)}px;
`;

const Button = styled.button`
  background-color: ${({ theme }) =>
    theme.pc.taskbar.startMenuButton.background};
  color: ${({ theme }) => theme.pc.taskbar.startMenuButton.text};
  border: none;
  padding: ${({ theme }) => theme.s(2)}px ${({ theme }) => theme.s(4)}px;
  border-radius: ${({ theme }) => theme.s(1)}px;
  cursor: pointer;
  margin-right: ${({ theme }) => theme.s(2)}px;
`;

const Palette: React.FC = () => {
  // Helper function to determine if text should be light or dark based on background
  const getTextColor = (bgColor: string): string => {
    // Simple algorithm - convert hex to RGB and check luminance
    const hex = bgColor.replace("#", "");
    const r = Number.parseInt(hex.substring(0, 2), 16);
    const g = Number.parseInt(hex.substring(2, 4), 16);
    const b = Number.parseInt(hex.substring(4, 6), 16);

    // Calculate luminance using perceived brightness formula
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

    return luminance > 0.5 ? "#000000" : "#ffffff";
  };

  return (
    <Container>
      <Title>Palette </Title>

      <Subtitle>Color Families</Subtitle>
      <PaletteGrid>
        {palette.colors.map((colorFamily) => (
          <ColorFamilyContainer key={colorFamily.name}>
            <ColorFamilyName>{colorFamily.name}</ColorFamilyName>
            <ColorShades>
              {colorFamily.shades.map((shade, index) => (
                <ColorShade
                  key={`${colorFamily.name}-${index}`}
                  background={shade}
                  textColor={getTextColor(shade)}
                >
                  <span>Shade {index}</span>
                  <span>{shade}</span>
                </ColorShade>
              ))}
            </ColorShades>
          </ColorFamilyContainer>
        ))}
      </PaletteGrid>

      <Subtitle>Theme Example</Subtitle>
      <ThemeExample>
        <WindowExample>
          <WindowTitleBar>Window Title</WindowTitleBar>
          <WindowContent>
            <p>
              This is a themed window demonstrating the new feature-based
              approach.
            </p>
            <Button>Themed Button</Button>
          </WindowContent>
        </WindowExample>
      </ThemeExample>
    </Container>
  );
};

export default Palette;
