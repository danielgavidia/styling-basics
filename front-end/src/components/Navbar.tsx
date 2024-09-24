interface navbarButton {
    path: string;
    name: string;
}

interface iNavbar {
    navbarButtons: navbarButton[];
}

const Navbar: React.FC<iNavbar> = ({ navbarButtons }) => {
    return (
        <div className="flex sticky top-0 z-50 justify-between bg-neutral p-2">
            <div className="flex">
                <a className="text-xl p-2 text-secondary-content">
                    Styling Basics
                </a>
            </div>
            <div className="flex-none">
                <ul className="flex">
                    {navbarButtons.map((x, id) => {
                        return (
                            <li key={id} className="p-2 text-sm px-4">
                                <a
                                    href={x.path}
                                    className="text-secondary-content"
                                >
                                    {x.name}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
