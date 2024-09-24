import React from "react";
import iconHeart from "../assets/heart.png";
import iconComment from "../assets/chat-box.png";

interface iPost {
    userImage: string;
    userName: string;
    postImage: string;
    postDescription: string;
    groupName: string;
    countLikes: number;
    countComments: number;
}

const Post: React.FC<iPost> = ({
    userImage,
    userName,
    postImage,
    postDescription,
    groupName,
    countLikes,
    countComments,
}) => {
    return (
        <div className="flex py-10">
            <div className="h-4/6 w-4/6 rounded-full p-2">
                <img src={userImage} alt="userImage" className="rounded-full" />
            </div>
            <div className="p-2">
                <div className="flex px-2">
                    <div className="text-black font-medium">
                        {userName}&nbsp;
                    </div>
                    <div className="font-light">in {groupName}</div>
                </div>
                <div className="px-2 font-light">3 min ago</div>
                <div className="p-2">
                    <img src={postImage} alt="postImage" />
                </div>
                <div className="p-2 text-black text-lg">{postDescription}</div>
                <div className="p-2 flex">
                    <div className="flex text-black text-md pr-4">
                        <div className="pr-2 w-8 h-8">
                            <img src={iconHeart} alt="iconHeart" />
                        </div>
                        <div>{countLikes} likes</div>
                    </div>
                    <div className="flex text-black text-md pr-4">
                        <div className="pr-2 w-8 h-8">
                            <img src={iconComment} alt="iconComment" />
                        </div>
                        <div>{countComments} comments</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;
