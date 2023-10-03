"use client"

import { Sidebar } from "@/app/_components/SideBar";
import { useState } from "react";

import { ChatBar } from "@/app/_components/ChatBar";

export default function Chat() {
    const [nav, setNav] = useState(false);

    return <div className="home-user messages">
        <Sidebar nav={nav} toggleNav={(val) => setNav(val)} />
        <div className="feed">
            <div className="main">
                <ChatBar />
            </div>

        </div>
    </div>
}