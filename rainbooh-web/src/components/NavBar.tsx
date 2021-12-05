import { Box, Link } from "@chakra-ui/layout";
import React from "react";
import NextLink from "next/link";
import { useMeQuery } from "../generated/graphql";

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
    const [{ data, fetching }] = useMeQuery();
    let body = null;

    if (fetching) {
    } else if (!data?.me) {
        body = (
            <>
        <NextLink href="/login">
            <Link mr={5}>login</Link>
        </NextLink>
        <NextLink href = "/register">
        <Link>Register</Link>
        </NextLink>
    </>);
    } else {
        body = (<Box>{data.me.username}</Box>);
    }
    return (
        
        <Box bg="tomato" p={4} ml={"auto"}>
        {body}
        </Box>
    );
};