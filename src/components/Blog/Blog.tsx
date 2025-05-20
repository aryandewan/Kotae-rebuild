"use client"
import React, {useEffect, useRef} from "react"
import { blog } from "@/data/data";
import Image from "next/image";
import {motion, useAnimation, useInView} from "motion/react";

const Blog = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50% 0px -50% 0px" });

  const textControls = useAnimation()
  const blogControls = useAnimation()

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
  }

  useEffect(() => {
    if (isInView) {
      const timeline = async () => {
        await textControls.start(i => ({
          x: 0,
          y: 0,
          opacity: i === 2 ? 0.5 : 1,
          transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" }
        }));

        await blogControls.start("show")
      }
      timeline();
    }
  }, [isInView, textControls, blogControls]);

  return (
    <section
        ref={sectionRef}
        id="blog"
        className="relative w-full bg-black text-white flex flex-col justify-start items-center gap-5 p-3 lg:p-10 font-outFit overflow-hidden max-xl:pt-20 max-xl:pb-20"
    >
      <div className="flex justify-center lg:justify-start w-[90%]">
        <motion.div
            custom={0}
            initial={{x: 20, y: 20, opacity: 0}}
            animate={textControls}
            className="flex justify-center items-center rounded-full bg-[#111111] p-4 text-[#FE783E] font-medium"
        >
          Blog
        </motion.div>
      </div>
      <div className="flex flex-col lg:flex-row justify-start items-start w-[90%] lg:space-x-10 max-lg:text-center">
        <motion.h1
            custom={1}
            initial={{x: 20, y: 20, opacity: 0}}
            animate={textControls}
            className="font-bold text-2xl md:text-5xl lg:text-7xl p-2"
        >
          Delve Deeper Into Our Written Collection
        </motion.h1>
        <motion.p
            custom={2}
            initial={{x: 20, y: 20, opacity: 0}}
            animate={textControls}
            className="text-sm md:text-xl text-white opacity-50 self-end"
        >
          Uncover a wealth of engaging knowledge, topics, inspirations, and
          insights within our thought provoking written collection
        </motion.p>
      </div>
      <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={blogControls}
          className="w-[90%] flex flex-col lg:flex-row space-y-10 justify-between items-center lg:items-start mt-5 flex-wrap"
      >
        {blog.map((post, index) => (
          <motion.div key={index} className="max-w-[400px] xl:max-w-[500px] flex flex-col items-start justify-center gap-10 cursor-pointer" variants={itemVariants}>
            <Image src={post.image} alt={post.title} width={500} height={500} className="rounded-3xl object-cover"/>
            <h1 className="text-3xl max-lg:text-center">{post.title}</h1>
            <p className="text-sm md:text-lg text-white opacity-50 max-lg:text-center">
              {post.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
export default Blog