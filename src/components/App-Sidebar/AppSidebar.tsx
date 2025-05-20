import { History, Sparkles, Paintbrush, MonitorCheck, LayoutDashboard, ChevronUp, User2} from "lucide-react"
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarFooter,
} from "@/components/ui/sidebar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link";
import {usePathname} from "next/navigation";
import React, {useEffect, useState} from "react";
import Image from "next/image";

const chats = [
    {
        title: "History",
        url: "#",
        icon: History,
    }
]

const custom = [
    {
        title: "Training",
        url: "#",
        icon: Sparkles,
    },
    {
        title: "Appearence",
        url: "#",
        icon: Paintbrush,
    },
    {
        title: "Publish",
        url: "#",
        icon: MonitorCheck,
    },

]

const AppSidebar = () => {
    const pathname = usePathname()
    const isActive = (path: string) => pathname === path
    const [username, setUsername] = useState("Username")

    useEffect(() => {
        const currentUser = localStorage.getItem('currentUser');
        if (currentUser) {
            setUsername(currentUser);
        }
    }, []);

    return (
        <Sidebar>
            <SidebarContent>
                <Link href="/" className="text-2xl p-4">
                    <Image
                        src="/images/logo.svg"
                        alt="logo"
                        width="70"
                        height="70"
                        quality={100}
                        priority={true}
                        className="dark:invert"
                    />
                </Link>
                <SidebarGroup>
                    <SidebarContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <Link href="/Dashboard" className={isActive("/Dashboard") ? "bg-[#F5F5F5] dark:bg-[#262626]" : ""}>
                                        <LayoutDashboard />
                                        <span>Dashboard</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarContent>
                </SidebarGroup>
                <SidebarGroup>
                    <SidebarGroupLabel>Chats</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {chats.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                <SidebarGroup>
                    <SidebarGroupLabel>Customization</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {custom.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild className="w-full">
                                <SidebarMenuButton className="w-full">
                                    <User2 /> {username.toUpperCase()}
                                    <ChevronUp className="ml-auto" />
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                side="top"
                                className="w-[var(--radix-popper-anchor-width)]"
                            >
                                <DropdownMenuItem>
                                    <span>Account</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <span>Billing</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Link
                                        href="/login"
                                        onClick={() => {
                                            localStorage.removeItem('currentUser');
                                            setUsername("Username");
                                        }}
                                    >
                                        Sign Out
                                    </Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    )
}

export default AppSidebar