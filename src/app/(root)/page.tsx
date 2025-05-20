import React from 'react'
import Hero from "@/components/Hero/Hero";
import Header from "@/components/Header/Header";
import Features from "@/components/Features/Features";
import Uses from "@/components/UseCases/Uses";
import Tryme from "@/components/TryMe/Tryme";
import Work from "@/components/Work/Work";
import Test from "@/components/Testimonials/Test";
import FAQ from '@/components/FAQ/FAQ';
import Blog from '@/components/Blog/Blog';
import Endform from "@/components/Endform/Endform";
import Footer from "@/components/Footer/Footer";


const Page = () => {
    return (
        <div className="min-h-dvh w-full overflow-hidden relative">
            <Tryme/>
            <Header/>
            <Hero/>
            <Features/>
            <Uses/>
            <Work/>
            <Test/>
            <FAQ/>
            <Blog/>
            <Endform/>
            <Footer/>
        </div>
    )
}
export default Page
