import { createTheme } from "@mui/material/styles";

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light" ? {} : {}),
  },
});

export const themeSettings = (mode) => createTheme(getDesignTokens(mode));
