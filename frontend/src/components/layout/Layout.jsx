import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Dashboard from "../../pages/Dashboard";
import "../../styles/layout.css";

const Layout = () => {
    return (
        <div className="layout">
            <Sidebar/>
            <div className="main">
                <Navbar/>
                <Dashboard/>
            </div>
        </div>
    );
};

export default Layout;