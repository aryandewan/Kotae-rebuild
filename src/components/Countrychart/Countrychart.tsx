"use client"
import React from 'react'
import { TrendingUp } from "lucide-react"
import { Bar, BarChart, XAxis, YAxis } from "recharts"
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
const chartData = [
    { country: "US", users: 186 },
    { country: "Australia", users: 305 },
    { country: "Korea", users: 237 },
    { country: "Japan", users: 73 },
    { country: "Vietnam", users: 209 },
]
const chartConfig = {
    users: {
        label: "Users",
        color: "#653EFE",
    },
} satisfies ChartConfig


const Barchart = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Users by Country</CardTitle>
                <CardDescription>Total Visitors in the last month</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <BarChart
                        accessibilityLayer
                        data={chartData}
                        layout="vertical"
                        margin={{
                            left: -20,
                        }}
                    >
                        <XAxis type="number" dataKey="users" hide />
                        <YAxis
                            dataKey="country"
                            type="category"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Bar dataKey="users" fill="var(--color-users)" radius={5} />
                    </BarChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col items-start gap-2 text-sm">
                <div className="flex gap-2 font-medium leading-none">
                    Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                </div>
                <div className="leading-none text-muted-foreground">
                    Showing total visitors for the last week
                </div>
            </CardFooter>
        </Card>
    )
}
export default Barchart
