import { Box } from "@chakra-ui/layout";
import React from "react";

interface adSingleProps {
    name: string;
    desc: string;
    date: string;
}

export const AdSingle: React.FC<adSingleProps> = (props: adSingleProps) => {
    const {name, desc, date} = props;
    console.log(name);
    console.log(desc);
    console.log(date);
    let body = (
        <>
        <Box>
        {name}
        <Box>
        </Box>
        {desc}
        </Box>
        <Box>
        {date}
        </Box>
        </>
        );
        return(
            <Box bg="grey" borderRadius="2" boxShadow='dark-lg'  p='2' rounded='md' maxW={300} >
            {body}
            </Box>
    );
};