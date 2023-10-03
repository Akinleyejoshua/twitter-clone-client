import { AppLogo } from "@/app/_components/AppLogo";
import { LoginBar } from "@/app/_components/LoginBar";
import { SigninModal } from "@/app/_components/SigninModal";

export default function Signin() {
  return (
    <main className="">
      <div className="home">
        <AppLogo />
        <LoginBar />
        <SigninModal />
      </div>
    </main>
  )
}
