import Image from "next/image";
import Img from "../_assets/img.jpg";
import { FaLocationArrow, FaRegFaceSmile } from "react-icons/fa6";
import { AiOutlineCalendar, AiOutlineFileImage, AiOutlineSend } from "react-icons/ai";
import { useState } from "react";
import { Button } from "./Button";

export const Draft = () => {
    const [typing, setTyping] = useState(false);
    const onType = (val) => {
        if (val.length === 0) {
            setTyping(false);
        } else {
            setTyping(true)
        }
    };
    return (
        <div className="draft">
            <div className="row">
                <Image src={Img} alt="" className="img" />
                <div className="col type">

                    <div
                        className="textarea"
                        onInput={(e) => onType(e.target.innerHTML)}
                        contentEditable={true}
                    ></div>

                    {!typing && <p className="placeholder">What is happening?!</p>}

                    {/* <textarea placeholder="What is happening?!"></textarea> */}
                    <div className="row utils">
                        <div className="row">
                            <AiOutlineFileImage className="btn" />
                            <div className="space"></div>
                            <FaRegFaceSmile className="btn" />
                            <div className="space"></div>
                            <FaLocationArrow className="btn" />
                            <div className="space"></div>
                            <AiOutlineCalendar className="btn" />
                        </div>
                        <div className="space"></div>
                        <div>
                            <Button
                                text="Post"
                                space={true}
                                icon={<AiOutlineSend className="" />}
                                onClick={() => { }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
