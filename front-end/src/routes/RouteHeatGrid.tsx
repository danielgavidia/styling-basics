import HeatSquare from "../components/HeatSquare";

const getData = () => {
    const arr = [];
    for (let i = 0; i < 35; i++) {
        const random = Math.random();
        const baseStyling = "h-14 w-14";
        if (random <= 0.2) {
            arr.push({ id: i, styling: `${baseStyling} bg-sky-100` });
        } else if (random > 0.2 && random <= 0.4) {
            arr.push({ id: i, styling: `${baseStyling} bg-sky-300` });
        } else if (random > 0.4 && random <= 0.6) {
            arr.push({ id: i, styling: `${baseStyling} bg-sky-500` });
        } else if (random > 0.6 && random <= 0.8) {
            arr.push({ id: i, styling: `${baseStyling} bg-sky-700` });
        } else {
            arr.push({ id: i, styling: `${baseStyling} bg-sky-900` });
        }
    }
    return arr;
};

const days = ["Mon", "Tues", "Web", "Thurs", "Fri", "Sat", "Sun"];

const RouteHeatGrid = () => {
    const data = getData();
    console.log(data);
    return (
        <div
            id="RouteHeatGrid"
            className="h-screen bg-white flex justify-center"
        >
            <div className="py-20">
                <div className="grid grid-cols-7 gap-2 pb-2">
                    {days.map((x, id) => {
                        return (
                            <div
                                key={id}
                                className="flex w-14 justify-center font-medium"
                            >
                                {x}
                            </div>
                        );
                    })}
                </div>
                <div className="grid grid-cols-7 gap-2">
                    {data.map((x, id) => {
                        return <HeatSquare key={id} styling={x.styling} />;
                    })}
                </div>
            </div>
        </div>
    );
};

export default RouteHeatGrid;
