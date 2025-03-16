import FocusContext from "@/contexts/FocusContext";
import { useContext } from "react";

const useFocus = () => {
  const context = useContext(FocusContext);
  if (context === undefined) {
    throw new Error("useFocus must be used within a FocusProvider");
  }
  return context;
};

export default useFocus;
