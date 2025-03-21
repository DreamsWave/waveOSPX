import { launchApplication } from "@/features/applications/launchApplication";

const StartMenu = () => {
  return (
    <div>
      start menu
      <button onClick={() => launchApplication("TextEditor")}>
        launch text editor
      </button>
    </div>
  );
};

export default StartMenu;
