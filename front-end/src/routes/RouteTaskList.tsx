import TaskList from "../components/TaskList";

const data = [
    {
        id: 0,
        title: "Dishwashing",
        description: "Wash and dry dishes, pots, pans, and utensils",
        completion: false,
    },
    {
        id: 1,
        title: "Laundry",
        description: "Wash, dry, fold, and put away clothes and linens",
        completion: false,
    },
    {
        id: 2,
        title: "Vacuuming",
        description: "Vacuum carpets, rugs, and floors throughout the house",
        completion: false,
    },
    {
        id: 3,
        title: "Dusting",
        description: "Dust furniture, shelves, and other surfaces",
        completion: false,
    },
];

const RTaskList = () => {
    return (
        <div id="RTaskList">
            <TaskList data={data} />
        </div>
    );
};

export default RTaskList;
