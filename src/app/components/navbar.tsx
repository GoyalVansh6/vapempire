"use client"
import React from "react";
import { useRouter } from "next/navigation";
import {FaSearch, FaShoppingCart, FaUser} from "react-icons/fa"

const links = [
    {name: "Home", path: "../"},
    {name: "Shop", path: "../pages/shop"},
    {name: "Blog", path: "../pages/blog"},
    {name: "About", path: "../pages/about"},
    {name: "Contact", path: "../pages/contact"}
]

export default function Navbar(){
    const router = useRouter();

    return(
        <div className="flex items-center justify-between bg-neutral-800 text-white h-[4rem] px-[2rem] sticky top-0 z-1000">
            <div className="text-red-800 font-bold">
                VAP EMPIRE
            </div>
            <ul className="flex w-[40%] justify-around">
                {links.map((link) => 
                <li key={link.name} className="font-semibold hover:underline active:text-red-500" onClick={() => {router.push(link.path ? link.path : "./")}}>{link.name}</li>
            )}
            </ul>
            <ul className="flex gap-[2rem]">
                <li><button><FaSearch/></button></li>
                <li><button><FaShoppingCart/></button></li>
                <li><button><FaUser/></button></li>
            </ul>
        </div>
    )
}