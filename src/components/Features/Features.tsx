"use client"
import React, { useRef, useEffect } from 'react'
import Image from "next/image";
import { features } from "@/data/data";
import { motion, useAnimation, useInView } from "motion/react";

const Features = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-50% 0px -50% 0px" });

    const textControls = useAnimation()

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

    const itemVariants = {
        hidden: { x: 100, y: 100, opacity: 0 },
        visible: (i: number) => ({
            x: 0,
            y: 0,
            opacity: 1,
            transition: { duration: 1, ease: "easeOut", delay: i * 0.1 }
        })
    };

    return (
      <motion.section
        ref={sectionRef}
        id="features"
        className="min-h-screen w-full bg-black text-white flex flex-col justify-start items-center gap-5 p-3 lg:p-10 font-outFit"
      >
        <motion.div
          id="feature-mini-title"
          className="flex justify-center items-center rounded-full bg-[#111111] p-4 text-[#FE783E] font-medium"
          custom={0}
          initial={{ y: 20, opacity: 0 }}
          animate={textControls}
        >
          FEATURES
        </motion.div>
        <motion.h1
          id="feature-title"
          className="font-bold text-lg md:text-5xl lg:text-7xl p-2 text-center"
          custom={1}
          initial={{ y: 20, opacity: 0 }}
          animate={textControls}
        >
          Transform your inbound funnel
        </motion.h1>
        <motion.p
          id="feature-tag"
          className="text-sm text-center md:text-lg text-white opacity-50"
          custom={2}
          initial={{ y: 20, opacity: 0 }}
          animate={textControls}
        >
          Kotae: Instant, accurate, knowledge-based answers.
        </motion.p>
        <div
          id="feature-grid"
          className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-5 w-[85%] mt-10"
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              className={`${feature.className} feature-item`}
              custom={i}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={itemVariants}
            >
              <div className="flex-1 flex items-start justify-center bg-[#222222] rounded-2xl overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={500}
                  height={500}
                  className="object-cover object-top w-full h-full"
                />
              </div>
              <div className="flex flex-col items-start justify-center gap-3">
                <h1 className="text-2xl font-bold">{feature.title}</h1>
                <p className="text-base text-white opacity-50">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    );
};

export default Features;