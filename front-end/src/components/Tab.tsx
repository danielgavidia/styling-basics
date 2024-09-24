import React from "react";

interface iTab {
    userId: number;
    userImage: string;
    userBio: string;
}

const Tab: React.FC<iTab> = ({ userImage, userBio }) => {
    return (
        <div className="shadow-lg rounded-lg bg-base-100 p-6">
            <div className="p-2 justify-items-center">
                <div className="p-2 flex justify-center h-60">
                    <img
                        src={userImage}
                        alt="userImage"
                        className="rounded-full shadow-lg aspect-square object-cover"
                    />
                </div>
                <div className="p-2 text-center text-black flex justify-center">
                    <p className="w-4/6 ">{userBio}</p>
                </div>
            </div>
        </div>
    );
};

export default Tab;
