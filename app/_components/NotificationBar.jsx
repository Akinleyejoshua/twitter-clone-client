import {
    AiFillHeart,
    AiOutlineRetweet,
    AiOutlineSend,
    AiOutlineUser,
    AiOutlineUserAdd,
} from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import { Space } from "./Space";
import { FaAt } from "react-icons/fa6";

export const NotificationBar = ({ notifications }) => {
    return (
        <div className="notification-bar">
            {notifications?.map((item, i) => {
                return (
                    <div className="row bar" key={i}>
                        {item?.type === "mention" && <FaAt className="btn black" />}
                        {item?.type === "liked" && <AiFillHeart className="btn red" />}
                        {item?.type === "retweet" && (
                            <AiOutlineRetweet className="btn blue" />
                        )}
                        {item?.type === "tweet" && <AiOutlineSend className="btn blue" />}
                        {item?.type === "comment" && <BiComment className="btn black" />}
                        {item?.type === "follow" && <AiOutlineUserAdd className="btn black" />}

                        <Space p={".5rem"}/>
                        <div className="col">
                            <img src={item?.img} alt="" className="img" />
                            <Space p={".5rem"} />

                            {item?.type === "liked" && (
                                <div className="black row">
                                    <p className="b-900">{item?.name}</p>
                                    <p className="space"></p> liked your post
                                </div>
                            )}

                            {item?.type === "retweet" && (
                                <div className="black row">
                                    <p className="b-900">{item?.name}</p>
                                    <p className="space"></p> retweeted your post
                                </div>
                            )}

                            {item?.type === "comment" && (
                                <div className="black row">
                                    <p className="b-900">{item?.name}</p>
                                    <p className="space"></p> commented on your post
                                </div>
                            )}

                            {item?.type === "follow" && (
                                <div className="black row">
                                    <p className="b-900">{item?.name}</p>
                                    <p className="space"></p> started following you
                                </div>
                            )}

                            {item?.type === "mention" && (
                                <div className="black row">
                                    <p className="b-900">{item?.name}</p>
                                    <p className="space"></p> mentioned you
                                </div>
                            )}
                            <Space p={".25rem"} />
                            <p className="black">
                                {item?.content}
                            </p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
