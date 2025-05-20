"use client"
import React, {useEffect, useRef} from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { reviews } from "@/data/data";
import {motion, useInView, useAnimation} from "motion/react"
import Autoplay from "embla-carousel-autoplay"


const Test = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-50% 0px -50% 0px" });

  const headerControls = useAnimation();
  const carouselControls = useAnimation();

  useEffect(() => {
      const animate = async () => {
        if (isInView) {
          await headerControls.start({
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut" },
          });

          await carouselControls.start({
            y: 0,
            scale: 1,
            opacity: 1,
            transition: { duration: 0.8, ease: "easeOut" },
          });
        }
      };

      animate();
    }, [isInView, headerControls, carouselControls]);

    return (
      <section
        ref={sectionRef}
        className="relative xl:min-h-dvh w-full bg-black text-white flex flex-col justify-center items-center gap-5 p-3 lg:p-10 font-outFit overflow-hidden max-xl:pt-20 max-xl:pb-20"
      >
        <motion.div
          custom={0}
          initial={{ y: 20, opacity: 0 }}
          animate={headerControls}
          className="flex justify-center items-center rounded-full bg-[#121212] p-4 text-[#FE783E] font-medium"
        >
          Customer Voices
        </motion.div>

        <motion.div
          initial={{ y: 100, scale: 0.8, opacity: 0 }}
          animate={carouselControls}
          className="w-[90%] h-full bg-[#121212] rounded-2xl"
        >
          <Carousel className="h-full" plugins={[Autoplay({ delay: 5000, stopOnInteraction: false })]}>
            <CarouselContent className="flex items-center h-full">
              {reviews.map((review, index) => (
                <CarouselItem key={index} className="h-full">
                  <div className="lg:p-1 flex h-full">
                    <Card className="bg-black flex flex-col h-[500px] w-full m-5">
                      <CardContent className="flex flex-col justify-center items-center flex-1 gap-10">
                        <CardDescription className="text-base md:text-3xl">{review.review}</CardDescription>
                        <CardTitle className="text-[#FE783E] bg-[#121212] rounded-4xl p-3">
                          {review.author}
                        </CardTitle>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </motion.div>
      </section>
    );
};
export default Test;
