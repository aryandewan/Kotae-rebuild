'use client';

import React, { useState, useEffect } from 'react';
import { FaRobot, FaHome, FaBook, FaChartBar, FaCog } from 'react-icons/fa';
import { PiChatTeardropDotsFill } from 'react-icons/pi';
import Link from 'next/link';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ChartConfig, ChartContainer } from "@/components/ui/chart"
import { FaMoon } from "react-icons/fa";
import AppSidebar from "@/components/App-Sidebar/AppSidebar";
import {SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar";

const mockBots = [
    { name: 'Support Bot', status: 'Trained', queries: 234 },
    { name: 'Docs Bot', status: 'Training...', queries: 98 },
    { name: 'Sales Assistant', status: 'Idle', queries: 13 },
];

const chartConfig = {
    queries: {
        label: "queries",
        color: "#2563eb",
    },
    responseTime: {
        label: "responseTime",
        color: "#60a5fa",
    },
    satifaction: {
        label: "satisfaction",
        color: "#3b82f6",
    }
} satisfies ChartConfig

const mockChartData = [
    { date: '05-10', queries: 120, responseTime: 1.2, satisfaction: 85 },
    { date: '05-11', queries: 150, responseTime: 1.0, satisfaction: 88 },
    { date: '05-12', queries: 100, responseTime: 1.5, satisfaction: 80 },
    { date: '05-13', queries: 180, responseTime: 0.9, satisfaction: 90 },
    { date: '05-14', queries: 200, responseTime: 1.1, satisfaction: 87 },
    { date: '05-15', queries: 170, responseTime: 1.3, satisfaction: 89 },
    { date: '05-16', queries: 190, responseTime: 1.0, satisfaction: 91 },
];

const Dashboard = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', isDarkMode);
    }, [isDarkMode]);

    return (
        <div className={`flex min-h-screen ${isDarkMode ? 'dark bg=[#121212] text-gray-100' : 'bg-white text-[#121212]'}`}>
                {/* Sidebar */}
                {/*<aside className="group w-64 bg-white dark:bg-[#18181B] border-r shadow-md flex flex-col transition-all duration-300 hover:w-64">*/}
                {/*    <div className="flex items-center gap-3 p-6 border-b dark:border-gray-700">*/}
                {/*        <FaRobot className="text-3xl text-purple-600 dark:text-purple-400" />*/}
                {/*        <h1 className="text-xl font-bold group-hover:opacity-100 transition-opacity">Kotae</h1>*/}
                {/*    </div>*/}
                {/*    <nav className="flex-1 p-4 space-y-3">*/}
                {/*        <Link href="/dashboard" className="flex items-center gap-3 p-2 rounded hover:bg-purple-100 dark:hover:bg-[#27272A]">*/}
                {/*            <FaHome className="text-lg" />*/}
                {/*            <span className="group-hover:opacity-100 transition-opacity">Dashboard</span>*/}
                {/*        </Link>*/}
                {/*        <Link href="/bots" className="flex items-center gap-3 p-2 rounded hover:bg-purple-100 dark:hover:bg-[#27272A]">*/}
                {/*            <PiChatTeardropDotsFill className="text-lg" />*/}
                {/*            <span className="group-hover:opacity-100 transition-opacity">My Bots</span>*/}
                {/*        </Link>*/}
                {/*        <Link href="/docs" className="flex items-center gap-3 p-2 rounded hover:bg-purple-100 dark:hover:bg-[#27272A]">*/}
                {/*            <FaBook className="text-lg" />*/}
                {/*            <span className="group-hover:opacity-100 transition-opacity">Documentation</span>*/}
                {/*        </Link>*/}
                {/*        <Link href="/analytics" className="flex items-center gap-3 p-2 rounded hover:bg-purple-100 dark:hover:bg-[#27272A]">*/}
                {/*            <FaChartBar className="text-lg" />*/}
                {/*            <span className="group-hover:opacity-100 transition-opacity">Analytics</span>*/}
                {/*        </Link>*/}
                {/*        <Link href="/settings" className="flex items-center gap-3 p-2 rounded hover:bg-purple-100 dark:hover:bg-[#27272A]">*/}
                {/*            <FaCog className="text-lg" />*/}
                {/*            <span className="group-hover:opacity-100 transition-opacity">Settings</span>*/}
                {/*        </Link>*/}
                {/*    </nav>*/}
                {/*</aside>*/}

            <SidebarProvider>
                <AppSidebar/>
                <main className="flex-1 p-8">
                    <SidebarTrigger />
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold">Welcome back 👋</h2>
                        <div className={`flex items-center gap-2 border-2 ${isDarkMode ? `border-white` : `border-black`} rounded-full p-1`}>
                            <FaMoon onClick={() => setIsDarkMode(!isDarkMode)} className="text-xl cursor-pointer" />
                        </div>
                    </div>

                    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {mockBots.map((bot, i) => (
                            <div
                                key={i}
                                className="bg-white dark:bg-[#18181B] border shadow-sm rounded-xl p-5 space-y-2 hover:shadow-md transition-all"
                            >
                                <h3 className="text-lg font-semibold flex items-center gap-2">
                                    <FaRobot className="text-purple-500 dark:text-purple-400" /> {bot.name}
                                </h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Status: {bot.status}</p>
                                <p className="text-sm">Queries this week: {bot.queries}</p>
                                <Link
                                    href={`/bots/${bot.name.toLowerCase().replace(/\s+/g, '-')}`}
                                    className="inline-block text-sm mt-2 text-purple-600 dark:text-purple-400 hover:underline"
                                >
                                    Manage Bot
                                </Link>
                            </div>
                        ))}
                    </section>

                    <section className="mt-10">
                        <h3 className="text-xl font-semibold mb-4">Overview</h3>
                        <div className="bg-white dark:bg-[#18181B] p-6 rounded-xl shadow-sm">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                {/* Line Chart: Query Volume */}
                                <div>
                                    <h4 className="text-lg font-medium mb-4">Query Volume (Last 7 Days)</h4>
                                    <ResponsiveContainer width="100%" height={300}>
                                        <LineChart data={mockChartData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                                            <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? '#4b5563' : '#e5e7eb'} />
                                            <XAxis dataKey="date" stroke={isDarkMode ? '#d1d5db' : '#374151'} />
                                            <YAxis stroke={isDarkMode ? '#d1d5db' : '#374151'} />
                                            <Tooltip
                                                contentStyle={{
                                                    backgroundColor: isDarkMode ? '#1f2937' : '#ffffff',
                                                    border: `1px solid ${isDarkMode ? '#4b5563' : '#e5e7eb'}`,
                                                    color: isDarkMode ? '#d1d5db' : '#374151',
                                                }}
                                            />
                                            <Legend />
                                            <Line type="monotone" dataKey="queries" stroke="#9333ea" name="Queries" />
                                        </LineChart>
                                    </ResponsiveContainer>
                                </div>

                                {/* Bar Chart: Bot Performance */}
                                <div>
                                    <h4 className="text-lg font-medium mb-4">Bot Performance</h4>
                                    <ChartContainer config={chartConfig}>
                                        <ResponsiveContainer width="100%" height={300}>
                                            <BarChart data={mockChartData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                                                <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? '#4b5563' : '#e5e7eb'} />
                                                <XAxis dataKey="date" stroke={isDarkMode ? '#d1d5db' : '#374151'} />
                                                <YAxis stroke={isDarkMode ? '#d1d5db' : '#374151'} />
                                                <Tooltip
                                                    contentStyle={{
                                                        backgroundColor: isDarkMode ? '#1f2937' : '#ffffff',
                                                        border: `1px solid ${isDarkMode ? '#4b5563' : '#e5e7eb'}`,
                                                        color: isDarkMode ? '#d1d5db' : '#374151',
                                                    }}
                                                />
                                                <Legend />
                                                <Bar dataKey="responseTime" fill="#9333ea" name="Avg Response Time (s)" radius={4}/>
                                                <Bar dataKey="satisfaction" fill="#3b82f6" name="Satisfaction (%)" radius={4}/>
                                            </BarChart>
                                        </ResponsiveContainer>
                                    </ChartContainer>

                                </div>
                            </div>
                        </div>
                    </section>
            </main>
            </SidebarProvider>
        </div>
    );
};

export default Dashboard;