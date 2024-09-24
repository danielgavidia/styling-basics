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
                    <li>
                        <a href="/messageThread">Message Thread</a>
                    </li>
                    <li>
                        <a href="/post">Post</a>
                    </li>
                    <li>
                        <a href="/heatGrid">Heat Grid</a>
                    </li>
                    <li>
                        <a href="/tabDescriptor">Tab Descriptor</a>
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
