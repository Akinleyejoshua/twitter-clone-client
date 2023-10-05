"use client";

import { AppLogo } from "./AppLogo";
import {
    AiOutlineKey,
    AiOutlineMail,
    AiOutlineUser,
    AiOutlineUserAdd,
} from "react-icons/ai";
import { useRouter } from "next/navigation";
import { Button } from "./Button";
import { Space } from "./Space";
import { Msg } from "./Msg";
import { Input } from "./Input";

export const SignupModal = () => {
    const router = useRouter();

    return (
        <section className="signin-modal">
            <div className="body">
                <div className="top">
                    <span className="close" onClick={() => router.push("/")}>
                        &times;
                    </span>
                    <AppLogo />
                </div>

                <form method="dialog">
                    <Input icon={<AiOutlineMail className="btn" />} type={"email"} placeholder={"Email"}/>
                    <Space p=".5rem"/>
                    <Input icon={<AiOutlineUser className="btn" />} type={"email"} placeholder={"Email"}/>
                    <Space p=".5rem"/>
                    <Input icon={<AiOutlineKey className="btn" />} type={"email"} placeholder={"Email"}/>
                    <Space p=".5rem"/>
                    <Msg text={"All fields are required!"} type={"danger"} size={"12px"}/>
                    <Msg text={"Account Created"} type={"success"} size={"12px"}/>
                    <Space p=".5rem"/>
                    <Button
                        loadColor={"white"}
                        className="button"
                        icon={<AiOutlineUserAdd className="btn" />}
                        text="Sign up"
                        loading={false}
                        space={true}
                        onClick={() => router.push("/home")}
                    />
                </form>
            </div>
        </section>
    );
};
