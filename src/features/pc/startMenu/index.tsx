import { launchApplication } from "@/features/pc/applications/launchApplication";

const StartMenu = () => {
  return (
    <div>
      start menu
      <button onClick={() => launchApplication("textEditor")}>
        launch text editor
      </button>
    </div>
  );
};

export default StartMenu;
