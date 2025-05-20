"use client"
import React, {useEffect, useRef} from "react"
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger,} from "@/components/ui/accordion";
import { questions } from "@/data/data";
import ButtonCustom from "@/components/Button/ButtonCustom";
import {motion, useAnimation, useInView} from "motion/react"

const FAQ = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-50% 0px -50% 0px" });

    const headerControls = useAnimation();
    const accordionControls = useAnimation();

    const containerVariants = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.2,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
    }


    useEffect(() => {
        if (isInView) {
            const timeline = async () => {
                await headerControls.start(i => ({
                    y: 0,
                    opacity: i === 2 ? 0.5 : 1,
                    transition: { delay: i * 0.2, duration: 1, ease: "easeOut" }
                }));

                await accordionControls.start("show");
            }
            timeline();
        };
    }, [isInView, headerControls, accordionControls]);


    return (
    <section ref={sectionRef} id="faq" className="relative xl:min-h-dvh w-full bg-black text-white flex flex-col justify-center items-center lg:items-start gap-10 p-3 lg:p-10 font-outFit overflow-hidden">
        <motion.div
            custom={0}
            initial={{y: 20, opacity: 0}}
            animate={headerControls}
            className="flex justify-center items-center rounded-full bg-[#111111] p-4 text-[#FE783E] font-medium w-fit"
        >
            FAQs
        </motion.div>
        <div className="w-full flex flex-col lg:flex-row justify-start items-start gap-5">
            <div className="w-full xl:w-2/5 space-y-5 xl:space-y-10 max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:items-center">
                <motion.h1
                    custom={1}
                    initial={{ y: 20, opacity: 0 }}
                    animate={headerControls}
                    className="font-bold text-3xl md:text-5xl lg:text-7xl max-md:text-center"
                >Frequently Asked Questions</motion.h1>
                <motion.p
                    custom={2}
                    initial={{ y: 20, opacity: 0 }}
                    animate={headerControls}
                    className="text-sm md:text-lg text-white opacity-50 max-lg:text-center"
                >
                    Got questions for us? Find the answers here in our FAQ page or contact
                    our support team for further assistance. We’re here to help!
                </motion.p>
                <ButtonCustom
                    buttonText="Ask our Team"
                    custom={3}
                    initial={{ y: 20, opacity: 0 }}
                    animate={headerControls}
                    customClass="text-black font-bold"
                    textClass="bg-[#FE783E]"
                />

            </div>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={accordionControls}
                className="w-full xl:w-3/5"
            >
                <Accordion
                    type="multiple"
                    defaultValue={questions.map((_, index) => `parent${index}`)}
                    className="w-full"
                >
                    {questions.map((item, index) => (
                        <motion.div key={`motion-item-${index}`} variants={itemVariants}>
                            <AccordionItem
                                value={`parent${index}`}
                                className="space-y-5 border-none"
                            >
                                <AccordionTrigger
                                    className={`p-3 text-xl lg:text-4xl font-extrabold ${item.customClass}`}
                                >
                                    {item.type}
                                </AccordionTrigger>
                                <AccordionContent className="text-lg lg:text-2xl">
                                    <Accordion type="single" collapsible className="w-full">
                                        {item.sub.map((q, i) => (

                                                <AccordionItem key={`item${i}`} value={`child${i}`}>
                                                    <AccordionTrigger className="text-lg lg:text-2xl font-bold">
                                                        {q.question}
                                                    </AccordionTrigger>
                                                    <AccordionContent className="text-lg lg:text-2xl font-extralight">
                                                        {q.answer}
                                                    </AccordionContent>
                                                </AccordionItem>

                                        ))}
                                    </Accordion>
                                </AccordionContent>
                            </AccordionItem>
                        </motion.div>
                    ))}
                </Accordion>
            </motion.div>
        </div>
    </section>
  );
}
export default FAQ