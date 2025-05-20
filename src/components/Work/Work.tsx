"use client"
import React, {useRef, useEffect} from 'react'
import Image from "next/image";
import {working} from "@/data/data";
import {motion, useInView, useAnimation} from "motion/react";

type WorkCardProps = {
    id: string;
    title: string,
    tag: string,
    image: string
};

const WorkCard = ({id, title, tag, image}: WorkCardProps) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(cardRef, { once: true, margin: "-100px" });

    const textControls = useAnimation();
    const imageControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            const sequence = async () => {
                await textControls.start(i => ({
                    y: 0,
                    opacity: i === 2 ? 0.5 : 1,
                    transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" }
                }));

                await imageControls.start({
                    y: 0,
                    opacity: 1,
                    transition: { duration: 0.8, ease: "easeOut" }
                });

                await imageControls.start({
                    scale: 1,
                    transition: { duration: 0.6, ease: "easeOut" }
                });
            };

            sequence();
        }
    }, [isInView, textControls, imageControls]);

    return (
        <motion.div
            ref={cardRef}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="w-full h-full bg-[#121212] rounded-3xl flex flex-col md:flex-row p-5 xl:p-15 gap-5 overflow-hidden"
        >
            <div className="w-full flex flex-col justify-between">
                <motion.h1
                    custom={0}
                    initial={{y: 20, opacity: 0}}
                    animate={textControls}
                    className="rounded-2xl px-5 py-2 bg-black w-fit text-3xl text-[#FE783E] mb-5"
                >{id}
                </motion.h1>
                <div className="space-y-10">
                    <motion.h1
                        custom={1}
                        initial={{ y: 20, opacity: 0 }}
                        animate={textControls}
                        className="font-bold text-lg md:text-5xl lg:text-7xl"
                    >
                        {title}
                    </motion.h1>
                    <motion.p
                        custom={2}
                        initial={{ y: 20, opacity: 0 }}
                        animate={textControls}
                        className="text-sm md:text-lg text-white opacity-50 w-2/3"
                    >
                        {tag}
                    </motion.p>
                </div>
            </div>
            <div className="w-full h-full flex justify-center">
                <motion.div
                    initial={{ y: 50, opacity: 0, scale: 1.1 }}
                    animate={imageControls}
                    className="flex justify-center bg-[#FE783E] p-3 rounded-4xl drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                >
                    <Image
                        src={image}
                        alt="work-1"
                        width={400}
                        height={400}
                        className="rounded-3xl mix-blend-luminosity"
                    />
                </motion.div>
            </div>
        </motion.div>
    )
}

const Work = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-50% 0px -50% 0px" });

    const textControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            const timeline = async () => {
                await textControls.start(i => ({
                    y: 0,
                    opacity: i === 2 ? 0.5 : 1,
                    transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" }
                }));
            }
            timeline();
        };
    }, [isInView, textControls]);
    return (
        <section
            ref={sectionRef}
            className="relative min-h-dvh w-full bg-black text-white flex flex-col justify-start items-center gap-5 p-3 lg:p-10 font-outFit overflow-hidden"
        >
            <motion.div
                custom={0}
                initial={{y: 20, opacity: 0}}
                animate={textControls}
                className="flex justify-center items-center rounded-full bg-[#111111] p-4 text-[#FE783E] font-medium"
            >
                How it Works
            </motion.div>
            <motion.h1
                custom={1}
                initial={{y: 20, opacity: 0}}
                animate={textControls}
                className="font-bold text-lg md:text-5xl lg:text-7xl p-2 text-center"
            >
                Up and running in five minutes
            </motion.h1>
            <motion.p
                custom={2}
                initial={{y: 20, opacity: 0}}
                animate={textControls}
                className="text-sm md:text-lg text-white opacity-50"
            >
                Three easy steps—no code required.
            </motion.p>
            <div className="w-full space-y-20">
                {working.map((work, index) => (
                    <WorkCard
                    key={index}
                    id={work.id}
                    title={work.title}
                    tag={work.tag}
                    image={work.image}
                    />
                ))}
            </div>
        </section>
    )
}
export default Work
