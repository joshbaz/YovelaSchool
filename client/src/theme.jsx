export const tokens = {
  teal: {
    50: "#CDEEE4",
    100: "#BBE8DD",
    200: "#A5E0D3",
    300: "#86D6C6",
    400: "#5DC8B5",
    500: "#38a48e",
    600: "#2F8B76",
    700: "#287662",
    800: "#226451",
    900: "#1D5544",
  },

  orange: {
    50: "#FEEACE",
    100: "#BBE8DD",
    200: "#FDE3BD",
    300: "#FCCE89",
    400: "#FBBE61",
    500: "#F9A72B",
    600: "#F19207",
    700: "#CD7B06",
    800: "#AE6705",
    900: "#935704",
  },

  black: {
    50: "#C3C3C3",
    100: "#AFAFAF",
    200: "#949494",
    300: "#717171",
    400: "#404040",
    500: "#231F20",
    600: "#000000",
    700: "#151313",
    800: "#0e0c0d",
    900: "#070606",
  },

  white: {
    100: "#fefdfd",
    200: "#fdfbfa",
    300: "#fcfaf8",
    400: "#fbf8f5",
    500: "#faf6f3",
    600: "#c8c5c2",
    700: "#969492",
    800: "#646261",
    900: "#323131",
  },
  background: {
    light: "#faf6f3",
    main: "#ffffff",
    dark: "#231f20",
  },
};

/**
 * primary - teal
 * secondary - orange
 * tertiary - black
 * white
 */
export const themeSettings = {
  palette: {
    primary: {
      ...tokens.teal,
      main: tokens.teal[500],
      light: tokens.teal[400],
    },
    secondary: {
      ...tokens.orange,
      main: tokens.orange[500],
    },
    tertiary: {
      ...tokens.black,
      main: tokens.black[500],
    },
    whites: {
      ...tokens.white,
      main: tokens.white[500],
    },
    background: {
      default: tokens.background.main,
      light: tokens.background.light,
      dark: tokens.background.dark,
    },
  },
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
    fontSize: 12,
    h1: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 32,
    },
    h2: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 24,
    },
    h3: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 20,
      fontWeight: 800,
      color: tokens.orange[700],
    },
    h4: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 14,
      fontWeight: 600,
      color: tokens.orange[300],
    },
    h5: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 15,
      fontWeight: 500,
      color: tokens.orange[500],
    },
    h6: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 10,
      color: tokens.orange[700],
    },
  },
};
