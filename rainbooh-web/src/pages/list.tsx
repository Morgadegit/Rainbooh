import React from "react";
import { NavBar } from "../components/NavBar";
import { useAdDisplayQuery } from "../generated/graphql";

export const List = () => {

    const ad = useAdDisplayQuery()[0].data?.adDisplay;
    console.log(ad)
    return(<>
    <NavBar />
    </>)
}

export default List;