import Image from "next/image";
import Img from "../_assets/img.jpg";
import {
    AiOutlineShareAlt,
    AiOutlineRetweet,
    AiOutlineBarChart,
} from "react-icons/ai";
import { useRouter } from "next/navigation";
import { Space } from "./Space";
import { BiComment } from "react-icons/bi";
import { formatNumber } from "../utils/helpers";
import { useContext } from "react";
import { GlobalContext } from "@/app/_context/GlobalContext";


export const Tweets = ({ data }) => {
    const { like } = useContext(GlobalContext);
    const router = useRouter();

    return (
        <div className="tweets">
            {data?.map((item, i) => {
                return <div className="tweet row" key={i}>

                    <div className="img">
                        <Image src={Img} alt="" className="img" />
                    </div>
                    <div className="space"></div>
                    <div className="col w-100">
                        <div className="row bio">
                            <p className="name">{item?.name}</p>
                            <Space p={".1rem"} />
                            <p>{item?.id}</p>
                            <div className="space">·</div>
                            <small>{item?.relativeTime}</small>
                        </div>
                        <div
                            onClick={() => router.push(`/tweet/${item._id}`)}
                            className="content"
                            key={i}
                        >
                            {item.contentText !== "" && (
                                <div onClick={() => router.push(`/tweet/${item._id}`)}>
                                    <p>{item.contentText}</p>
                                </div>
                            )}

                            {item.isMedia && (
                                <div>
                                    <Space p={".25rem"} />
                                    {item.mediaUrls.length > 0 ? (
                                        <div className="gallery">
                                            {item.mediaUrls.map((item, i) => {
                                                return (
                                                    <div key={i}>
                                                        <img src={item} alt="" className="img" />
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    ) : (
                                        <>
                                            {item.mediaUrls.map((item, i) => {
                                                return (
                                                    <div key={i}>
                                                        <img src={item} alt="" className="img" />
                                                    </div>
                                                );
                                            })}
                                        </>
                                    )}
                                </div>
                            )}
                        </div>
                        <Space p={".5rem"} />

                        <div className="actions">
                            <button onClick={() => router.push(`/tweet/${item._id}`)}>
                                <BiComment className="btn" />
                                <Space p={".15rem"} />
                                <p>{formatNumber(item?.comments)}</p>
                            </button>
                            {/* <Space p={".25rem"} /> */}

                            <button>
                                <AiOutlineRetweet className="btn blue" />
                                <Space p={".15rem"} />
                                <p>{formatNumber(item?.retweets)}</p>
                            </button>
                            {/* <Space p={".25rem"} /> */}

                            <button className="far fa-heart red btn" id={item?.likes} onClick={e => like(e)}>
                            <Space p={".15rem"} />
                                <p className="black2">{formatNumber(item?.likes)}</p>
                            </button>

                            {/* <Space p={".25rem"} /> */}
                            <button>
                                <AiOutlineBarChart className="btn" />
                                <Space p={".15rem"} />
                                <p>{formatNumber(item?.chart)}</p>
                            </button>
                            {/* <Space p={".25rem"} /> */}

                            <button>
                                <AiOutlineShareAlt className="btn" />
                            </button>
                        </div>
                        <Space p={".5rem"} />
                    </div>
                </div>
            })}
        </div>
    );
};
