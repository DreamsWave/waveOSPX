import DebugMenu from "@/features/debug/DebugMenu";
import { toggleDebugMenu } from "@/features/debug/debugSlice";
import { StyledDebug, StyledDebugButton } from "@/features/debug/styles";
import { RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";

const Debug = () => {
  const dispatch = useDispatch();
  const debug = useSelector((state: RootState) => state.debug);

  if (!debug.enabled) return null;

  return (
    <StyledDebug>
      <StyledDebugButton onClick={() => dispatch(toggleDebugMenu())}>
        D
      </StyledDebugButton>
      <DebugMenu />
    </StyledDebug>
  );
};

export default Debug;
