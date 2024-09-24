import { useState } from "react";
import Task from "../components/Task";

const data = [
    {
        title: "Sweep the Kitchen",
        description: "Get under the cabinets, do a good job",
    },
];

const RouteTask = () => {
    const [taskComplete, setTaskComplete] = useState<boolean>(false);

    const handleSetTaskComplete = () => {
        setTaskComplete(true);
    };

    console.log(taskComplete);

    return (
        <div id="RouteTask" className="h-screen">
            <div className="bg-white h-screen">
                <div className="text-lg text-black p-2">Task</div>
                <div>
                    {data.map((x, id) => {
                        return (
                            <Task
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

export default RouteTask;
