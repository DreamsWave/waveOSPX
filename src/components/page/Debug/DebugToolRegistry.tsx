import DebugToggleButton from "@/components/page/Debug/DebugToggleButton";
import { DebugTool } from "@/components/page/Debug/types";

const debugTools: DebugTool[] = [];

export const registerDebugTool = (tool: DebugTool) => {
  debugTools.push(tool);
};

export const getDebugTools = () => debugTools;

registerDebugTool({
  label: "pixelGrid",
  component: <DebugToggleButton type="pixelGrid" />,
});
registerDebugTool({
  label: "theme",
  component: <DebugToggleButton type="theme" />,
});
registerDebugTool({
  label: "focus",
  component: <DebugToggleButton type="focus" />,
});
registerDebugTool({
  label: "reducedMotion",
  component: <DebugToggleButton type="reducedMotion" />,
});
