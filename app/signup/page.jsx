import { AppLogo } from "@/app/_components/AppLogo";
import { LoginBar } from "@/app/_components/LoginBar";
import { SignupModal } from "@/app/_components/SigupModal";

export default function Signup() {
  return (
    <main className="">
      <div className="home">
        <AppLogo />
        <LoginBar />
        <SignupModal />
      </div>
    </main>
  )
}
