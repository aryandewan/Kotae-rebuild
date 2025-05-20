"use client"
import React, {useEffect} from 'react'
import gsap from "gsap"

const HeaderWrapper = ({children}: Readonly<{ children: React.ReactNode}>) => {
    useEffect(() => {
        gsap.to("#navbar", {
            duration: 1,
            opacity: 1,
            ease: "power1.in",
        })
    }, []);

    return (
        <>
            {children}
        </>
    )
}
export default HeaderWrapper
