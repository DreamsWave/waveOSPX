import {
  StyledDebugMenu,
  StyledDebugMenuItem,
} from "@/components/page/Debug/styles";
import { DebugTool } from "@/components/page/Debug/types";

const DebugMenu = ({
  tools,
  isVisible,
}: {
  tools: DebugTool[];
  isVisible: boolean;
}) => {
  if (!isVisible) return null;
  return (
    <StyledDebugMenu>
      {tools.map((tool) => (
        <StyledDebugMenuItem key={tool.label}>
          {tool.component}
        </StyledDebugMenuItem>
      ))}
    </StyledDebugMenu>
  );
};

export default DebugMenu;
