import { AiOutlineCalendar } from "react-icons/ai";
import { FaBriefcase } from "react-icons/fa6";
import { Space } from "./Space";

export const ProfileBar = ({ data }) => {
    return <div className="profile-bar">
        <div className="img-bar">
            <img src={data.banner} alt="" className="banner" />
            <img src={data.img} alt="" className="img" />
        </div>
        <div className="space-2"></div>
        <div className="bio">
            <h2>{data.name}</h2>
            <small className="black">{data.id}</small>
            <div className="space-1"></div>
            <p>{data.bio}</p>

            {data.joined !== "" && data.occupation !== "" &&
                <div>
                    <Space />
                    {data.joined !== "" && <div className="row item-center black"><AiOutlineCalendar /><div className="space"></div>Joined March 2022</div>}
                    {data.occupation !== "" && <div className="row item-center black"><FaBriefcase /><div className="space"></div>Science & Technology</div>}
                </div>
            }

        </div>
        <div className="tab">
            <button className="active">Posts</button>
            <button>Replies</button>
            <button>Media</button>
            <button>Likes</button>
        </div>
    </div>
}