"use client"
import React, { useEffect, useRef } from 'react'
import { FaCheck } from "react-icons/fa";
import { usecases } from "@/data/data";
import Image from "next/image";
import { motion, useAnimation, useInView, useScroll, useTransform } from "motion/react";

type UseCardsProps = {
    title: string;
    description: string;
    points: string[];
    image: string;
    customClass?: string;
    icon?: React.ElementType;
};

const UseCards = ({ title, description, points, image, customClass, icon }: UseCardsProps) => {
    const Icon = icon;
    const cardRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(cardRef, { once: true, margin: "-100px" });


    const cardVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 1, ease: "easeOut" } }
    };

    const subpointsVariants = {
        hidden: { x: 50, opacity: 0 },
        visible: (i: number) => ({
            x: 0,
            opacity: 1,
            transition: { duration: 1, ease: "easeOut", delay: i * 0.25 }
        })
    };

    return (
        <motion.div
            ref={cardRef}
            className={customClass}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={cardVariants}
        >
            <div className="w-full lg:w-1/2 flex flex-col gap-10 p-3">
                {Icon && (
                    <motion.div variants={cardVariants}>
                        <Icon id="uses-icon" className="text-5xl p-3 bg-[#121212] rounded-xl text-[#FE783E] uses-icon" />
                    </motion.div>
                )}
                <motion.h1
                    id="item-title"
                    className="font-bold text-lg md:text-5xl item-title"
                    variants={cardVariants}
                >
                    {title}
                </motion.h1>
                <motion.p
                    id="item-tag"
                    className="text-sm md:text-lg text-white opacity-50 item-tag"
                    variants={cardVariants}
                >
                    {description}
                </motion.p>
                <div id="item-points" className="flex flex-wrap max-md:flex-col gap-5 item-points">
                    {points.map((point, idx) => (
                        <motion.div
                            key={idx}
                            className="p-3 bg-[#121212] flex justify-start items-center gap-3 rounded-xl whitespace-nowrap text-wrap drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] item-subpoints"
                            custom={idx}
                            variants={subpointsVariants}
                        >
                            <FaCheck className="text-green-500" />
                            {point}
                        </motion.div>
                    ))}
                </div>
            </div>
            <motion.div
                id="item-chart"
                className="w-full lg:w-1/2 flex items-center justify-center item-chart"
                variants={cardVariants}
            >
                <div className="w-full h-full flex items-center justify-center rounded-xl bg-[#121212] p-5 md:p-10 lg:p-15 xl:p-30">
                    <Image
                        src={image}
                        alt={`chart-${title}`}
                        width={2000}
                        height={2000}
                        quality={100}
                        priority={true}
                        className="w-full rounded-xl drop-shadow-[0_0_15px_rgba(255,255,255,0.15)]"
                    />
                </div>
            </motion.div>
        </motion.div>
    );
};

const Uses = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, {
      once: true,
      margin: "-50% 0px -50% 0px",
    });

    const textControls = useAnimation();

    useEffect(() => {
      if (isInView) {
        const timeline = async () => {
          await textControls.start((i) => ({
            y: 0,
            opacity: i === 2 ? 0.5 : 1,
            transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
          }));
        };
        timeline();
      }
    }, [isInView, textControls]);

    return (
      <motion.section
        ref={sectionRef}
        id="uses"
        className="relative min-h-dvh w-full bg-black text-white flex flex-col justify-start items-center gap-5 p-3 lg:p-10 font-outFit overflow-hidden"
      >
        <motion.div
          id="uses-mini-title"
          className="flex justify-center items-center rounded-full bg-[#111111] p-4 text-[#FE783E] font-medium"
          custom={0}
          initial={{ y: 20, opacity: 0 }}
          animate={textControls}
        >
          USES
        </motion.div>
        <motion.h1
          id="uses-title"
          className="font-bold text-lg md:text-5xl lg:text-7xl p-2"
          custom={1}
          initial={{ y: 20, opacity: 0 }}
          animate={textControls}
        >
          Kotae is Perfect for
        </motion.h1>
        <div
          id="uses-grid"
          className="w-[90%] xl:w-[80%] h-full flex flex-col items-center justify-center space-y-20"
        >
          {usecases.map((usecase, i) => (
            <UseCards
              key={i}
              title={usecase.title}
              description={usecase.description}
              points={usecase.points}
              image={usecase.image}
              customClass={usecase.customClass}
              icon={usecase.icon}
            />
          ))}
        </div>
      </motion.section>
    );
};

export default Uses;