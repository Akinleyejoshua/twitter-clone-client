import Img from "../_assets/img.jpg";
import Image from "next/image";
import { useRouter } from "next/navigation"
import { useState } from "react";

export const ListChat = () => {
    const arr = [{}, {}, {}, {}, {}]

    const router = useRouter();
    const [chatMode, setChatMode] = useState(false);

    const mediaQ = () => {
        const match = window?.matchMedia("(max-width: 740px)")
        match.matches ? router.push("/messages/chat") : setChatMode(true)
    }

    return <div className="list-chat">
        {arr.map((item, i) => {
           return <div className="item" key={i}  onClick={mediaQ}>
                <Image src={Img} alt="" className="img" />
                <div className="space-1"></div>
                <div className="col">
                    <div className="name row">
                        <p className="b-900">Akinleye</p>
                        <div className="space">·</div>
                        <small className="black">@AkinleyeJoshua9</small>
                        <div className="space">·</div>
                        <p>Jul 3</p>
                    </div>
                    <p className="black">You are welcome</p>
                </div>

            </div>
        })}
    </div>
}