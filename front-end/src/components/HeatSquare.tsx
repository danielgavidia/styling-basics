interface iHeatSquare {
    styling: string;
}

const HeatSquare: React.FC<iHeatSquare> = ({ styling }) => {
    return <div className={styling}></div>;
};

export default HeatSquare;
