"use client"
import React, {useState} from "react"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link";
import {useRouter} from "next/navigation";
import ButtonCustom from "@/components/Button/ButtonCustom";

export function LoginForm({className, ...props}: React.ComponentProps<"form">) {
  const router = useRouter()
  const [error, setError] = useState('')

  const handleSubmit = (data: FormData) => {
    const email = data.get('email')?.toString();
    const password = data.get('password')?.toString();

    if (!email || !password) {
      setError('All fields are required');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users') || '[]') as Array<{
      username: string;
      email: string;
      password: string;
    }>;

    const user = users.find(
        (u) => u.email === email && u.password === password
    );

    if (!user) {
      setError('Invalid username, email, or password');
      return;
    }

    localStorage.setItem('currentUser', user.username);

    // const screenWidth = window.innerWidth;
    // if (screenWidth < 1024) {
    //   router.push('/ScreenError')
    // } else {
    //   router.push('/Dashboard')
    // }

    router.push('/Dashboard')
  }

  return (
    <form action={handleSubmit} className={cn("flex flex-col gap-6 font-outFit", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Login to your account</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Enter your email below to login to your account
        </p>
      </div>
      <div className="grid gap-6">
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
        <ButtonCustom buttonText={"Login"} customClass={"w-full"} type="submit" textClass="w-full font-bold dark:bg-[#FE783E] text-black"/>
      </div>
      <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <Link href="/signin" className="underline underline-offset-4">
          Sign up
        </Link>
      </div>
    </form>
  )
}
