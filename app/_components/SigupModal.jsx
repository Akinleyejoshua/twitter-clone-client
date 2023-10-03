"use client"

import { AppLogo } from "./AppLogo"
import { AiOutlineKey, AiOutlineLogin, AiOutlineMail, AiOutlineUser } from "react-icons/ai"
import { useRouter } from "next/navigation"

export const SignupModal = () => {
    const router = useRouter();

    return <section className="signin-modal">
        <div className="body">
            <div className="top">
                <span className="close" onClick={() => router.push("/")}>&times;</span>
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
                    <AiOutlineUser className="btn" />
                    <div className="space"></div>
                    <input type="text" placeholder="Username" />
                </div>
                <div className="space"></div>
                <div className="input">
                    <AiOutlineKey className="btn" />
                    <div className="space"></div>

                    <input type="text" placeholder="Password" />
                </div>

                <small className="msg"></small>
                <div className="space"></div>
                <button onClick={() => router.push("/home")}>
                    <AiOutlineLogin className="btn" />
                    <div className="space"></div>
                    <p>Sign up</p>
                </button>
            </form>
        </div>
    </section>
}