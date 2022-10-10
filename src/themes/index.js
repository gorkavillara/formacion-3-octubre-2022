import { createTheme, colors } from "@mui/material";

export const nuestroTema = createTheme({
  palette: {
    primary: {
      main: "#182747",
      light: "#667eb0",
      dark: "#151e30",
    },
    secondary: {
      main: "#562B08",
      light: "#a86631",
      dark: "#422813",
    },
    warning: {
      main: colors.lime[400],
      light: colors.lime[300],
      dark: colors.lime[600],
    },
  },
});

export const segundoTema = createTheme({
  palette: {
    primary: {
      main: colors.red[400],
      light: colors.red[300],
      dark: colors.red[600],
    },
    secondary: {
      main: colors.lime[400],
      light: colors.lime[300],
      dark: colors.lime[600],
    },
  },
});
