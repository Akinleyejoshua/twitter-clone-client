import Image from "next/image";
import { AiOutlineCalendar } from "react-icons/ai";
import { FaBriefcase } from "react-icons/fa6";
import Img from "../_assets/img.jpg";
import Img1 from "../_assets/img1.jpg";


export const ProfileBar = () => {
    return <div className="profile-bar">
        <div className="img-bar">
            <Image src={Img1} alt="" className="banner" />
            <Image src={Img} alt="" className="img" />
        </div>
        <div className="space-2"></div>
        <div className="bio">
            <h2>Josh</h2>
            <small className="black">@AkinleyeJoshua9</small>
            <div className="space-1"></div>
            <p>Internet Researcher</p>

            <div className="space-2"></div>
            <div className="row item-center black"><FaBriefcase /><div className="space"></div>Science & Technology</div>
            <div className="row item-center black"><AiOutlineCalendar /><div className="space"></div>Joined March 2022</div>
        </div>
        <div className="tab">
            <button className="active">Posts</button>
            <button>Replies</button>
            <button>Media</button>
            <button>Likes</button>
        </div>
    </div>
}