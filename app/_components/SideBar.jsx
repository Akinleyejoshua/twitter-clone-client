"use client";
import { FaEllipsisVertical } from "react-icons/fa6";
import { AppLogo } from "./AppLogo";
import Img from "../_assets/img.jpg";
import Image from "next/image";
import {
    AiOutlineBell,
    AiOutlineHome,
    AiOutlineLogout,
    AiOutlineMail,
    AiOutlineSearch,
    AiOutlineUnorderedList,
    AiOutlineUser,
    AiOutlineUsergroupAdd,
} from "react-icons/ai";
import { useRouter } from "next/navigation";
import { Button } from "./Button";
import { Space } from "./Space";

export const Sidebar = ({ nav, toggleNav }) => {
    const router = useRouter();

    return (
        <div className={`${nav ? "sidebar toggle" : "sidebar row"}`}>
            <div className="bar">
                <div className="top">
                    <AppLogo />
                    <Space p={".25rem"} />

                    <div className="avater">
                        <Button
                            icon={<AiOutlineLogout />}
                            className={"logout"}
                            space={""}
                            onClick={() => router.push("/")}
                        />
                        <Image src={Img} alt="" className="img" />
                        <Space p={".5rem"} />
                        <p className="b-900">Joshua Akinleye</p>
                        <small className="black">@JoshuaAkinleye9</small>
                        <Space p={".5rem"} />
                        <div className="row">
                            <div className="row">
                                <p className="b-900">490</p>
                                <Space p={".25rem"} />
                                <p className="black">Following</p>
                            </div>
                            <Space p={".5rem"} />
                            <div className="row">
                                <p className="b-900">169</p>
                                <Space p={".25rem"} />
                                <p className="black">Followers</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="navlinks">
                    <Button
                        icon={<AiOutlineHome />}
                        onClick={() => router.push("/home")}
                        text={"Home"}
                    />
                    <Button
                        icon={<AiOutlineSearch />}
                        onClick={() => router.push("/explore")}
                        text={"Explore"}
                    />
                    <Button
                        icon={<AiOutlineBell />}
                        onClick={() => router.push("/notifications")}
                        text={"Notifications"}
                    />

                    <Button
                        icon={<AiOutlineMail />}
                        onClick={() => router.push("/messages")}
                        text={"Messages"}
                    />
                    <Button
                        icon={<AiOutlineUnorderedList />}
                        onClick={() => router.push("/home")}
                        text={"List"}
                    />
                    <Button
                        icon={<AiOutlineUsergroupAdd />}
                        onClick={() => router.push("/home")}
                        text={"Community"}
                    />
                    <Button
                        icon={<AiOutlineUser />}
                        onClick={() => router.push("/profile")}
                        text={"Profile"}
                    />
                </div>
                <Space p={"1rem"} />
                <Button
                    onClick={() => router.push("/home")}
                    text={"Post"}
                    className={"post"}
                    icon={""}
                />
                <Space p={"1rem"} />
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
    );
};
