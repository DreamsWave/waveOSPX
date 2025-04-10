import DownPointingIconSVG from "@/assets/icons/single/pc/scrollbar-down-pointing.svg";
import UpPointingIconSVG from "@/assets/icons/single/pc/scrollbar-up-pointing.svg";
import ElevatedRoundedTextureSVG from "@/assets/textures/pc/elevated-rounded.svg";
import LoweredRoundedTextureSVG from "@/assets/textures/pc/lowered-rounded.svg";
import PxIcon from "@/components/PxIcon";
import type { MenuItemProps } from "@/components/common/MenuItem";
import { getBorderImage } from "@/styles/styledUtils";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const SelectContainer = styled.div`
  position: relative;
  width: 100%;
  user-select: none;
`;

const SelectButton = styled.button<{ $isOpen: boolean; $disabled?: boolean }>`
  width: 100%;
  min-height: ${({ theme }) => theme.s(12)}px;
  padding-left: ${({ theme }) => theme.s(4)}px;
  font-family: ${({ theme }) => theme.formats.systemFont};
  font-size: ${({ theme }) => theme.getFontSize("sm")};
  background: ${({ theme, $disabled }) =>
    $disabled
      ? theme.common.select.background.disabled
      : theme.common.select.background.default};
  ${getBorderImage(LoweredRoundedTextureSVG, 1)}
  color: ${({ theme, $disabled }) =>
    $disabled
      ? theme.common.select.text.disabled
      : theme.common.select.text.default};
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: left;
  transition: background-color 0.2s;

  &:focus {
    outline: ${({ theme }) =>
      theme.getBorder(1, theme.common.select.borderFocused)};
    outline-offset: 2px;
  }
`;

const SelectValue = styled.span`
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const DropdownIndicator = styled.div`
  display: inline-block;
  margin-left: ${({ theme }) => theme.s(2)}px;
  cursor: pointer;
  padding: ${({ theme }) => theme.s(2)}px;
  background: ${({ theme }) => theme.pc.window.background};
  ${getBorderImage(ElevatedRoundedTextureSVG, 1)}
`;

const MenuContainer = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  width: 100%;
  margin-top: ${({ theme }) => theme.s(1)}px;
  background: ${({ theme }) => theme.common.background.primary};
  border: ${({ theme }) => theme.getBorder(1)};
  ${getBorderImage(LoweredRoundedTextureSVG, 1)}
  max-height: ${({ theme }) => theme.s(40)}px;
  overflow-y: auto;
  z-index: 100;
  display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
  padding: ${({ theme }) => theme.s(1)}px 0;
`;

export type SelectChangeEvent = {
  target: {
    value: string;
  };
};

export type SelectProps = {
  value: string;
  onChange: (event: SelectChangeEvent) => void;
  placeholder?: string;
  disabled?: boolean;
  children:
    | React.ReactElement<MenuItemProps>
    | React.ReactElement<MenuItemProps>[];
  className?: string;
  id?: string;
  name?: string;
  required?: boolean;
};

const Select: React.FC<SelectProps> = ({
  value,
  onChange,
  placeholder = "Select an option",
  disabled = false,
  children,
  className,
  id,
  name,
  required,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);
  const [displayValue, setDisplayValue] = useState<string>("");

  // Update display value when value changes
  useEffect(() => {
    // Find the child with the matching value and get its text content
    React.Children.forEach(children, (child) => {
      if (React.isValidElement(child) && child.props.value === value) {
        setDisplayValue(
          typeof child.props.children === "string"
            ? child.props.children
            : value
        );
      }
    });
  }, [children, value]);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const toggleDropdown = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const handleSelect = (selectedValue: string) => {
    onChange({ target: { value: selectedValue } });
    setIsOpen(false);
  };

  // Clone children and add onClick handler
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement<MenuItemProps>(child)) {
      return React.cloneElement(child, {
        onClick: () => handleSelect(child.props.value),
        selected: child.props.value === value,
      });
    }
    return child;
  });

  return (
    <SelectContainer ref={selectRef} className={className}>
      <SelectButton
        type="button"
        $isOpen={isOpen}
        $disabled={disabled}
        onClick={toggleDropdown}
        id={id}
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-disabled={disabled}
        aria-required={required}
        name={name}
      >
        <SelectValue>{value ? displayValue : placeholder}</SelectValue>
        <DropdownIndicator>
          <PxIcon
            icon={{
              src: isOpen ? UpPointingIconSVG : DownPointingIconSVG,
              height: 3,
              width: 3,
            }}
          />
        </DropdownIndicator>
      </SelectButton>
      <MenuContainer $isOpen={isOpen} aria-labelledby={id} tabIndex={-1}>
        {childrenWithProps}
      </MenuContainer>
    </SelectContainer>
  );
};

export default Select;
