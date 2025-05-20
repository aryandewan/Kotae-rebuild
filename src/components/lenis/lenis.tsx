"use client"
import React, {useEffect} from 'react'
import Lenis from 'lenis'

interface ScrollProps {
    children: React.ReactNode;
}

const LenisScroll = ({children}: ScrollProps) => {
    useEffect(() => {
        const lenis = new Lenis();

        function raf(time:number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    }, []);
    return (
        <>
            {children}
        </>
    )
}
export default LenisScroll
