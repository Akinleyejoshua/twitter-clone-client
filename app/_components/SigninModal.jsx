"use client"

import { AppLogo } from "./AppLogo"
import { AiOutlineKey, AiOutlineLogin, AiOutlineMail } from "react-icons/ai"
import { useRouter } from "next/navigation"
import { Input } from "./Input"
import { Space } from "./Space"
import { Msg } from "./Msg"
import { Button } from "./Button"


export const SigninModal = () => {
    const router = useRouter();

    return <section className="signin-modal">
        <div className="body">
            <div className="top">
                <span onClick={() => router.push("/")}>&times;</span>
                <AppLogo />
            </div>

            <form method="dialog">
                <Input icon={<AiOutlineMail className="btn" />} type={"email"} placeholder={"Email"} />
                <Space p=".5rem" />
                <Input icon={<AiOutlineKey className="btn" />} type={"text"} placeholder={"Password"} />
                <Space p=".5rem" />
                <Msg text={"Wrong email or password"} type={"danger"} size={"12px"} />
                <Msg text={"Access granted"} type={"success"} size={"12px"} />
                <Space p=".5rem" />
                <Button
                    loadColor={"white"}
                    className="button"
                    icon={<AiOutlineLogin className="btn" />}
                    text="Sign in"
                    loading={false}
                    space={true}
                    onClick={() => router.push("/home")}
                />
            </form>
        </div>
    </section>
}