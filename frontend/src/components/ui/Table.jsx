// import React, { useEffect, useState } from "react";
// import API from "../../api/axios";
// import "../../styles/table.css";

// const Table = () => {
//     const [project, setProject] = useState([]);

//     useEffect(() => {
//         fetchProjects();
//     }, []);

//     const fetchProjects = async () =>{
//         try {
//             const response = await API.get("/projects");
//             setProject(response.date)
//         } catch (error){
//             console.error("Error fetching projects:", error);
//         }
//     };

//     return (
//         <div className="container">
//             <h2>Project Table</h2>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>ID</th>
//                         <th>Project Name</th>
//                         <th>Client ID</th>
//                         <th>Budget</th>
//                         <th>Start Date</th>
//                         <th>End Date</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {project.map((project) => (
//                         <tr key={project.project_id}>
//                             <td>{project.project_id}</td>
//                             <td>{project.project_name}</td>
//                             <td>{project.client_id}</td>
//                             <td>{project.budget}</td>
//                             <td>{project.start_date}</td>
//                             <td>{project.end_date}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default Table;

import React, { useEffect, useState } from "react";
import API from "../../api/axios";
import "../../styles/table.css";

const Table = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        try {
            const response = await API.get("/projects");
            console.log(response.data); // should show Array(11)
            setProjects(response.data); // ✅ FIXED (no .projects)
        } catch (error) {
            console.error("Error fetching projects:", error);
        }
    };

    return (
        <div className="container">
            <h2>Project Table</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Project Name</th>
                        <th>Client ID</th>
                        <th>Budget</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                    </tr>
                </thead>
                <tbody>
                    {projects.length > 0 ? (   // ✅ FIXED CONDITION
                        projects.map((project) => (
                            <tr key={project.id}>
                                <td>{project.project_id}</td>
                                <td>{project.project_name}</td>
                                <td>{project.client_id}</td>
                                <td>{project.budget}</td>
                                <td>{project.start_date}</td>
                                <td>{project.end_date}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6">No projects found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Table;