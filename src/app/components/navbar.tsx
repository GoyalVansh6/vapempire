"use client"
import React from "react";
import { useRouter } from "next/navigation";
import {FaSearch, FaShoppingCart, FaUser} from "react-icons/fa"

const links = [
    {name: "Home"},
    {name: "Shop"},
    {name: "Blog"},
    {name: "About"},
    {name: "Contact"}
]

export default function Navbar(){
    return(
        <div className="flex items-center justify-between bg-gray-100 text-black h-[4rem] px-[2rem]">
            <div className="text-red-800 font-bold">
                VAP EMPIRE
            </div>
            <ul className="flex w-[40%] justify-around">
                {links.map((link) => 
                <li key={link.name} className="font-semibold hover:underline">{link.name}</li>
            )}
            </ul>
            <ul className="flex gap-[2rem]">
                <FaSearch/>
                <FaShoppingCart/>
                <FaUser/>
            </ul>
        </div>
    )
}