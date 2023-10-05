import { AiOutlineFileImage, AiOutlineGif, AiOutlineSend, AiOutlineSmile } from "react-icons/ai";
import Img from "../_assets/img.jpg";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa6";
import { useRouter } from "next/navigation"
import { Space } from "./Space";

export const ChatBar = () => {
    const arr = [{}, {}, {}, {}]
    const router = useRouter();


    return <div className="chat-bar">
        <div>
            <div className="header row">
                <FaArrowLeft className="btn" onClick={() => router.back()} />
                <h1 className="b-900 p-1 align-center">Joshua Akinleye</h1>

            </div>
        </div>

        <div className="chats relative">
            {/* <div className="space-2"></div> */}
            <div className="top">
                <Image src={Img} alt="" className="img" />
                <div className="name b-900">Akinleye Joshua</div>
                <small className="black">@AkinleyeJoshua9</small>
                <div className="space-2"></div>
                <p className="black">Teaching you how to master wealth, health and happiness | It's time to stop being a loser</p>
                <div className="space"></div>
                <p className="black">Joined March 2022 · 2,554 Followers</p>
            </div>
            <div className="space-2"></div>
            {arr.map((items, i) => {
                return <div className="msg col" key={i}>
                    <div className="rec">
                        <p className="black">Yo Josh I just started a free group designed to help people in investing & web3 etc grow on Twitter.
                            Your account fits well with our usual members so I was wondering if you would like to join?</p>
                        <small className="black">May 5, 2023, 6:49 PM</small>
                        <Space p={"1rem"}/>
                    </div>
                    <div className="sen">
                        <p className="black">Oh thanks - I'm in - I'll would join</p>
                        <small className="black">Jun 6, 2023, 3:44 PM</small>
                        <Space p={"1rem"}/>
                    </div>
                    
                </div>
            })}
            <div className="">
                <div className="input-bar">
                    <div className="input">
                        <div className="row w-max act">
                            <AiOutlineFileImage className="btn" />
                            <AiOutlineGif className="btn" />
                            <AiOutlineSmile className="btn" />
                        </div>
                        <div className="space"></div>
                        <div className="w-100 text-input row">
                            <input type="text" placeholder="Start a new message" />
                            <button className="align-center">
                                <AiOutlineSend className="btn" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    </div>
}