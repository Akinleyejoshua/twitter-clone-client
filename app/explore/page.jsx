"use client"

import { Sidebar } from "@/app/_components/SideBar";
import { useContext, useState } from "react";
import { FaSearchengin } from "react-icons/fa6";
import { useRouter } from "next/navigation"
import Image from "next/image";
import Img1 from "../_assets/img1.jpg";
import { TopBar } from "../_components/TopBar";
import { GlobalContext } from "../_context/GlobalContext";
import { formatNumber } from "../utils/helpers";


export default function Explore() {
    const [nav, setNav] = useState(false);
    const router = useRouter();
    const { trends } = useContext(GlobalContext);

    return <div className="home-user explore">
        <Sidebar nav={nav} toggleNav={(val) => setNav(val)} />
        <div className="feed">
            <TopBar text={"Explore"} />
            <div className="main">
                <section className="trends t-1">
                    <p className="b-900 title">Trends for you</p>
                    {trends.map((item, i) => {
                        return <div className="trend col" key={i}>
                            <div className="row">
                                <small className="black">Trending in {item?.where}</small>
                            </div>
                            <b className="b-900 blue">{item?.title}</b>
                            <small className="black">{formatNumber(item?.posts)} posts</small>
                        </div>
                    })}

                </section>
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
            <section className="trends follow">
                <p className="b-900 title">Who to follow</p>
                <div className="trend col">
                    <div className="row">
                        <Image src={Img1} alt="" className="img" />
                        <div className="space"></div>
                        <div className="col">
                            <p className="b-900">Mayank Mehra</p>
                            <small className="black">@_mmehraa</small>
                        </div>
                        <button className="m-left">Follow</button>

                    </div>
                </div>
                <div className="trend col">
                    <div className="row">
                        <Image src={Img1} alt="" className="img" />
                        <div className="space"></div>
                        <div className="col">
                            <p className="b-900">Ars Technica</p>
                            <small className="black">@arstechnica</small>
                        </div>
                        <button className="m-left">Follow</button>

                    </div>
                </div>
                <div className="trend col">
                    <div className="row">
                        <Image src={Img1} alt="" className="img" />
                        <div className="space"></div>
                        <div className="col">
                            <p className="b-900">John Danlami</p>
                            <small className="black">@Johnsdanlami</small>
                        </div>
                        <button className="m-left">Follow</button>

                    </div>
                </div>
            </section>
        </div>
    </div>
}