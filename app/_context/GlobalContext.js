"use client"

import { createContext, useState } from "react";
import { formatNumber } from "../utils/helpers";

export const GlobalContext = createContext({
    tweets: {}
})

export const GlobalProvider = ({ children }) => {

    // ============================ TWEETS ===============================================

    // const rand = () => 100;
    const rand = () => Math.floor(Math.random() * 10000000);

    const [tweets, setTweets] = useState([
        {
            _id: 0,
            name: "Joshua Akinleye",
            id: "@AkinleyeJoshua9",
            img: "https://pbs.twimg.com/profile_images/1678992283549483012/B1_JQiR-_normal.jpg",
            relativeTime: "5s",
            contentText:
                "My name is Joshua and i am building Twitter Clone Minimal Version",
            isMedia: true,
            mediaUrls: [
                "https://pilbox.themuse.com/image.jpg?filter=antialias&h=385&opt=1&pos=top-left&prog=1&q=keep&url=https%3A%2F%2Fcms-assets.themuse.com%2Fmedia%2Flead%2F01212022-1047259374-coding-classes_scanrail.jpg&w=700",
                "https://www.computerhope.com/jargon/p/program.png",
                "https://media.istockphoto.com/id/1224500457/photo/programming-code-abstract-technology-background-of-software-developer-and-computer-script.jpg?s=612x612&w=0&k=20&c=nHMypkMTU1HUUW85Zt0Ff7MDbq17n0eVeXaoM9Knt4Q=",
                "https://media.istockphoto.com/id/537331500/photo/programming-code-abstract-technology-background-of-software-deve.jpg?s=612x612&w=0&k=20&c=jlYes8ZfnCmD0lLn-vKvzQoKXrWaEcVypHnB5MuO-g8=",
            ],
            likes: rand(),
            retweets: rand(),
            comments: rand(),
            chart: rand(),
            liked: false,
        },
        {
            _id: 1,
            name: "Josh",
            id: "@Joshuaakinleye4",
            img: "https://media.licdn.com/media/AAYQAQSOAAgAAQAAAAAAAB-zrMZEDXI2T62PSuT6kpB6qg.png",
            relativeTime: "5h",
            contentText:
                "My name is Josh and i am building Twitter Clone Minimal Version",
            isMedia: false,
            mediaUrls: [],
            likes: rand(),
            retweets: rand(),
            comments: rand(),
            chart: rand(),
            liked: true,
        },
    ])

    const appendTweet = (data) => {
        setTweets(prevState => ([
            ...prevState, data
        ]))
    }

    const like = (e) => {
        let target = e.target;
        let text = e.target.children[1]
        let id = e.target.id;

        if (target.className.includes("far")) {
            target.classList.replace("far", "fa")
            text.innerHTML = formatNumber(parseInt(id) + parseInt(1))
        } else {
            target.classList.replace("fa", "far")
            text.innerHTML = formatNumber(parseInt(id) - parseInt(1))

        }
    }

    // ========================== TRENDS ========================================
    const [trends, setTrends] = useState([
        {
            where: "Nigeria",
            title: "#Frontend",
            post: rand(),
        },
        {
            where: "Nigeria",
            title: "#Backend",
            post: rand(),
        },
        {
            where: "Nigeria",
            title: "X clone minimal",
            posts: rand(),
        }
    ])


    return <GlobalContext.Provider value={{
        tweets,
        appendTweet,
        like,
        trends
    }} children={children} />

}