import { Link } from "@tanstack/react-router";

const Navbar = () => {
    return (
        <nav className="bg-green-800 text-white py-4 shadow-lg sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center px-4 md:px-8 lg:px-16">
                {/* Logo */}
                <div className="text-2xl font-bold">
                    EHifz
                </div>

                {/* Navigation Links */}
                <div className="space-x-6 flex">
                    <Link to="/home"
                          className="hover:text-accent transition duration-300 ease-in-out px-2">
                        Home
                    </Link>
                    <Link to="/articles" className="hover:text-accent transition">
                        Articles
                    </Link>
                    <Link to="/about" className="hover:text-accent transition">
                        About
                    </Link>
                    <Link to="/contact" className="hover:text-accent transition">
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
