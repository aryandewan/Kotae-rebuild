"use client"
import React from 'react'
import ButtonCustom from "@/components/Button/ButtonCustom";
import {useRouter} from "next/navigation";

const Page = () => {
    const router = useRouter()
    const handleCLick = () => {
        router.push("/login")
    }

    return (
        <section className="min-h-dvh w-full font-outFit text-4xl font-bold flex flex-col items-center justify-center text-center gap-10">
            This website is only built for desktops. Thank you for Understanding.
            <ButtonCustom buttonText="Go Back to Login" textClass="text-black text-lg font-bold" onClick={handleCLick}/>
        </section>
    )
}
export default Page
