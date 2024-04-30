/**
 *
 */
import { Box } from '@mui/material';
import { useCountStore } from '../stores/useCounterStre';
import { useShallow } from 'zustand/react/shallow';

const LOG_TAG = 'TestTwo'; // eslint-disable-line

const TestTwo = () => {
    const [now] = useCountStore(useShallow((state) => [state.now]));
    console.log(LOG_TAG, 'render');

    return (
        <Box width={200} my={4} display="flex" alignItems="center" gap={4} p={2}>
            now: {now}
        </Box>
    );
};

export default TestTwo;
