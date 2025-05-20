"use client"
import React, {useEffect, useRef} from 'react'
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

interface UsesWrapperProps {
    children: React.ReactNode;
}

const UsesWrapper = ({children}: UsesWrapperProps) => {
    const usesRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (!usesRef.current) return

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: usesRef.current,
                start: 'top top',
                scrub: true, // Optional: Adds scroll-driven animation
            }
        })

        tl.to("#uses-mini-title", { y: 10, opacity: 1, duration: 0.5, ease: "power1.out" })
            .to("#uses-title", { y: 10, opacity: 1, duration: 0.5, ease: "power1.out" })
            .to(".uses-icon", { y: 10, opacity: 1, duration: 0.5, ease: "power1.out" })
            .to(".item-title", { y: 10, opacity: 1, duration: 0.5, ease: "power1.out" })
            .to(".item-tag", { y: 10, opacity: 1, duration: 0.5, ease: "power1.out" })
            .to(".item-chart", { x: 10, y: 10, opacity: 1, duration: 0.5, ease: "power1.out" })
            .to(".item-subpoints", { x: 10, opacity: 1, duration: 0.5, ease: "power1.out", stagger: 0.1 })

        // Cleanup
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill()) // Ensure ScrollTriggers are cleared when the component unmounts
        }
    }, [])

    return (
        <div ref={usesRef}>
            {children}
        </div>
    )
}
export default UsesWrapper
