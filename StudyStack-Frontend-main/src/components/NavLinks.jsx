import React from "react";
import { menuItem } from "../utils";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavLinks = () => {
	const isSidebarOpen = useSelector((state) => state.userState.isSidebarOpen);

	return (
		<>
			{menuItem.map((item, index) => {
				const { path, name, icon } = item;
				return (
					<li
						key={index}
						className={`nav-item px-2 py-1 text-wrap group hover:bg-violet-500/10 hover:border-slate-300/20 hover:border-2 ${
							isSidebarOpen ? "hover:rounded-sm" : "hover:rounded-full"
						} gap-4`}>
						<Link
							to={path}
							className={`link flex ${
								isSidebarOpen ? "justify-start" : "justify-center"
							} items-center gap-3`}>
							<span className='group-hover:text-violet-700 group-hover:z-10 group-hover:animate-pulse'>
								{icon}
							</span>
							{isSidebarOpen && (
								<span className='group-hover:bg-gradient-to-r group-hover:from-violet-500 group-hover:to-yellow-500 group-hover:text-transparent group-hover:bg-clip-text'>
									{name}
								</span>
							)}
						</Link>
					</li>
				);
			})}
		</>
	);
};

export default NavLinks;
