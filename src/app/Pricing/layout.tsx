import React from 'react'
import Header from "@/components/Header/Header";

const Layout = ({children} :Readonly<{ children: React.ReactNode }>) => {
    return (
        <>
            <Header/>
            {children}
        </>
    )
}
export default Layout
