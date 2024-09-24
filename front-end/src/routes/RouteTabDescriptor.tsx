import { useState } from "react";

import Tab from "../components/Tab";
import TabSelector from "../components/TabSelector";
import dataTabs from "../data/dataTabs";

interface tab {
    userName: string;
    userId: number;
    userImage: string;
    userBio: string;
}

const RouteTabDescriptor = () => {
    const [tab, setTab] = useState<tab>(dataTabs[0]);

    const handleSetTab = (userId: number) => {
        const newTab = dataTabs.filter((x) => x.userId === userId)[0];
        setTab(newTab);
    };

    return (
        <div
            id="RouteTabDescriptor"
            className="h-screen bg-base-200 flex justify-center"
        >
            <div className="basis-1/2 py-10">
                <div className="flex justify-between p-2 bg-base-100 rounded-lg">
                    {dataTabs.map((x, id) => {
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
