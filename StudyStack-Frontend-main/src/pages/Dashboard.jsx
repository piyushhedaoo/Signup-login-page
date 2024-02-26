import { SectionTitle } from "@/components/SectionTitle";
import { menuItem } from "@/utils";
import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
	return (
		<section className='mx-auto w-[80%] h-screen pt-10'>
			<SectionTitle title='Dashboard' />

			<div className='grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 mt-10'>
				{menuItem.map((item) => {
					const { path, name, icon } = item;
					if (path === "/dashboard") return null;
					return (
						<Link
							to={path}
							key={name}
							className={`bg-white w-28 h-28 sm:w-52 sm:h-30  bg-opacity-30 shadow-lg backdrop-blur-lg  border-opacity-20 border-white rounded-lg border-2 p-4 flex flex-col justify-center items-center`}>
							{icon} {name}
						</Link>
					);
				})}
			</div>
		</section>
	);
};

export default Dashboard;
