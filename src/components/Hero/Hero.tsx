"use client"
import React, { useRef } from 'react'
import ButtonCustom from "@/components/Button/ButtonCustom";
import Image from "next/image";
import { motion} from "motion/react";
import HeroWrapper from "@/components/Hero/HeroWrapper";
import {useRouter} from "next/navigation";

const Hero = () => {
    const section2Ref = useRef<HTMLDivElement>(null);

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.5
            }
        }
    };

    const itemVariants = {
        hidden: { y: 10, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
    };

    const tagVariants = {
        hidden: { y: 10, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
    };

    const imageVariants = {
        hidden: { scale: 1.5, opacity: 0 },
        visible: { scale: 0.95, opacity: 1, transition: { duration: 1, ease: "easeIn" } }
    };

    const router = useRouter()

    const handleClick = () => {
        router.push('/login')
    }

    return (
        <HeroWrapper>
            <motion.main
                id="hero-main"
                className="min-h-dvh w-full bg-white new-mask-image"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <section
                    id="hero-section-1"
                    className="h-[700px] w-full text-black flex flex-col items-center justify-center font-outFit p-4 gap-5 z-10 relative"
                >
                    <motion.div
                        id="hero-mini-title"
                        className="flex items-center justify-center border-2 border-gray-200 rounded-full px-4 py-2"
                        variants={itemVariants}
                    >
                        <h1 className="text-base md:text-xl text-[#653EFE] cursor-default">
                            New Generation AI ChatBot
                        </h1>
                    </motion.div>
                    <motion.h1
                        id="hero-title"
                        className="text-xl md:text-5xl lg:text-7xl xl:text-8xl font-bold cursor-default"
                        variants={itemVariants}
                    >
                        Real Answers. Real <i className="text-[#653EFE] relative cursor-pointer after:absolute after:-bottom-0.5 after:left-0 after:h-[4px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-[#653EFE] after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100 dark:after:bg-[#653EFE] cursor-pointer;">Insights.</i>
                    </motion.h1>
                    <motion.p
                        id="hero-tag"
                        className="text-base text-center md:text-lg text-gray-400"
                        variants={tagVariants}
                    >
                        Automate customer inquiries and discover what your visitors are looking for.
                    </motion.p>
                    <motion.div
                        id="hero-button"
                        className="mt-10 font-bold flex flex-col md:flex-row gap-5 items-center justify-center"
                        variants={itemVariants}
                    >
                        <ButtonCustom buttonText="SignIn" customClass="font-bold z-10" onClick={handleClick}/>
                        <ButtonCustom buttonText="Try Kotae" customClass="font-bold z-10" />
                    </motion.div>
                </section>
                <section
                    ref={section2Ref}
                    id="hero-section-2"
                    className="min-h-dvh w-full -mt-40 sticky z-0 top-0"
                >
                    <motion.div
                        variants={imageVariants}
                        initial="hidden"
                        animate="visible"
                        className="p-10"
                    >
                        <div
                            className="hero-image backdrop-blur-md bg-white/10 rounded-4xl p-3 lg:p-5 border border-white/20 shadow-xl"
                        >
                            <Image
                                src="/images/dash-4.png"
                                alt="dash"
                                width={2000}
                                height={2000}
                                quality={100}
                                priority={true}
                                className="w-full rounded-3xl hidden xl:block"
                            />
                            <Image
                                src="/images/kotae-phone.png"
                                alt="dash"
                                width={2000}
                                height={2000}
                                quality={100}
                                priority={true}
                                className="w-full rounded-3xl md:hidden"
                            />
                            <Image
                                src="/images/kotae-tab.png"
                                alt="dash"
                                width={2000}
                                height={2000}
                                quality={100}
                                priority={true}
                                className="w-full rounded-3xl hidden md:block xl:hidden"
                            />
                        </div>
                    </motion.div>
                </section>
            </motion.main>
        </HeroWrapper>
    );
};

export default Hero;