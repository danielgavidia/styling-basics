import TaskList from "../components/TaskList";
import dataTaskList from "../data/dataTaskList";

const RTaskList = () => {
    return (
        <div id="RTaskList">
            <TaskList data={dataTaskList} />
        </div>
    );
};

export default RTaskList;
