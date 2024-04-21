/**
 *
 */
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import TestOne from '@/Components/TestOne';
import TestTwo from '@/Components/TestTwo';

const App = () => {
    return (
        <>
            <CssBaseline />
            <Container maxWidth="xl" sx={{ height: '100%' }}>
                <TestOne />
                <TestTwo />
            </Container>
        </>
    );
};

export default App;
