interface iMessage {
    userImage: string;
    messageTo: boolean;
    messageText: string;
    messageFirst: boolean;
}

const Message: React.FC<iMessage> = ({
    userImage,
    messageTo,
    messageText,
    messageFirst,
}) => {
    const reverseStyle = messageTo ? "" : "flex-row-reverse";
    const color = messageTo ? "bg-info" : "bg-base-300";

    return (
        <div className={`flex p-2 m-4 justify-end ${reverseStyle}`}>
            <div className={`p-2 ${color} rounded-lg w-5/6`}>{messageText}</div>
            <div className="w-16 h-16 p-2">
                {messageFirst ? (
                    <img
                        src={userImage}
                        alt="userImage"
                        className="rounded-full aspect-square object-cover w-16"
                    />
                ) : (
                    <div></div>
                )}
            </div>
        </div>
    );
};

export default Message;
