import Post from "../components/Post";
import userImage from "../assets/profile.jpg";
import postImage from "../assets/new-york.jpeg";

const data = [
    {
        userImage: userImage,
        userName: "Daniel",
        postImage: postImage,
        postDescription: "Post description",
        groupName: "Fractal Tech",
        countLikes: 21,
        countComments: 4,
    },
];

const RoutePost = () => {
    return (
        <div id="RoutePost" className="h-screen bg-white flex justify-center">
            <div className="basis-1/2">
                {data.map((x, id) => {
                    return (
                        <Post
                            key={id}
                            userImage={data[0].userImage}
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
