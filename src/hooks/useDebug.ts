import {
  setPixelGridCellSize,
  toggleDebug,
  toggleDebugMenu,
  togglePixelGrid,
} from "@/store/debugSlice";
import {
  selectDebugEnabled,
  selectIsDebugMenuVisible,
  selectPixelGrid,
} from "@/store/selectors";
import { useDispatch, useSelector } from "react-redux";

const useDebug = () => {
  const dispatch = useDispatch();
  const enabled = useSelector(selectDebugEnabled);
  const pixelGrid = useSelector(selectPixelGrid);
  const isDebugMenuVisible = useSelector(selectIsDebugMenuVisible);

  return {
    enabled,
    pixelGrid,
    isDebugMenuVisible,
    toggleDebug: () => dispatch(toggleDebug()),
    togglePixelGrid: () => dispatch(togglePixelGrid()),
    setPixelGridCellSize: (cellSize: number) =>
      dispatch(setPixelGridCellSize(cellSize)),
    toggleDebugMenu: () => dispatch(toggleDebugMenu()),
  };
};

export default useDebug;
