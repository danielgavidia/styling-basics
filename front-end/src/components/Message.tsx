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
    if (messageTo === true) {
        return (
            <div className="flex p-2 m-4 justify-end">
                <div className="p-2 bg-info rounded-lg w-5/6">
                    {messageText}
                </div>
                <div className="w-16 h-16 p-2">
                    {messageFirst ? (
                        <img
                            src={userImage}
                            alt="userImage"
                            className="rounded-full aspect-square object-cover"
                        />
                    ) : (
                        <div></div>
                    )}
                </div>
            </div>
        );
    } else if (messageTo === false) {
        return (
            <div className="flex p-2 m-4 justify-start">
                <div className="w-16 h-16 p-2">
                    {messageFirst ? (
                        <img
                            src={userImage}
                            alt="userImage"
                            className="rounded-full aspect-square object-cover"
                        />
                    ) : (
                        <div></div>
                    )}
                </div>
                <div className="p-2 bg-base-300 rounded-lg w-5/6">
                    {messageText}
                </div>
            </div>
        );
    }
};

export default Message;
