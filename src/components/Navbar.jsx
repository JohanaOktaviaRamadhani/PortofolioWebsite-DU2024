import { X, Menu } from 'lucide-react';
import { useState } from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleNavigate = () => {
        setIsOpen(false);
    };

    const navItem = [
        { label: "Home", route: "/" },
        { label: "About", route: "/about" },
        { label: "Project", route: "/project" },
        { label: "Contact", route: "/contact" },
    ];

    return (
        <nav className="bg-rose-900">
            <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
                {/* NAMA HEADING 1 */}
                <div className="flex items-center">
                    <img
                        src="images/logo.png"
                        alt="Logo"
                        className="h-11 w-11 ml-5"
                    />
                    <h1 className="ml-4 text-white font-bold text-xl">
                        JOHANA OKTAVIA RAMADHANI
                    </h1>
                </div>

                {/* TOMBOL X DAN BURGER */}
                <div
                    className="flex md:hidden items-center cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? (
                        <X className="text-white" size="24" />
                    ) : (
                        <Menu className="text-white" size="24" />
                    )}
                </div>
                
                {/* NAVIGASI */}
                <div className="hidden md:flex space-x-4">
                    {navItem.map((item, index) => (
                        <NavLink
                            key={index}
                            className={( {isActive} )=> isActive ? "text-white border border-transparent px-2 py-1" :"text-white  hover:border-white hover:bg-white hover:text-rose-900 transition duration-300 transform hover:scale-110 px-2 py-1 rounded" }
                            to={item.route}
                        >
                            {item.label}
                        </NavLink>
                    ))}
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden flex flex-col bg-rose-700">
                    {navItem.map((item, index) => (
                        <NavLink
                            href={item.route}
                            key={index}
                            className="text-white hover:text-rose-200 py-2 px-4 hover:border-1-2 border-rose-200"
                            onClick={handleNavigate}
                        >
                            {item.label}
                        </NavLink>
                    ))}
                </div>
            )}


        </nav>
    );
};

export default Navbar;
