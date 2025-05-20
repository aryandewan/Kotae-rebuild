"use client"
import React, {useState} from 'react'
import {Card, CardContent, CardHeader} from "@/components/ui/card";
import {CustomizationData, InsData, IntData, kotaePlans, Price} from "@/data/data";
import ButtonCustom from "@/components/Button/ButtonCustom";
import { Button } from "@/components/ui/button";
import {Table, TableCell, TableHead, TableHeader, TableRow, TableBody} from "@/components/ui/table";
import {Check, X} from "lucide-react"

const Page = () => {
    const [billing, setBilling] = useState<'Monthly' | 'Anually'>('Monthly');

    return (
            <section className="min-h-dvh w-full bg-white text-black flex flex-col justify-start items-center gap-5 p-3 lg:p-10 font-outFit">
                <div className="flex justify-center items-center rounded-full bg-[#EEEEEE] p-4 text-[#FE783E] font-medium w-fit">Pricing</div>
                <h1 className="font-bold text-lg md:text-5xl lg:text-7xl p-2 text-center">Simple and affordable pricing plans</h1>
                <p className="text-sm text-center md:text-lg opacity-50">customizable to your needs, no credit card required.</p>
                <div className="flex gap-2 mb-10">
                    <Button
                        variant={billing === 'Monthly' ? 'default' : 'outline'}
                        onClick={() => setBilling('Monthly')}
                        className="rounded-full text-[#FE783E]"
                    >
                        Monthly pricing
                    </Button>
                    <Button
                        variant={billing === 'Anually' ? 'default' : 'outline'}
                        onClick={() => setBilling('Anually')}
                        className="rounded-full text-[#FE783E]"
                    >
                        Annual pricing
                    </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-12 w-full">
                    {Price[billing].map((plan, i:number) => (
                        <Card key={i} className="p-4 shadow-sm flex flex-col justify-between bg-white text-black rounded-none border-3 border-black">
                            <CardContent>
                                <h3 className="text-xl mb-1">{plan.name} plan</h3>
                                <p className="text-5xl font-bold mb-2">
                                    {plan.newamount ? plan.newamount : plan.amount} <span className="text-sm font-light">{plan.amount === "Custom Price" ? " " : "per month"}</span>
                                </p>
                                {plan.billed && (
                                    <p className="text-sm text-muted-foreground mb-4">{plan.billed}</p>
                                )}
                            </CardContent>
                            <ButtonCustom buttonText="Get Started" customClass="w-full mx-auto" textClass="w-full"/>
                        </Card>
                    ))}
                </div>
                <div className="w-full">
                    <Card className="w-full rounded-none border-3 border-black bg-white text-black">
                        <CardHeader>
                            <h3 className="text-3xl px-2 font-semibold">Features</h3>
                        </CardHeader>
                        <CardContent className="w-full">
                            <Table className="w-full">
                                <TableHeader>
                                    <TableRow className="py-4 hover:bg-white">
                                        <TableHead className="text-xl font-bold text-black">Feature</TableHead>
                                        <TableHead className="text-xl font-bold text-black w-[160px]">Starter</TableHead>
                                        <TableHead className="text-xl font-bold text-black w-[160px]">Pro</TableHead>
                                        <TableHead className="text-xl font-bold text-black w-[160px]">Pro + Voice</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {kotaePlans.map((item, index) => (
                                        <TableRow key={index} className="hover:bg-white">
                                            <TableCell className="font-light text-lg py-4 whitespace-nowrap w-1/3">{item.feature}</TableCell>
                                            <TableCell className="text-lg font-light py-4 whitespace-nowrap">{
                                                typeof item.starter === "boolean" ? (item.starter ? <Check/> : <X/>) : item.starter
                                            }</TableCell>
                                            <TableCell className="text-lg font-light py-4 whitespace-nowrap">{
                                                typeof item.pro === "boolean" ? (item.pro ? <Check/> : <X/>) : item.pro
                                            }</TableCell>
                                            <TableCell className="text-lg font-light py-4 whitespace-nowrap">{
                                                typeof item.proVoice === "boolean" ? (item.proVoice ? <Check/> : <X/>) : item.proVoice
                                            }</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </div>
                <div className="w-full">
                    <Card className="w-full rounded-none border-3 border-black bg-white text-black">
                        <CardHeader>
                            <h3 className="text-3xl px-2 font-semibold">Integrations</h3>
                        </CardHeader>
                        <CardContent className="w-full">
                            <Table className="w-full">
                                <TableHeader>
                                    <TableRow className="py-4 hover:bg-white">
                                        <TableHead className="text-xl font-bold text-black">Integrations</TableHead>
                                        <TableHead className="text-xl font-bold text-black w-[160px]">Starter</TableHead>
                                        <TableHead className="text-xl font-bold text-black w-[160px]">Pro</TableHead>
                                        <TableHead className="text-xl font-bold text-black w-[160px]">Pro + Voice</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {IntData.map((type, index) => (
                                        <TableRow key={index} className="hover:bg-white">
                                            <TableCell className="font-light text-lg py-4 whitespace-nowrap w-1/3">{type.int}</TableCell>
                                            <TableCell className="text-lg font-light py-4 whitespace-nowrap">{
                                                typeof type.starters === "boolean" ? (type.starters ? <Check/> : <X/>) : type.starters
                                            }</TableCell>
                                            <TableCell className="text-lg font-light py-4 whitespace-nowrap">{
                                                typeof type.pro === "boolean" ? (type.pro ? <Check/> : <X/>) : type.pro
                                            }</TableCell>
                                            <TableCell className="text-lg font-light py-4 whitespace-nowrap">{
                                                typeof type.proVoice === "boolean" ? (type.proVoice ? <Check/> : <X/>) : type.proVoice
                                            }</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </div>
                <div className="w-full">
                    <Card className="w-full rounded-none border-3 border-black bg-white text-black">
                        <CardHeader>
                            <h3 className="text-3xl px-2 font-semibold">Insights</h3>
                        </CardHeader>
                        <CardContent className="w-full">
                            <Table className="w-full">
                                <TableHeader>
                                    <TableRow className="py-4 hover:bg-white">
                                        <TableHead className="text-xl font-bold text-black">Integrations</TableHead>
                                        <TableHead className="text-xl font-bold text-black w-[160px]">Starter</TableHead>
                                        <TableHead className="text-xl font-bold text-black w-[160px]">Pro</TableHead>
                                        <TableHead className="text-xl font-bold text-black w-[160px]">Pro + Voice</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {InsData.map((type, index) => (
                                        <TableRow key={index} className="hover:bg-white">
                                            <TableCell className="font-light text-lg py-4 whitespace-nowrap w-1/3">{type.ins}</TableCell>
                                            <TableCell className="text-lg font-light py-4 whitespace-nowrap">{
                                                typeof type.starters === "boolean" ? (type.starters ? <Check/> : <X/>) : type.starters
                                            }</TableCell>
                                            <TableCell className="text-lg font-light py-4 whitespace-nowrap">{
                                                typeof type.pro === "boolean" ? (type.pro ? <Check/> : <X/>) : type.pro
                                            }</TableCell>
                                            <TableCell className="text-lg font-light py-4 whitespace-nowrap">{
                                                typeof type.proVoice === "boolean" ? (type.proVoice ? <Check/> : <X/>) : type.proVoice
                                            }</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </div>
                <div className="w-full">
                    <Card className="w-full rounded-none border-3 border-black bg-white text-black">
                        <CardHeader>
                            <h3 className="text-3xl px-2 font-semibold">Integrations</h3>
                        </CardHeader>
                        <CardContent className="w-full">
                            <Table className="w-full">
                                <TableHeader>
                                    <TableRow className="py-4 hover:bg-white">
                                        <TableHead className="text-xl font-bold text-black">Customization</TableHead>
                                        <TableHead className="text-xl font-bold text-black w-[160px]">Starter</TableHead>
                                        <TableHead className="text-xl font-bold text-black w-[160px]">Pro</TableHead>
                                        <TableHead className="text-xl font-bold text-black w-[160px]">Pro + Voice</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {CustomizationData.map((type, index) => (
                                        <TableRow key={index} className="hover:bg-white">
                                            <TableCell className="font-light text-lg py-4 whitespace-nowrap w-1/3">{type.name}</TableCell>
                                            <TableCell className="text-lg font-light py-4 whitespace-nowrap">{
                                                typeof type.starters === "boolean" ? (type.starters ? <Check/> : <X/>) : type.starters
                                            }</TableCell>
                                            <TableCell className="text-lg font-light py-4 whitespace-nowrap">{
                                                typeof type.pro === "boolean" ? (type.pro ? <Check/> : <X/>) : type.pro
                                            }</TableCell>
                                            <TableCell className="text-lg font-light py-4 whitespace-nowrap">{
                                                typeof type.proVoice === "boolean" ? (type.proVoice ? <Check/> : <X/>) : type.proVoice
                                            }</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </div>
            </section>
    )
}
export default Page
