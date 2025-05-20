'use client';

import React, { useState, useEffect } from 'react';
import { FaMoon } from "react-icons/fa";
import AppSidebar from "@/components/App-Sidebar/AppSidebar";
import {SidebarTrigger, SidebarProvider} from "@/components/ui/sidebar";
import Userschart from "@/components/Userschart/UsersChart";
import Countrychart from "@/components/Countrychart/Countrychart";
import EscChart from "@/components/Escchart/EscChart";
import Key from "@/components/TopKeywords/Key";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";

const Page = () => {
    const [timeframe, setTimeframe] = useState<"7d" | "1m" | "6m" | "1y">("6m")
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', isDarkMode);
    }, [isDarkMode]);

    return (
        <div className={`flex w-full min-h-dvh ${isDarkMode ? 'dark bg=[#121212] text-gray-100' : 'bg-white text-[#121212]'} font-outFit`}>
            <SidebarProvider>
                <AppSidebar/>
                <main className="flex-1 p-8">
                    <div className="flex justify-between items-center mb-6">
                        <div className="flex items-center gap-2 self-start">
                            <SidebarTrigger/>
                            <h2 className="text-2xl font-bold">Dashboard</h2>
                        </div>
                        <div className="flex flex-col-reverse lg:flex-row items-end lg:items-center gap-4">
                            <Select
                                value={timeframe}
                                onValueChange={(value) => setTimeframe(value as typeof timeframe)}
                            >
                                <SelectTrigger className="w-[160px] mt-4 md:mt-0">
                                    <SelectValue placeholder="Timeframe" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="7d">Last 7 days</SelectItem>
                                    <SelectItem value="1m">Last 1 month</SelectItem>
                                    <SelectItem value="6m">Last 6 months</SelectItem>
                                    <SelectItem value="1y">Last 1 year</SelectItem>
                                </SelectContent>
                            </Select>
                            <div onClick={() => setIsDarkMode(!isDarkMode)} className={`flex items-center gap-2 border-2 ${isDarkMode ? `border-white` : `border-black`} rounded-full p-1 justify-self-end`}>
                                <FaMoon className="text-xl cursor-pointer" />
                            </div>
                        </div>

                    </div>

                    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <Userschart timeframe={timeframe}/>
                        <Countrychart timeframe={timeframe}/>
                        <EscChart timeframe={timeframe}/>
                    </section>

                    <section className="mt-10">
                        <Key/>
                    </section>
            </main>
            </SidebarProvider>
        </div>
    );
};

export default Page;