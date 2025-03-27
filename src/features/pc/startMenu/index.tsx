import type { RootState } from "@/store";
import { useSelector } from "react-redux";
import { StartMenuContainer, StartMenuItemContainer } from "./styles";
import { useStartMenu } from "./useStartMenu";

const menuItems = [
  {
    id: "programs",
    label: "Programs",
    onClick: () => console.log("Programs clicked"),
  },
  {
    id: "documents",
    label: "Documents",
    onClick: () => console.log("Documents clicked"),
  },
  {
    id: "settings",
    label: "Settings",
    onClick: () => console.log("Settings clicked"),
  },
  {
    id: "search",
    label: "Search",
    onClick: () => console.log("Search clicked"),
  },
  {
    id: "help",
    label: "Help and Support",
    onClick: () => console.log("Help clicked"),
  },
  {
    id: "run",
    label: "Run...",
    onClick: () => console.log("Run clicked"),
  },
];

const StartMenu = () => {
  const isOpen = useSelector(
    (state: RootState) => state.taskbar.startMenu.isOpen
  );
  const { closeMenu } = useStartMenu();

  const handleItemClick = (onClick?: () => void) => {
    onClick?.();
    closeMenu();
  };

  return (
    <StartMenuContainer $isOpen={isOpen}>
      {menuItems.map((item) => (
        <StartMenuItemContainer
          key={item.id}
          onClick={() => handleItemClick(item.onClick)}
        >
          {item.label}
        </StartMenuItemContainer>
      ))}
    </StartMenuContainer>
  );
};

export default StartMenu;
