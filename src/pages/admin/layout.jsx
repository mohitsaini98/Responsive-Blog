// import React from "react";
// import { assets } from '../../assets/assets';
// import { Outlet, useNavigate } from "react-router-dom";
// import Sidebar from "../../components/admin/Sidebar";
// // const assets = assets;


// const Layout = () => {

//     const navigate = useNavigate();
//     const logout = () => {
//         // Clear user session or token here
//         // Redirect to login page
//         navigate('/login');
//     }
//     return (
//         <>
//             <div className="">
//                 <img src={assets.logo} alt="logo"  className=""  onClick={()=> navigate ('/')}/>
//                 <button onClick={logout} className="">Logout</button>
//             </div>
            
//             <div>
//                 <Sidebar />
//                 <Outlet/>
//             </div>
//         </>
//     );
// };

// export default Layout;