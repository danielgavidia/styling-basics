import { useState } from "react";

interface iTaskIndividual {
    title: string;
    description: string;
    completion: boolean;
    handleSetTaskComplete: () => void;
}

const data = [
    {
        title: "Sweep the Kitchen",
        description: "Get under the cabinets, do a good job",
    },
];

const TaskIndividual: React.FC<iTaskIndividual> = ({
    title,
    description,
    completion,
    handleSetTaskComplete,
}) => {
    const checkboxFalse = "w-6 h-6 border-gray-300 rounded-lg";
    const checkboxTrue = "w-6 h-6 border-gray-300 rounded-lg bg-green-700";
    const taskFalse = "flex flex-row border-2 border-gray rounded-lg p-2";
    const taskTrue =
        "flex flex-row border-2 border-gray rounded-lg p-2 bg-green-100";

    return (
        <div className="p-2">
            <div className={completion ? taskTrue : taskFalse}>
                <div className="w-20 flex justify-center items-center">
                    <input
                        type="checkbox"
                        className={completion ? checkboxTrue : checkboxFalse}
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

const Task = () => {
    const [taskComplete, setTaskComplete] = useState<boolean>(false);

    const handleSetTaskComplete = () => {
        setTaskComplete(true);
    };

    console.log(taskComplete);

    return (
        <div id="task" className="">
            <div className="bg-white">
                <div className="text-lg text-black p-2">Task</div>
                <div>
                    {data.map((x, id) => {
                        return (
                            <TaskIndividual
                                key={id}
                                title={x.title}
                                description={x.description}
                                completion={taskComplete}
                                handleSetTaskComplete={handleSetTaskComplete}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Task;
