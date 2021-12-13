import { Box, Link } from "@chakra-ui/layout";
import React from "react";
import NextLink from "next/link";

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
    let body = (
            <>
        <NextLink href="/login">
            <Link mr={5}>login</Link>
        </NextLink>
        <NextLink href = "/register">
        <Link mr={5}>Register</Link>
        </NextLink>
        <NextLink href= "/list">
        <Link>List</Link>
        </NextLink>
    </>);
    return (
        
        <Box bg="tomato" p={4} ml={"auto"}>
        {body}
        </Box>
    );
};