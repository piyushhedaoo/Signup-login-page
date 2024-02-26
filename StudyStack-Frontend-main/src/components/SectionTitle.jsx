import React from "react";
export function SectionTitle({ title }) {
	return (
		<div className='w-full h-1/6 bg-gradient-to-r from-fuchsia-50 to-indigo-300 border-b-2  border-t-lime-200  text-zinc-700 flex pl-5 justify-start rounded-md items-center '>
			<h1 className='text-3xl font-bold my-10 '>{title}</h1>
		</div>
	);
}
