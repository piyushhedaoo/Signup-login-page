import React from "react";
import { Link } from "react-router-dom";
import videoSvg from "../assets/undraw_video_files_fu10.svg";
import { useSelector } from "react-redux";

export function DayCard({ _id, title, Description, section }) {
	const isSidebarOpen = useSelector((state) => state.userState.isSidebarOpen);
	return (
		<Link
			to={`/${section}/${_id}`}
			className={`bg-white w-28 h-28 sm:w-52 sm:h-30 bg-opacity-30 shadow-lg backdrop-blur-lg  border-opacity-20 border-white rounded-lg border-2 p-4 flex flex-col justify-center items-center`}>
			<img
				src={videoSvg}
				alt={title}
				className='w-8 h-8 md:w-24 lg:w-36 lg:h-36 '
			/>

			<p>{title}</p>
		</Link>
	);
}
