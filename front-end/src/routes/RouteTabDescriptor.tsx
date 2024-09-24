import { useState } from "react";

import Tab from "../components/Tab";
import userImage0 from "../assets/user2.jpg";
import userImage1 from "../assets/user1.jpg";
import userImage2 from "../assets/profile.jpg";

interface tab {
    userName: string;
    userId: number;
    userImage: string;
    userBio: string;
}

interface iTabSelector {
    userId: number;
    userName: string;
    handleSetTab: (userId: number) => void;
}

const data = [
    {
        userName: "Nicki",
        userId: 0,
        userImage: userImage0,
        userBio:
            "A 28-year-old software engineer who loves AI, hiking, and sci-fi novels. Enjoys traveling and trying new recipes.",
    },

    {
        userName: "Jake",
        userId: 1,
        userImage: userImage1,
        userBio:
            "A 35-year-old graphic designer who creates digital art, plays guitar, and practices yoga. Tech and gaming enthusiast.",
    },

    {
        userName: "Daniel",
        userId: 2,
        userImage: userImage2,
        userBio:
            "A 29-year-old amateur chess player who enjoys gelato. Enjoys building and ruining friendships on the pickleball court.",
    },
];

const TabSelector: React.FC<iTabSelector> = ({
    userId,
    userName,
    handleSetTab,
}) => {
    return (
        <div className="p-2 px-4 font-medium">
            <button onClick={() => handleSetTab(userId)}>{userName}</button>
        </div>
    );
};

const RouteTabDescriptor = () => {
    const [tab, setTab] = useState<tab>(data[0]);

    const handleSetTab = (userId: number) => {
        const newTab = data.filter((x) => x.userId === userId)[0];
        setTab(newTab);
    };

    return (
        <div
            id="RouteTabDescriptor"
            className="h-screen bg-base-200 flex justify-center"
        >
            <div className="basis-1/2 py-10">
                <div className="flex justify-between p-2 bg-base-100 rounded-lg">
                    {data.map((x, id) => {
                        return (
                            <TabSelector
                                key={id}
                                userId={x.userId}
                                userName={x.userName}
                                handleSetTab={handleSetTab}
                            />
                        );
                    })}
                </div>
                <br />
                <Tab
                    userId={tab.userId}
                    userImage={tab.userImage}
                    userBio={tab.userBio}
                />
            </div>
        </div>
    );
};

export default RouteTabDescriptor;
