import { Outlet } from "@tanstack/react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow container mx-auto py-0 w-full">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
