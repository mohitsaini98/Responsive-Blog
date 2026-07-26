// import React from "react";
// import { NavLink } from "react-router-dom";
// import { assets } from "../../assets/assets";

// const Sidebar = () => {
//   const baseClasses =
//     "flex items-center gap-3 py-4 px-6 text-gray-600 hover:bg-gray-100 hover:text-blue-600 font-medium rounded-lg transition-all duration-200";
//   const activeClasses =
//     "flex items-center gap-3 py-4 px-6 bg-gray-200 text-blue-600 font-semibold rounded-lg shadow-md border-l-4 border-blue-600";

//   return (
//     <div className="w-64 min-h-screen bg-white border-r p-4 flex flex-col gap-2">
//       <NavLink end to="/admin" className={({ isActive }) => (isActive ? activeClasses : baseClasses)}>
//         <img src={assets.home_icon} alt="Dashboard" className="w-5 h-5" />
//         <p>Dashboard</p>
//       </NavLink>

//       <NavLink to="/admin/AddBlog" className={({ isActive }) => (isActive ? activeClasses : baseClasses)}>
//         <img src={assets.add_icon} alt="Add Blogs" className="w-5 h-5" />
//         <p>Add Blogs</p>
//       </NavLink>

//       <NavLink to="/admin/ListBlog" className={({ isActive }) => (isActive ? activeClasses : baseClasses)}>
//         <img src={assets.list_icon} alt="Blogs List" className="w-5 h-5" />
//         <p>Blogs List</p>
//       </NavLink>

//       <NavLink to="/admin/Comments" className={({ isActive }) => (isActive ? activeClasses : baseClasses)}>
//         <img src={assets.comment_icon} alt="Comments" className="w-5 h-5" />
//         <p>Comments</p>
//       </NavLink>
//     </div>
//   );
// };

// export default Sidebar;
