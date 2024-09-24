import TaskList from "../components/TaskList";
import dataTask from "../data/dataTask";

const RouteTask = () => {
    return (
        <div id="RouteTask" className="h-screen">
            <TaskList data={dataTask} />
        </div>
    );
};

export default RouteTask;
