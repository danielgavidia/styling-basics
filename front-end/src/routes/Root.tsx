import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <a href="/task">Task</a>
                    </li>
                    <li>
                        <a href="/taskList">Task List</a>
                    </li>
                </ul>
            </nav>
            <div id="detail">
                <Outlet />
            </div>
        </>
    );
};

export default Root;
