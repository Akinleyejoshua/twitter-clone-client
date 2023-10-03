import Image from "next/image";
import Img from "../_assets/img.jpg";
import { FaChartLine, FaRetweet, } from "react-icons/fa6";
import { AiOutlineComment, AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import {useRouter} from "next/navigation"

export const Tweets = ({ data }) => {
    const arr = [{}]
    const router = useRouter();

    return <div className="tweets">

        {arr?.map((item,i) => {
            return <div className="tweet row" key={i} onClick={() => router.push("/tweet")}>
                <div className="img">
                    <Image src={Img} alt="" className="img" />
                </div>
                <div className="space"></div>
                <div className="col w-100">
                    <div className="row bio">
                        <p className="name">Joshua Akinleye</p>
                        <div className="space"></div>
                        <small>@Akinleyejoshua9</small>
                        <div className="space">
                            ·
                        </div>

                        <small>24h</small>
                    </div>
                    <div className="content">
                        <p>This is my Profile Pic, My name is Joshua and i am building <span className="tag">@XTwitter</span> clone</p>
                        <div className="tag">#100DaysOfCode</div>
                        <div className="space"></div>
                        <Image src={Img} alt="" className="img" />

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
                            <FaChartLine className="btn" />
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
                </div>
            </div>
        })}
    </div>
}