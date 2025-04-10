import React from "react";
import styled from "styled-components";

const StyledMenuItem = styled.div<{ $selected?: boolean; $disabled?: boolean }>`
  list-style: none;
  padding: ${({ theme }) => theme.s(2)}px ${({ theme }) => theme.s(4)}px;
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  user-select: none;
  display: flex;
  align-items: center;
  min-height: ${({ theme }) => theme.s(10)}px;
  background-color: ${({ theme, $selected }) =>
    $selected ? theme.common.menuItem.background.active : "transparent"};
  color: ${({ theme, $disabled, $selected }) =>
    $disabled
      ? theme.common.menuItem.text.disabled
      : $selected
      ? theme.common.menuItem.text.active
      : theme.common.menuItem.text.default};

  &:hover {
    background-color: ${({ theme, $disabled, $selected }) =>
      $disabled
        ? "transparent"
        : $selected
        ? theme.common.menuItem.background.active
        : theme.common.menuItem.background.hover};
  }
`;

export type MenuItemProps = {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  selected?: boolean;
  className?: string;
  value: string;
};

const MenuItem = React.forwardRef<HTMLDivElement, MenuItemProps>(
  (
    { children, onClick, disabled = false, selected = false, className, value },
    ref
  ) => {
    const handleClick = () => {
      if (!disabled && onClick) {
        onClick();
      }
    };

    return (
      <StyledMenuItem
        ref={ref}
        $selected={selected}
        $disabled={disabled}
        className={className}
        onClick={handleClick}
        aria-disabled={disabled}
        aria-selected={selected}
        data-value={value}
      >
        {children}
      </StyledMenuItem>
    );
  }
);

MenuItem.displayName = "MenuItem";

export default MenuItem;
