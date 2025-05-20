"use client"
import React from "react"
import { ThemeProvider as NextThemeProvider } from "next-themes"

interface StaticThemeProviderProps {
    children: React.ReactNode;
    defaultTheme?: string;
    enableSystem?: boolean;
}

export function StaticThemeProvider({ children, ...props }: StaticThemeProviderProps) {
    return (
        <NextThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            {...props}
        >
            {children}
        </NextThemeProvider>
    )
}
