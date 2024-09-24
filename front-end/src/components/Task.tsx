interface iTask {
    id: number;
    title: string;
    description: string;
    completion: boolean;
    handleSetTaskComplete: (id: number) => void;
}

const Task: React.FC<iTask> = ({
    id,
    title,
    description,
    completion,
    handleSetTaskComplete,
}) => {
    const stylesCheckbox = completion ? "bg-green-700" : "bg-white";
    const stylesTask = completion ? "bg-green-100" : "bg-white";

    return (
        <div className="p-2">
            <div
                className={
                    "flex flex-row border-2 border-gray rounded-lg p-2 " +
                    stylesTask
                }
            >
                {/* checkbox */}
                <div className="w-20 flex justify-center items-center">
                    <input
                        type="checkbox"
                        className={
                            "appearance-none w-6 h-6 border border-gray-300 rounded-lg " +
                            stylesCheckbox
                        }
                        onChange={() => handleSetTaskComplete(id)}
                    />
                </div>
                {/* body */}
                <div className="basis-5/6">
                    {/* title */}
                    <div className="text-lg font-medium text-black">
                        {title}
                    </div>
                    {/* description */}
                    <div className="text-sm font-light">{description}</div>
                </div>
            </div>
        </div>
    );
};

export default Task;
