import React from "react";

interface iTab {
    userId: number;
    userImage: string;
    userBio: string;
}

const Tab: React.FC<iTab> = ({ userImage, userBio }) => {
    return (
        <div className="shadow-lg rounded-lg bg-base-100">
            <div className="p-2">
                <div className="p-2 flex justify-center">
                    <img
                        src={userImage}
                        alt="userImage"
                        className="rounded-full shadow-lg"
                    />
                </div>
                <div className="p-2 text-center text-black">{userBio}</div>
            </div>
        </div>
    );
};

export default Tab;
