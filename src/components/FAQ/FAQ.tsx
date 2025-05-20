import React from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { questions } from "@/data/data";
import Button from "@/components/Button/Button";

const FAQ = () => {
  return (
    <section id="faq" className="relative min-h-dvh w-full bg-black text-white flex flex-col justify-center items-start gap-10 p-3 lg:p-10 font-outFit overflow-hidden">
        <div className="flex justify-center items-center rounded-full bg-[#111111] p-4 text-[#FE783E] font-medium w-fit">
            FAQs
        </div>
        <div className="w-full flex justify-start items-start gap-5">
            <div className="w-2/5 space-y-10">
                <h1 className="font-bold text-lg md:text-5xl lg:text-7xl">Frequently Asked Questions</h1>
                <p className="text-sm md:text-lg text-white opacity-50">
                    Got questions for us? Find the answers here in our FAQ page or contact
                    our support team for further assistance. We’re here to help!
                </p>
                <Button buttonText="Ask our Team" customClass="text-black font-bold" textClass="bg-[#FE783E]"/>
            </div>
            <div className="w-3/5">
                <Accordion
                    type="multiple"
                    className="w-full"
                >
                    {questions.map((item, index) => (
                        <AccordionItem
                            key={`accordion-item-${index}`}
                            value={`parent${index}`}
                            className="space-y-5 border-none"
                        >
                            <AccordionTrigger
                                className={`p-3 text-4xl font-extrabold ${item.customClass}`}
                            >
                                {item.type}
                            </AccordionTrigger>
                            <AccordionContent className="text-2xl">
                                <Accordion type="single" collapsible className="w-full">
                                    {item.sub.map((q, i) => (
                                        <AccordionItem key={`item${i}`} value={`child${i}`}>
                                            <AccordionTrigger className="text-2xl font-bold">
                                                {q.question}
                                            </AccordionTrigger>
                                            <AccordionContent className="text-2xl font-extralight">
                                                {q.answer}
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    </section>
  );
}
export default FAQ