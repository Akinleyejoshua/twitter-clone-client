import Image from "next/image";
import Img from "../_assets/img.jpg";
import { FaLocationArrow, FaRegFaceSmile } from "react-icons/fa6";
import { AiOutlineCalendar, AiOutlineFileImage } from "react-icons/ai";

export const Draft = () => {
    return <div className="draft">
        <div className="row">
            <Image src={Img} alt="" className="img" />
            <div className="col type">
                <input placeholder="What is happening?!"></input>
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
                        <button>Post</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}