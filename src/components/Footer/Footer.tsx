import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import {foots} from "@/data/data";

const Footer = () => {
    return (
        <footer className="flex flex-col w-full items-center justify-center bg-white p-5 font-outFit space-y-5">
            <div className="w-[95%] mx-auto">
                <Link href="/">
                    <Image
                        src="/images/logo.svg"
                        alt="logo"
                        width="150"
                        height="150"
                        priority={true}
                    />
                </Link>
            </div>
            <div className="w-[95%] flex flex-col lg:flex-row justify-between max-lg:gap-10">
                <div className="w-full space-y-5">
                    <h1 className="text-base md:text-xl text-black">Smart Chatbot for Small Businesses</h1>
                    <div className="flex justify-between items-center gap-5 text-3xl text-black w-fit">
                        <FaInstagram  className="cursor-pointer"/>
                        <FaLinkedin className="cursor-pointer"/>
                        <FaFacebook className="cursor-pointer"/>
                    </div>
                </div>
                <div className="w-full flex flex-col md:flex-row max-md:space-y-10 md:space-x-10">
                    {foots.map((foot, index: number) => (
                        <div key={index} className="space-y-5">
                            <h1 className="text-3xl font-bold text-[#FE783E] cursor-pointer">{foot.title}</h1>
                            {foot.sub.map((sub, index: number) => (
                                <div key={index} className="cursor-pointer text-lg text-black">
                                    <Link href={sub === "Pricing" ? "/Pricing" : "#"}>{sub}</Link>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    )
}
export default Footer
