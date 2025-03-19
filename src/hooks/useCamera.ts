import { toggleFocus } from "@/store/cameraSlice";
import { selectIsFocused } from "@/store/selectors";
import { useDispatch, useSelector } from "react-redux";

const useCamera = () => {
  const dispatch = useDispatch();
  const isFocused = useSelector(selectIsFocused);

  return {
    isFocused,
    toggleFocus: () => dispatch(toggleFocus()),
  };
};

export default useCamera;
