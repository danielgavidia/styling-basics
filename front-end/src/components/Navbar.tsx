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
                <a className="text-xl p-2 py-4 text-secondary-content">
                    Styling Basics
                </a>
            </div>
            <div className="flex-none">
                <ul className="flex">
                    {navbarButtons.map((x, id) => {
                        return (
                            <li key={id} className="text-sm py-4 px-2">
                                <a
                                    href={x.path}
                                    className="text-secondary-content p-4 rounded-lg hover:bg-primary"
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
