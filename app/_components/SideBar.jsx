"use client"
import { FaEllipsisVertical, FaList } from "react-icons/fa6"
import { AppLogo } from "./AppLogo";
import Img from "../_assets/img.jpg";
import Image from "next/image";
import { AiOutlineBell, AiOutlineHome, AiOutlineMail, AiOutlineSearch, AiOutlineUser, AiOutlineUsergroupAdd } from "react-icons/ai"
import {useRouter} from "next/navigation"

export const Sidebar = ({ nav, toggleNav }) => {
    const router = useRouter();

    return <div className={`${nav ? "sidebar toggle" : "sidebar row"}`}>
        <div className="bar">
            <AppLogo />
            <div className="space-1"></div>
            <div className="navlinks">
                <button className="btn" onClick={() => router.push("/home")}>
                    <AiOutlineHome />
                    <div className="space-1"></div>
                    <p>Home</p>
                </button>
                <button className="btn" onClick={() => router.push("/explore")}>
                    <AiOutlineSearch />
                    <div className="space-1"></div>
                    <p>Explore</p>
                </button>
                <button className="btn" onClick={() => router.push("/notifications")}>
                    <AiOutlineBell />
                    <div className="space-1"></div>
                    <p>Notification</p>
                </button>
                <button className="btn" onClick={() => router.push("/messages")}>
                    <AiOutlineMail />
                    <div className="space-1"></div>
                    <p>Messages</p>
                </button>
                <button className="btn">
                    <FaList />
                    <div className="space-1"></div>
                    <p>Lists</p>
                </button>
                <button className="btn">
                    <AiOutlineUsergroupAdd />
                    <div className="space-1"></div>
                    <p>Community</p>
                </button>
                <button className="btn" onClick={() => router.push("/profile")}>
                    <AiOutlineUser />
                    <div className="space-1"></div>
                    <p>Profile</p>
                </button>

            </div>
            <div className="space-2"></div>
            <button className="post">Post</button>
            <div className="space-1"></div>
            <div className="btn logout" onClick={() => router.push("/")}>
                <Image src={Img} alt="" className="img" />
                <div className="space-1"></div>
                <div className="col">
                    <b>Akinleye Joshua</b>
                    <p>@AkinleyeJoshua9</p>
                </div>
                <div className="space-1"></div>
                <div className="col">
                    <FaEllipsisVertical />
                </div>
            </div>
        </div>
        <div className="close" onClick={() => toggleNav(false)}></div>

    </div>
}