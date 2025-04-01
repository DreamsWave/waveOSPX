import type { RootState } from "@/store";
import GlobalStyle from "@/styles/globalStyle";
import themes from "@/styles/themes";
import { useSelector } from "react-redux";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

type Props = {
  children: React.ReactNode;
};

const ThemeProvider = ({ children }: Props) => {
  const { currentTheme } = useSelector((state: RootState) => state.theme);
  return (
    <StyledThemeProvider theme={themes[currentTheme]}>
      <GlobalStyle />
      {children}
    </StyledThemeProvider>
  );
};

export default ThemeProvider;
