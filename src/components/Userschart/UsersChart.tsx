"use client"
import React from 'react'
import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import { dashboardData } from "@/data/data"

const chartConfig = {
    exchange: {
        label: "Exchange",
        color: "#653EFE",
    },
    user: {
        label: "User",
        color: "#FE783E",
    },
} satisfies ChartConfig

type Props = {
    timeframe: "7d" | "1m" | "6m" | "1y"
}

const Userschart = ({timeframe}: Props) => {
    const chartData = dashboardData[timeframe]
    const totalUsers = chartData.reduce((acc, d) => acc + d.users, 0)

    return (
        <Card className="max-w-lg rounded-none border-2 border-black dark:border-white">
            <CardHeader>
                <CardTitle><span className="text-3xl">{totalUsers}</span> Total Users</CardTitle>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <AreaChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            left: 12,
                            right: 12,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="name"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                        <defs>
                            <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                                <stop
                                    offset="5%"
                                    stopColor="var(--color-exchange)"
                                    stopOpacity={0.8}
                                />
                                <stop
                                    offset="95%"
                                    stopColor="var(--color-exchange)"
                                    stopOpacity={0.1}
                                />
                            </linearGradient>
                            <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                                <stop
                                    offset="5%"
                                    stopColor="var(--color-user)"
                                    stopOpacity={0.8}
                                />
                                <stop
                                    offset="95%"
                                    stopColor="var(--color-user)"
                                    stopOpacity={0.1}
                                />
                            </linearGradient>
                        </defs>
                        <Area
                            dataKey="users"
                            type="natural"
                            fill="url(#fillMobile)"
                            fillOpacity={0.4}
                            stroke="var(--color-user)"
                            stackId="a"
                        />
                        <Area
                            dataKey="queries"
                            type="natural"
                            fill="url(#fillDesktop)"
                            fillOpacity={0.4}
                            stroke="var(--color-exchange)"
                            stackId="a"
                        />
                    </AreaChart>
                </ChartContainer>
            </CardContent>
            <CardFooter>
                <div className="flex w-full items-start gap-2 text-sm">
                    <div className="grid gap-2">
                        <div className="flex items-end gap-2 font-medium">
                            <span className="text-3xl">5.2%</span><TrendingUp className="h-5 w-5" />
                        </div>
                        <div className="flex items-center gap-2 leading-none text-muted-foreground">
                            January - June 2025
                        </div>
                    </div>
                </div>
            </CardFooter>
        </Card>
    )
}
export default Userschart
