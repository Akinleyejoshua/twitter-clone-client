"use client"
import Image from "next/image";
import Img from "../_assets/img.jpg";
import { AppLogo } from "./AppLogo";


export const HomeHeader = ({ toggleNav }) => {
    return <div className="home-header">
        <div className="row">
            <div className="menu-btn">
                <Image src={Img} alt="" className="img" onClick={() => toggleNav(true)} />
            </div>
            <h1>Home</h1>
            <AppLogo />
            <div></div>
        </div>

        <div className="path">
            <button className="active">For you</button>
            <button>Following</button>
        </div>
    </div>
}