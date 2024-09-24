interface iTabSelector {
    userId: number;
    userName: string;
    handleSetTab: (userId: number) => void;
}

const TabSelector: React.FC<iTabSelector> = ({
    userId,
    userName,
    handleSetTab,
}) => {
    return (
        <div className="p-2 px-4 font-medium">
            <button onClick={() => handleSetTab(userId)}>{userName}</button>
        </div>
    );
};

export default TabSelector;
