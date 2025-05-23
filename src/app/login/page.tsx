import React from "react"
import { LoginForm } from "@/components/Loginform/login-form"
import Image from "next/image";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <Link href="/" className="flex items-center gap-2 font-medium text-3xl">
              <Image
                  src="/images/logo.svg"
                  alt="logo"
                  width="100"
                  height="100"
                  priority={true}
                  className="dark:invert"
              />
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <Image
          src="/images/bg.jpg"
          alt="Image"
          width="3000"
          height="3000"
          priority={true}
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  )
}

export default LoginPage
