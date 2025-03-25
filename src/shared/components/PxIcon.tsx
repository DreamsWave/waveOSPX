import { ICON_DIMENSIONS } from "@/constants/icons";
import { useIcon } from "@/hooks/useIcon";
import { Icon, IconSize } from "@/types/icons";
import React from "react";
import styled, { useTheme } from "styled-components";

const IconContainer = styled.div<{ $height: number; $width: number }>`
  height: ${({ $height }) => $height}px;
  width: ${({ $width }) => $width}px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledImage = styled.img<{ $height: number; $width: number }>`
  height: ${({ $height }) => $height}px;
  width: ${({ $width }) => $width}px;
`;

const IconPlaceholder = styled.div<{ $height: number; $width: number }>`
  height: ${({ $height }) => $height}px;
  width: ${({ $width }) => $width}px;
  background-color: gray;
  border-radius: 4px;
`;

interface PxIconProps {
  src?: string;
  name?: Icon["name"];
  size?: IconSize;
  alt?: string;
  className?: string;
  height?: number;
  width?: number;
}

const PxIcon = React.memo(
  ({ name, size = "md", alt = "", className, ...props }: PxIconProps) => {
    const theme = useTheme();
    const pixelSize = theme.sizes.pixelSize;
    const { src, isLoading, error } = useIcon({
      name: name ?? "",
      size,
      extension: "png",
    });

    const dimensions = ICON_DIMENSIONS[size];

    if (props.src && props.height && props.width)
      return (
        <StyledImage
          src={props.src}
          alt={alt}
          $height={props.height * pixelSize}
          $width={props.width * pixelSize}
        />
      );

    if (isLoading || error || !src) {
      return (
        <IconPlaceholder
          $height={
            props.height ? props.height * pixelSize : dimensions * pixelSize
          }
          $width={
            props.width ? props.width * pixelSize : dimensions * pixelSize
          }
          className={className}
        />
      );
    }

    return (
      <IconContainer
        $height={props.height ? props.height * pixelSize : dimensions}
        $width={props.width ? props.width * pixelSize : dimensions}
        className={className}
      >
        <StyledImage
          $height={props.height ? props.height * pixelSize : dimensions}
          $width={props.width ? props.width * pixelSize : dimensions}
          src={src}
          alt={alt}
        />
      </IconContainer>
    );
  }
);

PxIcon.displayName = "PxIcon";

export default PxIcon;
