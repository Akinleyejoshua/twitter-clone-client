import Image from "next/image";
import { AiOutlineUser } from "react-icons/ai";
import Img1 from "../_assets/img1.jpg";

export const NotificationBar = () => {
    const arr = [{}, {}, {}, {}, {}, {}]
    return <div className="notification-bar">
        {arr.map((item, i) => {
            return <div className="row bar" key={i}>
                <AiOutlineUser className="btn" />
                <div className="space"></div>
                <div className="col">
                    <Image src={Img1} alt="" className="img" />
                    <div className="space"></div>
                    <div className="black row"><p className="b-900">Legend2k</p><p className="space"></p> liked your post</div>
                    <div className="space-1"></div>
                    <p className="black">Built the Profile Section for X/Twitter Clone App
                        #100DaysOfCode
                        LINK - https://x-clone-client.vercel.app https://pic.twitter.com/3z7T1QpDGu</p>
                </div>
            </div>
        })}
    </div>
}