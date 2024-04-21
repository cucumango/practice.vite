/**
 *
 */

import { useCountStore } from '@/stores/useCounterStre';
import { Button, Stack } from '@mui/material';

const TestOne = () => {
    const { increment, decrement } = useCountStore((state) => state);
    return (
        <Stack spacing={2} direction="row">
            <Button variant="contained" onClick={increment}>
                increase
            </Button>
            <Button variant="contained" onClick={decrement}>
                decrease
            </Button>
        </Stack>
    );
};

export default TestOne;
