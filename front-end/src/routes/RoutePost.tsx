import Post from "../components/Post";
import dataPost from "../data/dataPost";

const RoutePost = () => {
    return (
        <div id="RoutePost" className="h-screen bg-white flex justify-center">
            <div className="basis-1/2">
                {dataPost.map((x, id) => {
                    return (
                        <Post
                            key={id}
                            userImage={x.userImage}
                            userName={x.userName}
                            postImage={x.postImage}
                            postDescription={x.postDescription}
                            groupName={x.groupName}
                            countLikes={x.countLikes}
                            countComments={x.countComments}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default RoutePost;
