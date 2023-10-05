"use client"

import { Sidebar } from "@/app/_components/SideBar";
import { useContext, useState } from "react";
import { useRouter } from "next/navigation"
import { TopBar } from "../_components/TopBar";
import { GlobalContext } from "../_context/GlobalContext";
import { formatNumber } from "../utils/helpers";
import { Space } from "../_components/Space";
import { FollowBar } from "../_components/FollowBar";
import { TrendBar } from "../_components/TrendBar";


export default function Explore() {
    const [nav, setNav] = useState(false);
    const router = useRouter();
    const { trends, follow } = useContext(GlobalContext);

    return <div className="home-user explore">
        <Sidebar nav={nav} toggleNav={(val) => setNav(val)} />
        <div className="feed">
            <TopBar text={""} search={true}/>
            <div className="main">
                <section className="trends t-1">
                    <p className="b-900 title">Trends for you</p>
                    {trends.map((item, i) => {
                        return <TrendBar title={item?.title} posts={item?.posts} where={item?.where} key={i}/>
                    })}

                </section>
            </div>
        </div>
        <div className="others">
            <div className="space"></div>
            <section className="ad">
                <h1 className="b-900">Subscribe to Premium</h1>
                <p>Subscribe to unlock new features and if eligible, receive a share of ads revenue.</p>
                <div className="space-1"></div>
                <button>Subscribe Today</button>
            </section>
            <div className="space"></div>
            <section className="trends follow">
                <p className="b-900 title">Who to follow</p>

                {follow?.map((item, i) => {
                    return <FollowBar key={i} img={item?.img} name={item?.name} _id={item._id} id={item.id} />
                })}

            </section>
        </div>
    </div>
}