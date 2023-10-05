"use client"

import { Sidebar } from "@/app/_components/SideBar";
import { useContext, useState } from "react";
import { FaArrowLeft, FaSearchengin } from "react-icons/fa6";
import { useRouter } from "next/navigation"
import { NotificationBar } from "@/app/_components/NotificationBar";
import { TopBar } from "../_components/TopBar";
import { GlobalContext } from "../_context/GlobalContext";
import { TrendBar } from "../_components/TrendBar";

export default function Profile() {
    const [nav, setNav] = useState(false);
    const router = useRouter();

    const { trends, notifications } = useContext(GlobalContext);

    return <div className="home-user notifications">
        <Sidebar nav={nav} toggleNav={(val) => setNav(val)} />
        <div className="feed">
            <div className="main">
                <TopBar text={"Notifications"} other={true} actions={
                    <div className="actions row">
                        <button className="active">All</button>
                        <button>Verified</button>
                        <button>Mentions</button>
                    </div>
                } />
                <div className="bar">
                <NotificationBar notifications={notifications}/>

                </div>
            </div>

        </div>
        <div className="others">
            <div className="search row">
                <FaSearchengin className="btn" />
                <div className="space"></div>
                <input type="text" placeholder="Search" />
            </div>
            <div className="space"></div>
            <section className="ad">
                <h1 className="b-900">Subscribe to Premium</h1>
                <p>Subscribe to unlock new features and if eligible, receive a share of ads revenue.</p>
                <div className="space-1"></div>
                <button>Subscribe Today</button>
            </section>
            <div className="space"></div>
            <section className="trends">
                <p className="b-900 title">Trends for you</p>
                {trends.map((item, i) => {
                    return <TrendBar title={item?.title} posts={item?.posts} where={item?.where} key={i} />
                })}

            </section>
        </div>
    </div>
}