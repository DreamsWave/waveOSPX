import { RootState } from "@/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { stopProcess } from "./processSlice";

const ProcessManager = () => {
  const dispatch = useDispatch();
  const processes = useSelector(
    (state: RootState) => state.processes.processes
  );

  useEffect(() => {
    // Cleanup stopped processes
    processes.forEach((process) => {
      if (process.state === "stopped") {
        dispatch(stopProcess(process.id));
      }
    });
  }, [processes, dispatch]);

  return null; // No UI needed
};

export default ProcessManager;
