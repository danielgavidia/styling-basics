interface iTask {
    title: string;
    description: string;
    completion: boolean;
    handleSetTaskComplete: () => void;
}

const Task: React.FC<iTask> = ({
    title,
    description,
    completion,
    handleSetTaskComplete,
}) => {
    const checkboxStyles = completion ? "bg-green-700" : "bg-white";

    const taskFalse = "flex flex-row border-2 border-gray rounded-lg p-2";
    const taskTrue =
        "flex flex-row border-2 border-gray rounded-lg p-2 bg-green-100";

    return (
        <div className="p-2">
            <div className={completion ? taskTrue : taskFalse}>
                <div className="w-20 flex justify-center items-center">
                    <input
                        type="checkbox"
                        className={
                            "appearance-none w-6 h-6 border border-gray-300 rounded-lg " +
                            checkboxStyles
                        }
                        // checked={completion}
                        onChange={() => handleSetTaskComplete()}
                    />
                </div>
                <div className="basis-5/6">
                    <div className="text-lg font-medium text-black">
                        {title}
                    </div>
                    <div className="text-sm font-light">{description}</div>
                </div>
            </div>
        </div>
    );
};

export default Task;
