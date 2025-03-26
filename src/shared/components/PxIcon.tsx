import { ICON_DIMENSIONS } from "@/constants/icons";
import useIcon from "@/hooks/useIcon";
import type { Icon, IconSize } from "@/types/icons";
import React from "react";
import styled, { useTheme } from "styled-components";

const IconContainer = styled.div<{ $height: number; $width: number }>`
  height: ${({ $height }) => `${$height}px`};
  width: ${({ $width }) => `${$width}px`};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledImage = styled.img<{ $height: number; $width: number }>`
  height: ${({ $height }) => `${$height}px`};
  width: ${({ $width }) => `${$width}px`};
  image-rendering: pixelated;
`;

const IconPlaceholder = styled.div<{ $height: number; $width: number }>`
  height: ${({ $height }) => `${$height}px`};
  width: ${({ $width }) => `${$width}px`};
  background-color: gray;
  border-radius: ${({ theme }) => `${theme.s(1)}px`};
`;

interface PxIconProps {
  icon?: Icon;
  size?: IconSize;
  className?: string;
}

const PxIcon = React.memo(({ icon, size, className }: PxIconProps) => {
  const theme = useTheme();

  const effectiveIcon: Icon = icon || { name: "default-icon", size: "md" };
  const effectiveSize =
    size ||
    effectiveIcon.size ||
    (effectiveIcon.height && effectiveIcon.width ? "custom" : "md");

  const {
    src: hookSrc,
    isLoading,
    error,
  } = useIcon({
    name: effectiveIcon.name || "default-icon",
    size: effectiveSize === "custom" ? "md" : (effectiveSize as IconSize),
    variants: effectiveIcon.variants,
    extension: effectiveIcon.extension || "png",
  });

  const finalSrc = effectiveIcon.src || hookSrc;

  const baseDimensions =
    effectiveSize === "custom"
      ? { height: effectiveIcon.height || 16, width: effectiveIcon.width || 16 }
      : {
          height: ICON_DIMENSIONS[effectiveSize as IconSize],
          width: ICON_DIMENSIONS[effectiveSize as IconSize],
        };

  const scaledHeight = theme.s(baseDimensions.height);
  const scaledWidth = theme.s(baseDimensions.width);

  if (isLoading || error || !finalSrc) {
    return (
      <IconPlaceholder
        $height={scaledHeight}
        $width={scaledWidth}
        className={className}
      />
    );
  }

  return (
    <IconContainer
      $height={scaledHeight}
      $width={scaledWidth}
      className={className}
    >
      <StyledImage
        $height={scaledHeight}
        $width={scaledWidth}
        src={finalSrc}
        alt={effectiveIcon.alt || `${effectiveIcon.name || "icon"}`}
      />
    </IconContainer>
  );
});

PxIcon.displayName = "PxIcon";

export default PxIcon;
