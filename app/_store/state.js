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
const rand = () => Math.floor(Math.random() * 10000000);

const initialState = {
    tweets: [
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
            bio: () => ids.filter((item) => item._id === 1),
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
    ]
}

const stateReducer = (state = initialState, action) => {
    switch (action.type) {
        case "update_tweet":
            console.log(action)
            return {
                ...state,
                tweets: {
                    ...state,
                    liked: action.liked
                }
            }
        default:
            return state;
    }
}

export default stateReducer;