"use client"
import React from 'react'
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

const HeroWrapper = ({children}: Readonly<{ children: React.ReactNode}>) => {
    useGSAP(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline()

            tl
                .to("#hero-mini-title",{y: 0, opacity: 1, duration: 0.5, ease: "power1.out"})
                .to("#hero-title", {y: 0, opacity: 1, duration: 0.5, ease: "power1.out"})
                .to("#hero-tag", {y: 0, opacity: 1, duration: 0.5, ease: "power1.out"})
                .to("#hero-button", {y: 0, opacity: 1, duration: 0.5, ease: "power1.out"})
        },"#hero-main")

        return () => ctx.revert()
    }, [])

    useGSAP(() => {
        const ctx = gsap.context(() => {
            gsap.to(".hero-image", {
                scrollTrigger: {
                    trigger: "#hero-section-2",
                    start: "top top",
                    end: "bottom center",
                    scrub: true,
                    pin: true,
                },
                scale: 1.05,
                duration: 1,
                ease: "power1.out",
            })
        }, "#hero-main")

        return () => ctx.revert()
    }, [])
    return (
        <>
            {children}
        </>
    )
}
export default HeroWrapper
