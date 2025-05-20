"use client"

import React, {useRef} from 'react'
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

interface FeatureWrapperProps {
    children: React.ReactNode;// Type for the ref
}

const FeatureWrapper = ({children}: FeatureWrapperProps) => {
    const featuresRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!featuresRef.current) return

        const ctx = gsap.context(() => {
            gsap.set("#feature-mini-title", { y: 10, opacity: 0 });
            gsap.set("#feature-title", { y: 10, opacity: 0 });
            gsap.set("#feature-tag", { y: 10, opacity: 0 });
            gsap.set(".feature-item", { x: 100, y: 100, opacity: 0 });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: featuresRef.current,
                    start: "top center",
                    end: "bottom bottom",

                }
            });

            tl.to("#feature-mini-title", {y: 0, opacity: 1, duration: 0.5, ease: "power1.out"})
                .to("#feature-title", {y: 0, opacity: 1, duration: 0.5, ease: "power1.out"})
                .to("#feature-tag", {y: 0, opacity:0.5, duration: 0.5, ease: "power1.out"})
                .to(".feature-item", {x:0, y: 0, opacity: 1, duration: 1, ease: "power1.out", stagger: 0.1})
        }, featuresRef.current);

        return () => ctx.revert()
    }, [featuresRef]);

    return (
        <div ref={featuresRef}>
            {children}
        </div>
    )
}
export default FeatureWrapper
