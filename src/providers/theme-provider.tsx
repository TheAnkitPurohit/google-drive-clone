import { ColorModeContext } from "@/context/ColorModeContext";
import { ThemeProvider, createTheme } from "@mui/material";
import { amber, deepOrange, grey } from "@mui/material/colors";
import React, { useMemo, useState } from "react";

interface ThemeProviderProps {
  children: React.ReactNode;
}

const CustomThemeProvider = ({ children }: ThemeProviderProps) => {
  // theme color mode
  const [mode, setMode] = useState<"light" | "dark">("light");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "light"
            ? {
                primary: amber,
                text: {
                  primary: grey[900],
                  secondary: grey[800],
                },
              }
            : {
                // palette values for dark mode
                primary: { main: "rgb(102, 157, 246)" },
                background: {
                  default: "rgb(5, 30, 52)",
                  paper: "rgb(5, 30, 52)",
                },
                text: {
                  primary: "#fff",
                  secondary: grey[500],
                },
              }),
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default CustomThemeProvider;
