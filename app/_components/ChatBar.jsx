import { AiOutlineFileImage, AiOutlineGif, AiOutlineSend, AiOutlineSmile } from "react-icons/ai";
import Img from "../_assets/img.jpg";
import { Space } from "./Space";
import { TopBar } from "./TopBar";
import { useSearchParams } from "next/navigation";
import { useContext } from "react";
import { GlobalContext } from "../_context/GlobalContext";

export const ChatBar = ({data, msgId}) => {
    const {messages} = useContext(GlobalContext)
    
    const params = useSearchParams();
    const id = params.get("id");

    const arr = messages?.filter(item => item.id === id || msgId)[0];
    console.log(id)

    return <div className="chat-bar">
        <div>
            <TopBar text={"Akinleye Joshua"} textBtm={""} full={true} />
        </div>

        <div className="chats">
            {/* <div className="space-2"></div> */}
            <div className="top">
                <img src={arr?.img} alt="" className="img" />
                <div className="name b-900">{arr?.name}</div>
                <small className="black">{arr?.id}</small>
                <div className="space-2"></div>
                <p className="black">{arr?.bio}</p>
                <div className="space"></div>
                <p className="black">{arr?.joined} · {arr?.followers} Followers</p>
            </div>
            <div className="space-2"></div>
            {arr?.chats?.map((items, i) => {
                return <div className="msg col" key={i}>
                    {items?.id === arr?.id ? <div className="sen">
                        <p className="black">{items?.text}</p>
                        <small className="black">{items?.time}</small>
                        <Space p={"1rem"} />
                    </div> : <div className="rec">
                        <p className="black">{items?.text}</p><small className="black">{items?.time}</small>
                        <Space p={"1rem"} />
                    </div>}

                </div>
            })}

        </div>

        <div className="bottom">
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
}