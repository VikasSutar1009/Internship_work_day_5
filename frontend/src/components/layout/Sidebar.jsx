import "../../styles/sidebar.css";

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <h2 className="logo">Dashboard</h2>
            <ul>
                <li>Home</li>
                <li>Users</li>
                <li>Settings</li>
                <li>Logout</li>
            </ul>
        </aside>
    );
};

export default Sidebar;