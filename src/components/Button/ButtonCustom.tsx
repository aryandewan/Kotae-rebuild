"use client"
import { motion } from 'motion/react'
import { MdArrowOutward } from "react-icons/md"

interface ButtonProps {
    buttonText: string
    customClass?: string
    id?: string
    textClass?: string
    arrowClass?: string
    custom?: number
    animate?: any
    initial?: any
    type?: "button" | "submit" | "reset" | undefined
    onClick?: () => void
}

const ButtonCustom = ({ buttonText, type, customClass, id, textClass, arrowClass, custom, animate, initial ,onClick }: ButtonProps) => {
    return (
        <motion.button
            id={id}
            type={type}
            custom={custom}
            initial={initial}
            animate={animate}
            onClick={onClick}
            className={`group border-2 border-black flex items-center justify-center bg-black cursor-pointer hover: ${customClass} inline-flex w-fit font-outFit`}
        >
            <div className={`flex items-center justify-center bg-[#653EFE] px-4 py-2 ${textClass}`}>
                {buttonText}
            </div>
            <div className={`flex items-center justify-center p-2 text-white text-2xl group-hover:translate-x-3 group-hover:-translate-y-3 transition-all ease-in-out duration-200 ${arrowClass}`}>
                <MdArrowOutward />
            </div>
        </motion.button>
    )
}

export default ButtonCustom
