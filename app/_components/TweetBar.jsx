import Image from "next/image";
import Img from "../app/img1.jpg";

export const TweetBar = () => {
    return <div className="tweet-bar">
        <div className="tweet row">
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
                    <p>Web Development is FUN. My name is Joshua and i am building <span className="tag">@XTwitter</span> clone</p>
                    <div className="tag">#100DaysOfCode</div>
                    <div className="space"></div>
                    <Image src={Img} alt="" className="img" />

                </div>
                <div className="space-1"></div>
            </div>
        </div>
    </div>
}