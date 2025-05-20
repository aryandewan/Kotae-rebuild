"use client"
import React from 'react'
import { TrendingUp } from "lucide-react"
import {Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis} from "recharts"
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
import {countryData} from "@/data/data";

const chartConfig = {
    users: {
        label: "Users",
        color: "#653EFE",
    },
} satisfies ChartConfig

type Props = {
    timeframe: "7d" | "1m" | "6m" | "1y"
}


const Countrychart = ({timeframe}: Props) => {
    const chartData = countryData[timeframe]

    return (
        <Card className="max-w-lg rounded-none border-2 border-black dark:border-white">
            <CardHeader>
                <CardTitle>Users by Country</CardTitle>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <BarChart
                        accessibilityLayer
                        data={chartData}
                        layout="vertical"
                        margin={{
                            right: 16,
                        }}
                    >
                        <CartesianGrid horizontal={false} />
                        <YAxis
                            dataKey="country"
                            type="category"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => value.slice(0, 3)}
                            hide
                        />
                        <XAxis dataKey="users" type="number" hide />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent indicator="line" />}
                        />
                        <Bar
                            dataKey="users"
                            layout="vertical"
                            fill="var(--color-users)"
                            radius={4}
                        >
                            <LabelList
                                dataKey="country"
                                position="insideLeft"
                                offset={8}
                                className="fill-foreground"
                                fontSize={12}
                            />
                            <LabelList
                                dataKey="users"
                                position="right"
                                offset={8}
                                className="fill-foreground"
                                fontSize={12}
                            />
                        </Bar>
                    </BarChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col items-start gap-2 text-sm">
                <div className="flex w-full items-start gap-2 text-sm">
                    <div className="grid gap-2">
                        <div className="flex items-end gap-2 font-medium leading-none">
                            <span className="text-3xl">4.8%</span><TrendingUp className="h-5 w-5" />
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
export default Countrychart
