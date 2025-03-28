import { getTextColor } from "@/styles/colorUtils";
import palette from "@/styles/palette.json";
import type React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: ${({ theme }) => theme.s(4)}px;
  color: ${({ theme }) => theme.common.text};
  min-height: 100vh;
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.s(theme.common.fontSizes.xl)}px;
  margin-bottom: ${({ theme }) => theme.s(6)}px;
`;

const PaletteGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: ${({ theme }) => theme.s(6)}px;
`;

const ColorFamilyContainer = styled.div`
  border: ${({ theme }) => theme.getBorder()};
  overflow: hidden;
`;

const ColorFamilyName = styled.div<{ $background: string }>`
  padding: ${({ theme }) => theme.s(2)}px;
  background: ${({ $background }) => $background};
  color: ${({ $background }) => getTextColor($background)};
  font-size: ${({ theme }) => theme.s(theme.common.fontSizes.base)}px;
  text-align: center;
`;

const ColorShades = styled.div`
  display: flex;
  flex-direction: column;
`;

interface ColorShadeProps {
  $background: string;
  $textColor: string;
}

const ColorShade = styled.div.attrs<ColorShadeProps>(
  ({ $background, $textColor }) => ({
    style: {
      backgroundColor: $background,
      color: $textColor,
    },
  })
)`
  height: ${({ theme }) => theme.s(10)}px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${({ theme }) => theme.s(2)}px;
`;

const Palette: React.FC = () => {
  return (
    <Container>
      <Title>Palette </Title>

      <PaletteGrid>
        {palette.colors.map((colorFamily) => (
          <ColorFamilyContainer key={colorFamily.name}>
            <ColorFamilyName $background={colorFamily.shades[4]}>
              {colorFamily.name}
            </ColorFamilyName>
            <ColorShades>
              {colorFamily.shades.map((shade, index) => (
                <ColorShade
                  key={`${colorFamily.name}-${index}`}
                  $background={shade}
                  $textColor={getTextColor(shade)}
                >
                  <span>{index}</span>
                  <span>{shade}</span>
                </ColorShade>
              ))}
            </ColorShades>
          </ColorFamilyContainer>
        ))}
      </PaletteGrid>
    </Container>
  );
};

export default Palette;
