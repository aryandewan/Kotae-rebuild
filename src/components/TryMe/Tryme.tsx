"use client"
import React, {useRef, useState} from 'react'
import { PiChatTeardropDotsFill } from "react-icons/pi";
import { FaRobot } from "react-icons/fa";
import ChatWindow from "@/components/Chatwindow/ChatWindow";
import {motion} from "motion/react";

const Tryme = () => {
    const [isOpen, setIsOpen] = useState(false)
    const bounceRef = useRef<HTMLDivElement>(null);

    const handleCLick = () => {
        setIsOpen(prev => !prev)
        if(!isOpen) {
            bounceRef.current?.classList.remove("animate-bounce")
        } else {
            bounceRef.current?.classList.add("animate-bounce")
        }
    }

    const chatVariants = {
        open: {
            opacity: 1,
            y: 0,
            pointerEvents: "auto" as const,
            transition: { duration: 0.3, ease: "easeOut" },
        },
        closed: {
            opacity: 0,
            y: 50,
            pointerEvents: "none" as const,
            transition: { duration: 0.3, ease: "easeIn" },
        }
    }

    return (
        <div className="fixed bottom-0 right-0 z-100 pointer-events-auto">
            <div ref={bounceRef} onClick={handleCLick} className="bottom-0 right-0 z-100 fixed bg-[#653EFE] border-2 border-[#FE783E] m-5 rounded-full p-3 animate-bounce cursor-pointer">
                { isOpen ? <FaRobot className="text-5xl text-white"/> : <PiChatTeardropDotsFill className="text-5xl text-white"/>}
            </div>
            <motion.div
                variants={chatVariants}
                animate={isOpen ? "open" : "closed"}
                initial={false}
                className="absolute bottom-32 right-6 z-100"
            >
                <ChatWindow />
            </motion.div>
        </div>
    )
}
export default Tryme
