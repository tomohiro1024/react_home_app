import { createTheme, PaletteColor, PaletteColorOptions } from "@mui/material";
import { blue, green, red } from "@mui/material/colors";

declare module "@mui/material/styles" {
  interface Palette {
    incomeColor: PaletteColor;
    expenseColor: PaletteColor;
    balanceColor: PaletteColor;
  }

  interface PaletteOptions {
    incomeColor?: PaletteColorOptions;
    expenseColor?: PaletteColorOptions;
    balanceColor?: PaletteColorOptions;
  }
}

export const theme = createTheme({
  typography: {
    fontFamily: 'Noto Sans JP, Roboto, "Helvetica Neue", Arial, sans-serif',
    fontWeightRegular: 400, // フォントウェイト400
    fontWeightMedium: 500, // フォントウェイト500
    fontWeightBold: 700, // フォントウェイト700
  },

  palette: {
    //収入用
    incomeColor: {
      main: blue[500],
      light: blue[100],
      dark: blue[700],
    },

    //支出用
    expenseColor: {
      main: red[500],
      light: red[100],
      dark: red[700],
    },

    //残高用
    balanceColor: {
      main: green[500],
      light: green[300],
      dark: green[700],
    },
  }
})