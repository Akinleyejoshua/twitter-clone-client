"use client"


import { Sidebar } from "@/app/_components/SideBar";
import { useContext, useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { ListChat } from "@/app/_components/ListChat";
import { ChatBar } from "@/app/_components/ChatBar";
import { TopBar } from "../_components/TopBar";
import { SearchBar } from "../_components/SearchBar";
import { GlobalContext } from "../_context/GlobalContext";

export default function Messages() {
    const [nav, setNav] = useState(false);
    const {messages} = useContext(GlobalContext);
    const [chatMode, setChatMode] = useState({id: "", open: false});

    return <div className="home-user messages">
        <Sidebar nav={nav} toggleNav={(val) => setNav(val)} />
        <div className="feed">
            <div className="main">
                <TopBar text={"Messages"} textBtm={""}/>
                <SearchBar className={"search"}/>

                <button className="message-request">
                    <AiOutlineMail className="btn" />
                    <div className="space"></div>
                    <p>Message Request</p>
                </button>

                <ListChat data={messages} openChat={(id, val) => setChatMode({...chatMode,
                    id: id,
                    open: val
                })}/>
            </div>

        </div>
        <div className="others">
            <ChatBar data={messages} msgId={chatMode.id}/>
        </div>
    </div>
}