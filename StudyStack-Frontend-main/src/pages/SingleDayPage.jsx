import { customFetch } from "@/utils";
import React from "react";
import { useLoaderData } from "react-router-dom";
import YouTube from "react-youtube";

export const loader = async ({ params }) => {
	console.log(params);
	const response = await customFetch(`${params.section}/${params.id}`);
	const data = response?.data;
	return { data };
};

const SingleDayPage = () => {
	const { data } = useLoaderData();
	const { Description, title, videoLink } = data;
	// console.log(videoLink);
	const regExp =
		/^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
	const match = videoLink.match(regExp);
	const contentAfterLive = match ? match[1] : null;
	// console.log(contentAfterLive);

	return (
		<section className='mx-auto h-screen'>
			<h1 className='text-5xl font-bold mt-5'>{title}</h1>
			<div className='w-full mt-10 '>
				<YouTube
					videoId={contentAfterLive}
					opts={{ width: "100%", height: "500px" }}
					onReady={(event) => event.target.pauseVideo()}
				/>
			</div>
			<p className='mt-10 font-mono font-bold'>{Description}</p>
		</section>
	);
};

export default SingleDayPage;
