import Image from "next/image";
import Img from "../_assets/img1.jpg";
import { AiOutlineComment, AiOutlineHeart, AiOutlineLineChart, AiOutlineShareAlt } from "react-icons/ai";
import { FaBookmark, FaRetweet } from "react-icons/fa6";
import { CommentDraft } from "./CommentDraft";

export const TweetBar = () => {
    return <div className="tweet-bar">
        <div className="tweet col">
            <div className="img row">
                <Image src={Img} alt="" className="img" />
                <div className="space"></div>
                <div className="col">
                    <p className="name">Joshua Akinleye</p>
                    <small>@Akinleyejoshua9</small>
                </div>
            </div>
            <div className="space"></div>
            <div className="col w-100">
                <div className="content">
                    <p>Web Development is FUN. My name is Joshua and i am building <span className="tag">@XTwitter</span> clone</p>
                    <div className="tag">#100DaysOfCode</div>
                    <div className="space"></div>
                    <Image src={Img} alt="" className="img" />
                </div>
                <div className="space-1"></div>
            </div>
            <div className="col items-center">
                <p className="black">10:06 PM · Oct 2, 2023 · 22 Views</p>
                <div className="space-2"></div>
                <p className="eng blue"><AiOutlineLineChart className="btn" /> View Post Engagement</p>
            </div>
            <div className="space-1"></div>
            <div className="actions">
                <button>
                    <AiOutlineComment className="btn" />
                    <div className="space"></div>
                    <p>16.5k</p>
                </button>
                <div className="space-1"></div>

                <button>
                    <FaRetweet className="btn" />
                    <div className="space"></div>
                    <p>2k</p>
                </button>
                <div className="space-1"></div>

                <button>
                    <AiOutlineHeart className="btn" />
                    <div className="space"></div>
                    <p>16.5k</p>
                </button>
                <div className="space-1"></div>
                <button>
                    <FaBookmark className="btn" />
                    <div className="space"></div>
                    <p>1.5k</p>
                </button>
                <div className="space-1"></div>

                <button>
                    <AiOutlineShareAlt className="btn" />
                    <div className="space"></div>
                    <p>6.5k</p>
                </button>
            </div>
            <CommentDraft/>
        </div>
    </div>
}