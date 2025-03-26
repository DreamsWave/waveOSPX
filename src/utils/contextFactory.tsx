import {
  type FC,
  type PropsWithChildren,
  createContext,
  memo,
  useContext,
} from "react";

const contextFactory = <T,>(
  useContextState: () => T,
  ContextComponent?: React.JSX.Element
): {
  Provider: FC<PropsWithChildren>;
  useContext: () => T;
} => {
  const Context = createContext(Object.create(null) as T);

  return {
    Provider: memo(({ children }) => (
      <Context value={useContextState()}>
        {children}
        {ContextComponent}
      </Context>
    )),
    useContext: () => useContext(Context),
  };
};

export default contextFactory;
