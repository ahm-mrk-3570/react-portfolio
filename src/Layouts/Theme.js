import { createTheme } from "@mui/material";

export const CustomTheme = createTheme({
  direction: "ltr",
  typography: {
    fontFamily: "Roboto",
    h1: {
      fontSize: "36px",
      lineHeight: "40px",
      letterSpacing: "-0.2%",
    },
    h2: {
      fontWeight: 600
    },
    h3: {
      fontWeight: 600
    },
    subtitle1: {
      fontWeight: 400
    },
    body1: {
      fontWeight: 400
    },
    body2: {
      fontSize: '16px',
      lineHeight: '24px',
      fontWeight: 400
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 1024,
      lg: 1280
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        h1: ({ theme }) => ({
          fontSize: '36px',
          lineHeight: '40px',
          fontWeight: '700',
          [theme.breakpoints.down('md')]: {
            fontWeight: '600'
          },
          [theme.breakpoints.up('sm')]: {
            fontSize: '48px',
            lineHeight: "48px"
          },
          [theme.breakpoints.up('md')]: {
            fontSize: '60px',
            lineHeight: "72px"
          }
        }),
        h2: ({ theme }) => ({
          fontSize: '28px',
          lineHeight: '35px',
          [theme.breakpoints.up('sm')]: {
            fontSize: '28px',
            lineHeight: '35px'
          },
          [theme.breakpoints.up('md')]: {
            fontSize: '45px',
            lineHeight: '40px'
          }
        }),
        h3: ({ theme }) => ({
          fontSize: '24px',
          lineHeight: "32px",
          [theme.breakpoints.up('sm')]: {
            fontSize: '24px',
            lineHeight: "32px"
          },
          [theme.breakpoints.up('md')]: {
            fontSize: '30px',
            lineHeight: "36px"
          }
        }),
        subtitle1: ({ theme }) => ({
          fontSize: '20px',
          lineHeight: '28px',
          [theme.breakpoints.up('sm')]: {
            fontSize: '18px'
          }
        }),
        body1: ({ theme }) => ({
          fontSize: '18px',
          lineHeight: '28px',
          [theme.breakpoints.up('sm')]: {
            fontSize: '16px',
            lineHeight: '24px'
          }
        })
      }
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true
      }
    },
    MuiButton: {
      styleOverrides : {
        contained: ({ theme }) => ({
          backgroundColor: theme.palette.primary[950],
          borderRadius: 50,
          color: theme.palette.primary.main
        })
      }
    }
  }
});

export const darkTheme = {
  mode: "dark",
  primary: {
    main: "#030712",
    dark: "#030712",
    50: "#111827",
    100: "#1f2937",
    200: "#374151",
    300: "#4b5563",
    400: "#6b7280",
    500: "#9ca3af",
    600: "#d1d5db",
    700: "#e5e7eb",
    800: "#f3f4f6",
    900: "#f9fafb",
    950: "#fff",
  },
  borderColor: {
    main: "#fff",
  },
  background: {
    default: "#030712",
    paper: "#030712"
  },
  secondary: {
    main: "#10b981",
  }
};

export const lightTheme = {
  mode: "light",
  primary: {
    main: "#fff",
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827",
    950: "#030712",
  },
  borderColor: {
    main: "#000"
  },
  background: {
    default: "#fff",
    paper: "#fff"
  },
  secondary: {
    main: "#10b981",
  }
};

export const getTheme = (mode) => {
  let selectedPallete;

  switch (mode) {
    case "dark":
      selectedPallete = darkTheme;
      break;
    case "light":
      selectedPallete = lightTheme;
      break;
    default:
      selectedPallete = darkTheme;
      break;
  }

  return createTheme({
    ...CustomTheme,
    palette: selectedPallete,
  });
};
