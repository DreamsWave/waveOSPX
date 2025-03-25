import { ICON_DIMENSIONS } from "@/constants/icons";
import { SHORTCUT_SIZE } from "@/features/pc/desktop/constants";
import { useIcon } from "@/hooks/useIcon";
import { Icon } from "@/types/icons";
import { px } from "@/utils/functions";
import styled from "styled-components";

const StyledShortcutButton = styled.button`
  background-color: transparent;
  font-family: inherit;
  width: 100%;
`;

const StyledFigure = styled.figure`
  display: flex;
  flex-direction: column;
  margin-bottom: -2px;
  place-items: center;
  cursor: pointer;

  figcaption {
    pointer-events: none;
  }
`;

const StyledFigurePicture = styled.picture`
  cursor: inherit;
  width: ${({ theme }) =>
    theme.sizes.pc.desktop.shortcut.iconSizePX * theme.sizes.pixelSize}px;
  height: ${({ theme }) =>
    theme.sizes.pc.desktop.shortcut.iconSizePX * theme.sizes.pixelSize}px;
`;

const StyledFigureImage = styled.img`
  aspect-ratio: 1 / 1;
  max-height: ${({ theme }) =>
    theme.sizes.pc.desktop.shortcut.iconSizePX * theme.sizes.pixelSize}px;
  max-width: ${({ theme }) =>
    theme.sizes.pc.desktop.shortcut.iconSizePX * theme.sizes.pixelSize}px;
  min-height: ${({ theme }) =>
    theme.sizes.pc.desktop.shortcut.iconSizePX * theme.sizes.pixelSize}px;
  min-width: ${({ theme }) =>
    theme.sizes.pc.desktop.shortcut.iconSizePX * theme.sizes.pixelSize}px;
  object-fit: contain;
  opacity: 1;
  pointer-events: none;
  visibility: visible;
`;

const StyledFigCaption = styled.figcaption`
  color: rgb(255, 255, 255);
  font-size: 12px;
  line-height: 1.2;
  margin: ${px(1)} 0px;
  overflow-wrap: anywhere;
  padding: 2px 0px;
  text-shadow: rgba(0, 0, 0, 0.4) 0px 0px 1px, rgba(0, 0, 0, 0.3) 0px 0px 1px,
    rgba(0, 0, 0, 0.4) 0px 1px 1px, rgba(0, 0, 0, 0.3) 0px 1px 1px,
    rgba(0, 0, 0, 0.4) 0px 1px 1px, rgba(0, 0, 0, 0.3) 0px 1px 1px;
`;

const IconPlaceholder = styled.div<{ $size: number }>`
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 50%;
`;

type Props = {
  label?: string;
  icon: Icon;
  action?: () => void;
};

const Shortcut = ({ label = "", icon, action }: Props) => {
  const { src, isLoading, error } = useIcon({
    name: icon.name ?? "",
    size: SHORTCUT_SIZE,
    extension: "png",
  });

  const dimensions = ICON_DIMENSIONS[SHORTCUT_SIZE];

  return (
    <StyledShortcutButton onClick={action}>
      <StyledFigure>
        <StyledFigurePicture>
          {isLoading || error || !src ? (
            <IconPlaceholder $size={dimensions} />
          ) : (
            <StyledFigureImage src={src} alt={`${label} icon`} />
          )}
        </StyledFigurePicture>
        <StyledFigCaption>{label}</StyledFigCaption>
      </StyledFigure>
    </StyledShortcutButton>
  );
};

export default Shortcut;
