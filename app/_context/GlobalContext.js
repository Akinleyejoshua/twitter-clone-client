"use client";

import { createContext, useState } from "react";
import { formatNumber, rand } from "../utils/helpers";

export const GlobalContext = createContext({
    tweets: {},
});

export const GlobalProvider = ({ children }) => {
    // ============================ TWEETS ===============================================

    // const rand = () => 10000;

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
    ]);

    const appendTweet = (data) => {
        setTweets((prevState) => [...prevState, data]);
    };

    const like = (e) => {
        let target = e.target;
        let btn = e.target.children[1];
        let text = e.target.children[2];

        if (target.className.includes("far")) {
            target.classList.replace("far", "fa");
            let val = parseInt(text.innerHTML) + 1
            text.innerHTML = val
            btn.innerHTML = formatNumber(val);
        } else {
            target.classList.replace("fa", "far");
            let val = parseInt(text.innerHTML) - 1
            text.innerHTML = val
            btn.innerHTML = formatNumber(val);
        }
    };

    // ========================== TRENDS ========================================
    const [trends, setTrends] = useState([
        {
            where: "Nigeria",
            title: "#Frontend",
            posts: rand(),
        },
        {
            where: "Nigeria",
            title: "#Backend",
            posts: rand(),
        },
        {
            where: "Nigeria",
            title: "X clone minimal version",
            posts: rand(),
        },
    ]);

    const [follow, setFollow] = useState([
        {
            _id: 0,
            img: tweets[0].mediaUrls[0],
            id: "@john",
            name: "John",
        },
        {
            _id: 1,
            img: tweets[0].mediaUrls[1],
            id: "@dave",
            name: "David",
        },
    ]);

    // ============================= NOTIFICATION ===================================
    const [notifications, setNotification] = useState([
        {
            _id: 0,
            id: "@AkinleyeJoshua",
            name: "Akinleye Joshua",
            img: tweets[0].mediaUrls[1],
            // type: "liked/retweet/comment/follow/tweet/mention",
            type: "liked",
            content:
                "Developed the X/Twitter Post section - to view tweet & comment frontend #100DaysOfCode https://pic.twitter.com/CJ1nfhVAZg",
            tweet_id: 1,
        },
        {
            _id: 0,
            id: "@Akinleye",
            name: "Akinleye",
            img: tweets[0].mediaUrls[0],
            // type: "liked/retweet/comment/follow/tweet/mention",
            type: "retweet",
            content:
                "Developed the X/Twitter Post section - to view tweet & comment frontend #100DaysOfCode https://pic.twitter.com/CJ1nfhVAZg",
            tweet_id: 1,
        },
        {
            _id: 0,
            id: "@daveed",
            name: "Dave",
            img: tweets[0].mediaUrls[2],
            // type: "liked/retweet/comment/follow/tweet/mention",
            type: "comment",
            content: "Nice Project",
            tweet_id: 1,
        },
        {
            _id: 0,
            id: "@John",
            name: "Johnson",
            img: tweets[0].mediaUrls[1],
            // type: "liked/retweet/comment/follow/tweet/mention",
            type: "follow",
            content: "",
        },
        {
            _id: 0,
            id: "@joshua",
            name: "Josh",
            img: tweets[0].mediaUrls[2],
            // type: "liked/retweet/comment/follow/tweet/mention",
            type: "mention",
            content: "I saw your project & it's amazing!",
            tweet_id: 1,
        },
    ]);

    // ======================== PROFILE ==========================================
    const [profile, setProfile] = useState([
        {
            id: "@AkinleyeJoshua9",
            followers: 171,
            following: 800,
            name: "Akinleye Joshua",
            bio: "Internet Researcher",
            joined: "Joined March 2019",
            occupation: "Science & Technology",
            banner: tweets[0].mediaUrls[2],
            img: "https://pbs.twimg.com/profile_images/1678992283549483012/B1_JQiR-_normal.jpg"
        },
        {
            id: "@joshuaakinleye4",
            followers: 26,
            following: 4,
            name: "Josh",
            bio: "Internet Researcher",
            joined: "Joined March 2022",
            occupation: "Science & Technology",
            banner: tweets[0].mediaUrls[1],
            img: "https://pbs.twimg.com/profile_images/1678992283549483012/B1_JQiR-_normal.jpg"
        },
    ]);

    const myTweets = tweets.filter((item) => item.id === "@AkinleyeJoshua9");

    // ================== MESSAGES ==================================================

    const [messages, setMessages] = useState([
        {
            _id: "1_2",
            id: "@AkinleyeJoshua9",
            name: "Akinleye Joshua",
            followers: 171,
            following: 800,
            joined: "Joined March 2019",
            bio: "Internet Researcher",
            img: "https://pbs.twimg.com/profile_images/1678992283549483012/B1_JQiR-_normal.jpg",
            relativeTime: "5h",
            lastMessage: "You are welcome",
            chats: [
                {
                    id: "@Joshuaakinleye4",
                    text: "Yo Josh I just started a free group designed to help people in investing & web3 etc grow on Twitter. Your account fits well with our usual members so I was wondering if you would like to join?",
                    time: "May 5, 2023, 6:49 PM",
                },
                {
                    id: "@AkinleyeJoshua9",
                    text: "Oh thanks - I'm in - I'll would join",
                    time: "Jun 6, 2023, 3:44 PM",
                },
                {
                    id: "@Joshuaakinleye4",
                    text: "Okay, you're welcome",
                    time: "May 5, 2023, 6:49 PM",
                },
            ]

        }
    ])

    return (
        <GlobalContext.Provider
            value={{
                messages,
                profile,
                myTweets,
                tweets,
                appendTweet,
                like,
                trends,
                follow,
                notifications,
            }}
            children={children}
        />
    );
};
