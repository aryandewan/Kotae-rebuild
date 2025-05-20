"use client"
import React from 'react'
import Link from "next/link";
import Image from "next/image";
import ButtonCustom from "@/components/Button/ButtonCustom";
import { motion } from "motion/react";
import {useRouter} from "next/navigation";

const sections: string[] = ["Features", "Uses", "Pricing", "FAQ", "BLOG"]
const buttons: string[] = ["SignIn", "Try Kotae"]

const Header = () => {
    const navbarVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1, ease: "easeIn" } }
    };

    const router = useRouter()
    const handleClick = () => {
        router.push('/login')
    }

    return (
        <motion.header
            id="header"
            className="bg-white w-full relative border-b-2 border-gray-400 font-outFit"
        >
            <motion.nav
                id="navbar"
                className="flex items-center justify-center lg:justify-between text-black p-3 relative"
                variants={navbarVariants}
                initial="hidden"
                animate="visible"
            >
                <Link href="/">
                    <Image
                        src="/images/logo.svg"
                        alt="logo"
                        width="100"
                        height="100"
                        priority={true}
                    />
                </Link>
                <div className="hidden xl:absolute xl:left-1/2 transform xl:-translate-x-1/2 lg:flex items-center justify-center gap-10 font-semibold">
                    {sections.map((section: string, index: number) => (
                        <Link
                            key={index}
                            href={index === 2 ? "/Pricing" : `/#${section.toLowerCase()}`}
                            className="relative font-semibold text-lg after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-black after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100 dark:after:bg-black cursor-pointer"
                        >
                            {section}
                        </Link>
                    ))}
                </div>
                <div className="hidden xl:flex items-center justify-center gap-5 font-bold">
                    {buttons.map((button: string, index: number) => (
                        <ButtonCustom key={index} buttonText={button} onClick={handleClick}/>
                    ))}
                </div>
            </motion.nav>
        </motion.header>
    );
};

export default Header;