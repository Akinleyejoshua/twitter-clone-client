"use client"

import { HomeHeader } from "@/app/_components/HomeHeader";
import { ProfileBar } from "@/app/_components/ProfileBar";
import { Sidebar } from "@/app/_components/SideBar";
import { Tweets } from "@/app/_components/Tweets";
import { useState } from "react";
import { FaArrowLeft, FaSearchengin } from "react-icons/fa6";
import { useRouter } from "next/navigation"

export default function Profile() {
    const [nav, setNav] = useState(false);
    const router = useRouter();
    // const {id} = router.query;
    


    return <div className="home-user profile">
        <Sidebar nav={nav} toggleNav={(val) => setNav(val)} />
        <div className="feed">
            <HomeHeader toggleNav={(val) => setNav(val)} />
            <div className="main">
                <div className="header row">
                    <FaArrowLeft className="btn" onClick={() => router.push("/home")} />
                    <div className="col">
                        <h1 className="b-900">Josh</h1>
                        <small className="black">172 posts</small>
                    </div>
                    
                </div>
                <ProfileBar />
                <Tweets />
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