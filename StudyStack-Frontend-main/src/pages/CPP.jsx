import { SectionTitle } from "./../components/SectionTitle";
import { DayCard } from "./../components/DayCard";
import { customFetch } from "../utils";
import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
const url = "/cpp";
export const loader = (store) => async () => {
	const user = store.getState().userState.user;

	const response = await customFetch(url, {
		headers: {
			Authorization: `Bearer ${user.token}`,
		},
	});
	const data = response?.data;
	return { data };
};
const CPP = () => {
	const { data } = useLoaderData();
	const [sortedData, setSortedData] = useState([]);
	useEffect(() => {
		if (data) {
			const sorted = [...data].sort((a, b) => a.day - b.day);
			setSortedData(sorted);
		}
	}, [data]);
	return (
		<section className='mx-auto w-[80%] h-screen pt-10'>
			<SectionTitle title='C++' />

			<div className='grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 mt-10'>
				{sortedData.map((element) => {
					const { _id, day, title, Description } = element;
					return (
						<DayCard
							section={"cpp"}
							key={day}
							_id={_id}
							title={title}
							Description={Description}
						/>
					);
				})}
			</div>
		</section>
	);
};

export default CPP;
