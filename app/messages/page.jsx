"use client"


import { Sidebar } from "@/app/_components/SideBar";
import { useState } from "react";
import { FaArrowLeft, FaEnvelopeCircleCheck, FaSearchengin } from "react-icons/fa6";
import { useRouter } from "next/navigation"
import { AiOutlineMail, AiOutlineSetting } from "react-icons/ai";
import { ListChat } from "@/app/_components/ListChat";
import { ChatBar } from "@/app/_components/ChatBar";

export default function Messages() {
    const [nav, setNav] = useState(false);
    const router = useRouter();


    return <div className="home-user messages">
        <Sidebar nav={nav} toggleNav={(val) => setNav(val)} />
        <div className="feed">
            <div className="main">
                <div className="header row">
                    <FaArrowLeft className="btn" onClick={() => router.push("/home")} />

                    <div className="row w-100">
                        <h1 className="b-900 p-1">Messages</h1>
                        <div className="actions row m-left">
                            <AiOutlineSetting className="btn" />
                            <FaEnvelopeCircleCheck className="btn" />
                        </div>
                    </div>

                </div>
                <div className="search row">
                    <FaSearchengin className="btn" />
                    <div className="space"></div>
                    <input type="text" placeholder="Search Direct Message" />
                </div>

                <button className="message-request">
                    <AiOutlineMail className="btn" />
                    <div className="space"></div>
                    <p>Message Request</p>
                </button>

                <ListChat />
            </div>

        </div>
        <div className="others">
            <ChatBar />
        </div>
    </div>
}