import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from '../../assets/assets';

const Sidebar = () => {
    return (
        <div className="">
            <NavLink end = {true} to = '/admin' className = {({isActive}) => isActive ? ` flex items-center gap-3 py-4 px-6 bg-gray-200 text-blue-600 font-medium rounded-lg ${isActive ? 'active' : ''}` : `flex items-center gap-3 py-4 px-6 text-gray-600 hover:bg-gray-100 hover:text-blue-600 font-medium rounded-lg`}>
                <img src="{assets.home_icon}" alt="" className="" />
                <p className="">Dashboard</p>
            </NavLink>

            <NavLink  to = '/admin/AddBlog' className = {({isActive}) => isActive ? ` flex items-center gap-3 py-4 px-6 bg-gray-200 text-blue-600 font-medium rounded-lg ${isActive ? 'active' : ''}` : `flex items-center gap-3 py-4 px-6 text-gray-600 hover:bg-gray-100 hover:text-blue-600 font-medium rounded-lg`}>
                <img src="{assets.add_icon}" alt="" className="" />
                <p className="">Add Blogs</p>
            </NavLink>

            <NavLink  to = '/admin/ListBlog' className = {({isActive}) => isActive ? ` flex items-center gap-3 py-4 px-6 bg-gray-200 text-blue-600 font-medium rounded-lg ${isActive ? 'active' : ''}` : `flex items-center gap-3 py-4 px-6 text-gray-600 hover:bg-gray-100 hover:text-blue-600 font-medium rounded-lg`}>
                <img src="{assets.list_icon}" alt="" className="" />
                <p className="">Blogs Lists</p>
            </NavLink>

            <NavLink  to = '/admin/Comments' className = {({isActive}) => isActive ? ` flex items-center gap-3 py-4 px-6 bg-gray-200 text-blue-600 font-medium rounded-lg ${isActive ? 'active' : ''}` : `flex items-center gap-3 py-4 px-6 text-gray-600 hover:bg-gray-100 hover:text-blue-600 font-medium rounded-lg`}>
                <img src="{assets.comment_icon}" alt="" className="" />
                <p className="">Comments</p>
            </NavLink>
        </div>

    );
};

export default Sidebar;