import React from "react";
import { NavBar } from "../components/NavBar";
import { useAdDisplayQuery } from "../generated/graphql";

export const List = () => {

    const ad = useAdDisplayQuery()[0].data?.adDisplay;
    console.log(ad);
    // console.log(ad[0].companyName);
    return(<>
        <NavBar />
        <ul>
        {ad?.forEach(element => {
            <li>{element.companyName}</li>            
        })};
        </ul>
    </>)
}

export default List;