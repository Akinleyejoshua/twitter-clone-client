import { AppLogo } from "@/app/_components/AppLogo";
import { Footer } from "@/app/_components/Footer";
import { LoginBar } from "@/app/_components/LoginBar";

export default function Home() {
  return (
    <main className="">
      <div className="home">
        <AppLogo />
        <LoginBar />
      </div>
      <Footer />
    </main>
  )
}
