import { Box } from '@chakra-ui/layout';
import React from 'react'

interface WrapperProps {
    variant?: 'small' | 'reg'
}

export const Wrapper: React.FC<WrapperProps> = ({children, variant='reg'}) => {
    return(
        <Box 
        maxW={variant === 'reg' ? "800px" : '400px'} 
        w="80%" mt={8} 
        mx='auto'
        >
{children}
        </Box>
    );
}