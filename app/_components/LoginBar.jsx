"use client"
import { useRouter } from "next/navigation"
import { FaGoogle, FaApple } from "react-icons/fa6"

export const LoginBar = () => {
    const router = useRouter();

    return <section className="login-bar flex">

        <h1>Happening now</h1>
        <br />
        <h4>Join today.</h4>
        <br />
        <form method="dialog">
            <button className="btn">
                <FaGoogle className="icon" />
                <div className="space-1"></div>
                <p>Signup with Google</p>
            </button>
            <div className="space-1"></div>
            <button className="btn">
                <FaApple className="icon" />
                <div className="space-1"></div>
                <p>Signup with Apple</p>
            </button>
            <div className="space"></div>
            <small className="m-auto">or</small>
            <div className="space"></div>

            <button className="create-account" onClick={() => router.push("/signup")}>Create account</button>
            <small>By signing up, you agree to the <a href="#">Terms of Service</a>  and <a href="#"> Privacy Policy</a>, including <a href="#">Cookie Use</a> .</small>
        </form>
        <br />
        <h5>Already have an account?</h5>
        <br />
        <button className="signin" onClick={() => router.push("/signin")}>Sign in</button>
    </section>
}