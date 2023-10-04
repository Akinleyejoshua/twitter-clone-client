import Image from "next/image";
import Img from "../_assets/img.jpg";
import {
    AiOutlineHeart,
    AiOutlineShareAlt,
    AiOutlineRetweet,
    AiOutlineBarChart
} from "react-icons/ai";
import { useRouter } from "next/navigation";
import { Space } from "./Space";
import { BiComment } from "react-icons/bi"
import { } from "react-icons/io5"

export const Tweets = ({ data }) => {
    const ids = [
        {
            _id: 0,
            name: "Joshua Akinleye",
            id: "@AkinleyeJoshua9",
            img: "https://pbs.twimg.com/profile_images/1678992283549483012/B1_JQiR-_normal.jpg",
        },
        {
            _id: 1,
            name: "Josh",
            id: "@Joshuaakinleye4",
            img: "https://media.licdn.com/media/AAYQAQSOAAgAAQAAAAAAAB-zrMZEDXI2T62PSuT6kpB6qg.png",
        },
    ];

    const arr = [
        {
            _id: 0,
            bio: () => ids.filter((item) => item._id === 0),
            relativeTime: "5s",
            contentText:
                "My name is Joshua and i am building Twitter Clone Minimal Version",
            isMedia: true,
            mediaUrls: [
                "https://pilbox.themuse.com/image.jpg?filter=antialias&h=385&opt=1&pos=top-left&prog=1&q=keep&url=https%3A%2F%2Fcms-assets.themuse.com%2Fmedia%2Flead%2F01212022-1047259374-coding-classes_scanrail.jpg&w=700",
                "https://www.computerhope.com/jargon/p/program.png",
                "https://media.istockphoto.com/id/1224500457/photo/programming-code-abstract-technology-background-of-software-developer-and-computer-script.jpg?s=612x612&w=0&k=20&c=nHMypkMTU1HUUW85Zt0Ff7MDbq17n0eVeXaoM9Knt4Q=",
                "https://media.istockphoto.com/id/537331500/photo/programming-code-abstract-technology-background-of-software-deve.jpg?s=612x612&w=0&k=20&c=jlYes8ZfnCmD0lLn-vKvzQoKXrWaEcVypHnB5MuO-g8="
            ],
            likes: 0,
            retweets: 0,
            comments: 0,
            chart: 0,
            isReTweet: false,
        },
        {
            _id: 1,
            bio: () => ids.filter((item) => item._id === 1),
            relativeTime: "5h",
            contentText:
                "My name is Josh and i am building Twitter Clone Minimal Version",
            isMedia: false,
            mediaUrls: [],
        },
    ];
    const router = useRouter();

    return (
        <div className="tweets">
            {arr?.map((item, i) => {
                const bio = item.bio()[0];
                return (
                    <div className="tweet row" key={i}>
                        <div className="img">
                            <Image src={Img} alt="" className="img" />
                        </div>
                        <div className="space"></div>
                        <div className="col w-100">
                            <div className="row bio">
                                <p className="name">{bio.name}</p>
                                <Space p={".1rem"} />
                                <small>{bio.id}</small>
                                <div className="space">·</div>
                                <small>{item.relativeTime}</small>
                            </div>
                            <div
                                className="content">
                                {item.contentText !== "" && <div onClick={() => router.push(`/tweet/${item._id}`)}>
                                    <p>{item.contentText}</p>
                                </div>}

                                {item.isMedia &&
                                    <div>
                                        <Space p={".25rem"} />
                                        {item.mediaUrls.length > 0 ? <div className="gallery">
                                            {item.mediaUrls.map((item, i) => {
                                                return (
                                                    <>
                                                        <img src={item} key={i} alt="" className="img" />
                                                    </>
                                                );
                                            })}
                                        </div> : <>

                                            {item.mediaUrls.map((item, i) => {
                                                return (
                                                    <>
                                                        <img src={item} key={i} alt="" className="img" />
                                                    </>
                                                );
                                            })}
                                        </>}
                                    </div>
                                }

                            </div>
                            <Space p={".5rem"} />

                            <div className="actions">
                                <button>
                                    <BiComment className="btn" />
                                    <div className="space"></div>
                                    <p>{item?.likes}</p>
                                </button>
                                <div className="space-1"></div>

                                <button>
                                    <AiOutlineRetweet className="btn" />
                                    <div className="space"></div>
                                    <p>{item?.retweets}</p>
                                </button>
                                <div className="space-1"></div>

                                <button>
                                    <AiOutlineHeart className="btn" />
                                    <div className="space"></div>
                                    <p>{item?.comments}</p>
                                </button>
                                <div className="space-1"></div>
                                <button>
                                    <AiOutlineBarChart className="btn" />
                                    <div className="space"></div>
                                    <p>{item?.chart}</p>
                                </button>
                                <div className="space-1"></div>

                                <button>
                                    <AiOutlineShareAlt className="btn" />
                                </button>
                            </div>
                            <Space p={".5rem"} />
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
