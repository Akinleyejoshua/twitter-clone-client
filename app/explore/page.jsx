"use client"


import { Sidebar } from "@/app/_components/SideBar";
import { useState } from "react";
import { FaArrowLeft, FaSearchengin } from "react-icons/fa6";
import { useRouter } from "next/navigation"
import Image from "next/image";
import Img1 from "../../app/img1.jpg";


export default function Explore() {
    const [nav, setNav] = useState(false);
    const router = useRouter();

    return <div className="home-user explore">
        <Sidebar nav={nav} toggleNav={(val) => setNav(val)} />
        <div className="feed">
            <div className="main">
                <div className="header row">
                    <FaArrowLeft className="btn" onClick={() => router.push("/home")} />
                    {/* <div className="col">
                        <h1>Josh</h1>
                        <small>172 posts</small>
                    </div> */}
                </div>
                <section className="trends t-1">
                    <p className="b-900 title">Trends for you</p>
                    <div className="trend col">
                        <div className="row">
                            <small className="black">Trending in Nigeria</small>
                        </div>
                        <b className="b-900">DJ Chicken</b>
                        <small>3,167 posts</small>
                    </div>
                    <div className="trend col">
                        <div className="row">
                            <small className="black">Trending in Rock</small>
                        </div>
                        <b className="b-900">#twentyonepilots</b>
                        <small className="black">3,167 posts</small>
                    </div>
                    <div className="trend col">
                        <div className="row">
                            <small className="black">Trending in Nigeria</small>
                        </div>
                        <b className="b-900">3rd of October</b>
                        <small className="black">3,167 posts</small>
                    </div>
                    <div className="trend col">
                        <div className="row">
                            <small className="black">Trending in Nigeria</small>
                        </div>
                        <b className="b-900">DJ Chicken</b>
                        <small>3,167 posts</small>
                    </div>
                    <div className="trend col">
                        <div className="row">
                            <small className="black">Trending in Rock</small>
                        </div>
                        <b className="b-900">#twentyonepilots</b>
                        <small className="black">3,167 posts</small>
                    </div>
                    <div className="trend col">
                        <div className="row">
                            <small className="black">Trending in Nigeria</small>
                        </div>
                        <b className="b-900">3rd of October</b>
                        <small className="black">3,167 posts</small>
                    </div>
                    <div className="trend col">
                        <div className="row">
                            <small className="black">Trending in Nigeria</small>
                        </div>
                        <b className="b-900">DJ Chicken</b>
                        <small>3,167 posts</small>
                    </div>
                    <div className="trend col">
                        <div className="row">
                            <small className="black">Trending in Rock</small>
                        </div>
                        <b className="b-900">#twentyonepilots</b>
                        <small className="black">3,167 posts</small>
                    </div>
                    <div className="trend col">
                        <div className="row">
                            <small className="black">Trending in Nigeria</small>
                        </div>
                        <b className="b-900">3rd of October</b>
                        <small className="black">3,167 posts</small>
                    </div>
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