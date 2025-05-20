"use client"
import React, {useState} from "react"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {useRouter} from "next/navigation";
import ButtonCustom from "@/components/Button/ButtonCustom";

export function SigninForm({className, ...props}: React.ComponentProps<"form">) {
    const router = useRouter()
    const [error, setError] = useState('')

    const handleSubmit = (data: FormData) => {
        const username = data.get('username')?.toString();
        const email = data.get('email')?.toString();
        const password = data.get('password')?.toString();

        if (!username || !email || !password) {
            setError('All fields are required');
            return;
        }

        const users = JSON.parse(localStorage.getItem('users') || '[]');
        users.push({ username, email, password });

        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem('currentUser', username);
        console.log('User saved:', { username, email, password });

        // const screenWidth = window.innerWidth;
        // if (screenWidth < 1024) {
        //     router.push('/ScreenError')
        // } else {
        //     router.push('/Dashboard')
        // }

        router.push('/Dashboard')
    };

    return (
        <form action={handleSubmit} className={cn("flex flex-col gap-6 font-outFit", className)} {...props}>
            <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">SignIn to your account</h1>
                <p className="text-muted-foreground text-sm text-balance">
                    Enter your email below to SignIn to your account
                </p>
            </div>
            <div className="grid gap-6">
                <div className="grid gap-3">
                    <Label htmlFor="username">Username</Label>
                    <Input id="username" name="username" type="text" placeholder="n0te" required />
                </div>
                <div className="grid gap-3">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" name="email" placeholder="m@example.com" required />
                </div>
                <div className="grid gap-3">
                    <div className="flex items-center">
                        <Label htmlFor="password">Password</Label>
                    </div>
                    <Input id="password" name="password" type="password" required />
                </div>
                {error && <p className="text-red-500">{error}</p>}
                <ButtonCustom buttonText={"SignIn"} customClass={"w-full"} type="submit" textClass="w-full font-bold dark:bg-[#FE783E] text-blacknpm "/>
            </div>
        </form>
    )
}
