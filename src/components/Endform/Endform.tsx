"use client"
import React, {useEffect, useRef} from 'react'
import ButtonCustom from "@/components/Button/ButtonCustom";
import {motion, useAnimation, useInView} from "motion/react";

const parentVariants = {
    hidden: { y: 50},
    show: {
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
            when: "beforeChildren",
            staggerChildren: 0.2,
        },
    },
};

const childVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.8, ease: "easeOut" },
    },
};

const Endform = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-50% 0px -50% 0px" });

    const formControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            formControls.start("show");
        }
    }, [isInView, formControls]);

    return (
        <section
            ref={sectionRef}
            className="min-h-dvh flex w-full items-center justify-center bg-gradient-to-b from-black via-[#FE783E] to-white p-4 font-outFit"
        >
            <motion.div
                variants={parentVariants}
                initial="hidden"
                animate={formControls}
                className="backdrop-blur-md bg-white/10 rounded-lg shadow-lg p-10 w-[95%] lg:w-[85%] text-center border border-white/20"
            >
                <motion.div
                    variants={childVariants}
                    className="space-y-10"
                >
                    <div className="text-xs lg:text-base font-semibold text-[#FE783E] bg-white px-3 py-1 rounded-full w-fit mx-auto mb-4">
                        GETTING STARTED
                    </div>
                    <h1 className="font-bold text-3xl md:text-5xl lg:text-7xl text-black">
                        Trusted by many for <br/> their business.
                    </h1>
                    <p className="text-sm md:text-lg text-white opacity-50">
                        Join the millions of users who rely on us for their AI ChatBot needs. <br/>Discover a trusted solution that delivers results.
                    </p>
                    <form
                        className="flex flex-col sm:flex-row items-center justify-between gap-2 w-full xl:w-1/2 mx-auto"
                    >
                        <input
                            type="email"
                            required
                            placeholder="Email address"
                            className="flex-1 px-6 py-4 rounded-md text-black focus:outline-none bg-white"
                        />
                        <ButtonCustom buttonText={`CONTACT`} type="submit" textClass="text-[#FE783E] bg-black font-bold px-6 py-4 text-sm" arrowClass="p-3 group-hover:translate-x-4 group-hover:-translate-y-4"/>
                    </form>
                </motion.div>
            </motion.div>
        </section>
    )
}
export default Endform
