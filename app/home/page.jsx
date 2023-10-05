"use client"

import { Draft } from "@/app/_components/Draft";
import { HomeHeader } from "@/app/_components/HomeHeader";
import { Sidebar } from "@/app/_components/SideBar";
import { Tweets } from "@/app/_components/Tweets";
import { useState } from "react";
import { FaSearchengin } from "react-icons/fa6";
import { useContext } from "react";
import { GlobalContext } from "@/app/_context/GlobalContext";

export default function Home() {
    const [nav, setNav] = useState(false);
    const { tweets } = useContext(GlobalContext);


    return <div className="home-user">
        <Sidebar nav={nav} toggleNav={(val) => setNav(val)} />
        <div className="feed">
            <HomeHeader toggleNav={(val) => setNav(val)} />
            <div className="main">
                <Draft />
                <button className="show-posts">Show 70 Posts</button>
                <section className="ad">
                    <h1 className="f-100">You may be missing out on ads revenue sharing!</h1>
                    <p>If eligible, you must be subscribed to X Premium to receive a share of ads revenue.</p>
                    <br />
                    <p>Sign up to X Premium to get access.</p>
                    <div className="space-1"></div>
                    <button>Subscribe Today</button>
                </section>
                <Tweets data={tweets} />
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
                <div className="trend col">
                    <div className="row">
                        <small>Trending in Nigeria</small>
                    </div>
                    <b className="b-900">DJ Chicken</b>
                    <small>3,167 posts</small>
                </div>
                <div className="trend col">
                    <p className="b-900">
                        #WinWithMoniepoint
                    </p>
                    <b className="">Play the Moniepoint Weekly Games for a chance to win N10 million!</b>
                    <small>Promoted by Moniepoint Nigeria</small>
                </div>
                <div className="trend col">
                    <div className="row">
                        <small>Music Trending</small>
                    </div>
                    <b className="b-900">Liberian</b>
                    <small>1,867 posts</small>
                </div>
            </section>
        </div>
    </div>
}