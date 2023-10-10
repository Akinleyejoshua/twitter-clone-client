import Img from "../_assets/img.jpg";
import Image from "next/image";
import { useRouter } from "next/navigation"
import { useState } from "react";

export const ListChat = ({data, openChat}) => {
    const router = useRouter();

    const mediaQ = (id) => {
        const match = window?.matchMedia("(max-width: 740px)")
        match.matches ? router.push(`/messages/chat/?id=${id}`) : openChat(id, true)
    }

    return <div className="list-chat">
        {data.map((item, i) => {
           return <div className="item" key={i}  onClick={() => mediaQ(item?.id)}>
                <img src={item?.img} alt="" className="img" />
                <div className="space-1"></div>
                <div className="col">
                    <div className="name row">
                        <p className="b-900">{item?.name}</p>
                        <div className="space">·</div>
                        <small className="black">{item?.id}</small>
                        <div className="space">·</div>
                        <p>{item?.relativeTime}</p>
                    </div>
                    <p className="black">{item?.lastMessage}</p>
                </div>
            </div>
        })}
    </div>
}