"use client"

import { FaApple, FaGoogle } from "react-icons/fa6"
import { AppLogo } from "./AppLogo"
import { AiOutlineKey, AiOutlineLogin, AiOutlineMail } from "react-icons/ai"
import { useRouter } from "next/navigation"


export const SigninModal = () => {
    const router = useRouter();

    return <section className="signin-modal">
        <div className="body">
            <div className="top">
            <span onClick={() => router.push("/")}>&times;</span>
                <AppLogo />
            </div>

            <form method="dialog">
                <div className="input">
                    <AiOutlineMail className="btn" />
                    <div className="space"></div>
                    <input type="email" placeholder="Email" />
                </div>
                <div className="space"></div>
                <div className="input">
                    <AiOutlineKey className="btn" />
                    <div className="space"></div>

                    <input type="text" placeholder="Password" />
                </div>
                <div className="space"></div>
                <button onClick={() => router.push("/home")}>
                    <AiOutlineLogin className="btn" />
                    <div className="space"></div>
                    <p>Sign in</p>
                </button>
            </form>
        </div>
    </section>
}