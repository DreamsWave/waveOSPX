import { closeStartMenu, toggleStartMenu } from "@/features/pc/taskbar/slice";
import type { RootState } from "@/store";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useStartMenu = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(
    (state: RootState) => state.pc.taskbar.startMenu.isOpen
  );

  const handleToggleMenu = useCallback(() => {
    dispatch(toggleStartMenu());
  }, [dispatch]);

  const handleCloseMenu = useCallback(() => {
    dispatch(closeStartMenu());
  }, [dispatch]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        !target.closest(".start-menu") &&
        !target.closest(".start-menu-button")
      ) {
        handleCloseMenu();
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen, handleCloseMenu]);

  return {
    isOpen,
    toggleMenu: handleToggleMenu,
    closeMenu: handleCloseMenu,
  };
};
