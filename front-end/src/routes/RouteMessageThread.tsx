import Message from "../components/Message";
import { data } from "../data/dataMessages";

const RouteMessageThread = () => {
    return (
        <div id="RouteMessageThread">
            <div className="bg-white">
                {data.map((x, id) => {
                    return (
                        <Message
                            key={id}
                            userImage={x.userImage}
                            messageTo={x.messageTo}
                            messageText={x.messageText}
                            messageFirst={x.messageFirst}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default RouteMessageThread;
