"use client"
import React from 'react'
import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"
import {
    Card,
    CardContent,
    CardDescription,
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
import {escalationChartData} from "@/data/data";
const chartConfig = {
    escalations: {
        label: "escalations",
        color: "#653EFE",
    },
    totalChats: {
        label: "totalChats",
        color: "#FE783E",
    },
} satisfies ChartConfig

type Props = {
    timeframe: "7d" | "1m" | "6m" | "1y"
}

const EscChart = ({timeframe}: Props) => {
    const chartData = escalationChartData[timeframe]
    const totalEscs = chartData.reduce((acc, d) => acc + d.escalations, 0)

    return (
        <Card className="max-w-lg rounded-none border-2 border-black dark:border-white">
            <CardHeader>
                <CardTitle><span className="text-3xl">{totalEscs}</span> Total Escalations</CardTitle>
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
                            dataKey="month"
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
                                    stopColor="var(--color-escalations)"
                                    stopOpacity={0.8}
                                />
                                <stop
                                    offset="95%"
                                    stopColor="var(--color-escalations)"
                                    stopOpacity={0.1}
                                />
                            </linearGradient>
                            <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                                <stop
                                    offset="5%"
                                    stopColor="var(--color-totalChats)"
                                    stopOpacity={0.8}
                                />
                                <stop
                                    offset="95%"
                                    stopColor="var(--color-totalChats)"
                                    stopOpacity={0.1}
                                />
                            </linearGradient>
                        </defs>
                        <Area
                            dataKey="escalations"
                            type="natural"
                            fill="url(#fillMobile)"
                            fillOpacity={0.4}
                            stroke="var(--color-totalChats)"
                            stackId="a"
                        />
                        <Area
                            dataKey="totalChats"
                            type="natural"
                            fill="url(#fillDesktop)"
                            fillOpacity={0.4}
                            stroke="var(--color-escalations)"
                            stackId="a"
                        />
                    </AreaChart>
                </ChartContainer>
            </CardContent>
            <CardFooter>
                <div className="flex w-full items-start gap-2 text-sm">
                    <div className="grid gap-2">
                        <div className="flex items-end gap-2 font-medium leading-none">
                            <span className="text-3xl">10.45%</span><TrendingUp className="h-5 w-5" />
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
export default EscChart
