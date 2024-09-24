import TaskList from "../components/TaskList";

const data = [
    {
        id: 1,
        title: "Sweep the Kitchen",
        description: "Get under the cabinets, do a good job",
        completion: false,
    },
];

const RouteTask = () => {
    return (
        <div id="RouteTask" className="h-screen">
            <TaskList data={data} />
        </div>
    );
};

export default RouteTask;
