/**
 *
 */
import TestOne from '@/Components/TestOne';
import TestTwo from '@/Components/TestTwo';
import { ThemeProvider, css } from '@emotion/react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CssBaseline, createTheme } from '@mui/material';
import Container from '@mui/material/Container';

const style = {
    root: css`
        width: 100%;
        height: 100%;
        background-color: red;
    `,
};

const theme = createTheme({
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                '*': {
                    boxSizing: 'border-box',
                    margin: 0,
                    padding: 0,
                },
                'html, body, #root': {
                    height: '100%',
                    width: '100%',
                },
            },
        },
    },
});

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container css={style.root} maxWidth={false}>
                <TestOne />
                <TestTwo />
            </Container>
        </ThemeProvider>
    );
};

export default App;
