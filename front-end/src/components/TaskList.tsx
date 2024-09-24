import React from "react";
import { useState } from "react";
import Task from "../components/Task";

interface task {
    id: number;
    title: string;
    description: string;
    completion: boolean;
}

interface iTaskList {
    data: task[];
}

const TaskList: React.FC<iTaskList> = ({ data }) => {
    const [tasks, setTasks] = useState<task[]>(data);

    const handleSetTaskComplete = (id: number): void => {
        const task = tasks.filter((x) => x.id === id)[0];
        const taskFinal = { ...task, completion: !task.completion };
        const newTasks = tasks.map((x) => {
            if (x.id === id) {
                return taskFinal;
            } else {
                return x;
            }
        });
        const newTasksSorted = newTasks.sort((a, b) => {
            return a.completion === b.completion ? 0 : a.completion ? -1 : 1;
        });
        setTasks(newTasksSorted);
    };

    console.log(tasks);

    return (
        <div className="bg-white h-screen">
            <div>
                {tasks.map((x, id) => {
                    return (
                        <Task
                            key={id}
                            id={x.id}
                            title={x.title}
                            description={x.description}
                            completion={x.completion}
                            handleSetTaskComplete={handleSetTaskComplete}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default TaskList;
