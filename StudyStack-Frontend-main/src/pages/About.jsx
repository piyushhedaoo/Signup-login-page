import React from "react";
import { useSelector } from "react-redux";

const About = () => {
	const user = useSelector((state) => state.userState.user);
	return (
		<div className='flex flex-col items-center justify-center h-screen'>
			{/* Centered Photo */}
			<img
				src='https://cdn-icons-png.flaticon.com/512/149/149071.png'
				alt='Your Photo'
				className='rounded-full w-32 h-32 mb-4'
			/>

			<div className='grid  gap-4 mb-4'>
				<div className=''>
					<h4 className='font-bold'>
						Name:{" "}
						<span className=' font-normal capitalize'>
							{user.firstname} {user.lastname}
						</span>
					</h4>
				</div>

				<div className='mr-8'>
					<h4 className='font-bold'>
						PRN Number: <span className=' font-normal '> {user.prnno}</span>
					</h4>
				</div>

				<div>
					<p className='font-bold'>
						Email: <span className=' font-normal'> {user.email}</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
