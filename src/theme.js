import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";
import { cyan, grey, orange } from "@material-ui/core/colors";

const defaultTheme = createMuiTheme();

export const theme = createMuiTheme({
    typography: {
        h3: {
            fontSize: '3rem',
            fontWeight: 'bold',
        },
        body1: {
            fontSize: '1.5rem',
            fontWeight: 'bold',
        },
        body2: {
            fontSize: '1.5rem',
            fontWeight: 400,
        },
    },

    palette: {
        primary: {
            main: cyan[200],
        },
        secondary: {
            main: orange[500],
        },
        containerPrimary: {
            main: cyan[200],
            light: '#b4fffff',
            dark: '#4bacb8',
        },
        containerSecondary: {
            main: grey[400],
            light: '#f5f5f5',
            dark: '#373737',
        },
    },
    container: {
        primary: {
            borderRadius: defaultTheme.spacing(1),
            padding: defaultTheme.spacing(2),
        },
        secondary: {
            borderRadius: defaultTheme.spacing(1),
            padding: defaultTheme.spacing(2),
        },
    },
});

export const responsiveFontTheme = responsiveFontSizes(theme);