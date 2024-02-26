import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../feature/userSlice";
import landingSvg from "../assets/landing_svg.svg";

const Landing = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const user = useSelector((state) => state.userState.user);
	// const username = user.username;
	const handleLogout = () => {
		navigate("/login");
		dispatch(logoutUser({}));
	};

	return (
		<main className='bg-violet-100 h-screen w-screen '>
			<header className='bg-transparent w-screen h-[7%] shadow-xl border-slate-300 border-b-2 py-2 fixed'>
				<div className='flex justify-center align-element items-center sm:justify-end'>
					{user ? (
						<div className='flex gap-x-2 sm:gap-x-8 justify-center items-center'>
							<p className='text-sm sm:text-sm'>Namaste, {user.firstname}</p>
							<button className='' onClick={handleLogout}>
								Logout
							</button>
						</div>
					) : (
						<div className='flex gap-x-6 justify-center items-center'>
							<Link to='/login' className='link link-hover text-xs sm:text-sm'>
								Login
							</Link>
							<Link
								to='/register'
								className='link link-hover text-xs sm:text-sm'>
								Create Account
							</Link>
						</div>
					)}
				</div>
			</header>
			<div className='flex h-full justify-center align-element items-center '>
				{user ? (
					<div className='grid  gap-x-2 grid-row lg:grid-cols-2 sm:gap-x-8 place-items-center'>
						<div className='flex justify-center items-center flex-col gap-5'>
							<h1 className=' text-3xl  text-zinc-600'>
								Welcome to{" "}
								<span className='bg-gradient-to-r from-violet-600 to-zinc-800 bg-clip-text text-transparent text-6xl '>
									Study Stack
								</span>
							</h1>
							<button
								className='text-2xl hover:border-2 hover:border-zinc-400 border-transparent hover:shadow-xl duration-300 rounded-md p-4'
								onClick={() => navigate("/dashboard")}>
								<span className='border-b-2 border-zinc-400 group-hover:border-violet-700'>
									Dashboard
								</span>
							</button>
						</div>

						<div>
							<img src={landingSvg} alt='' />
						</div>
					</div>
				) : (
					<div className='grid  gap-x-2 grid-row lg:grid-cols-2 sm:gap-x-8 place-items-center'>
						<div className='flex justify-center items-center flex-col gap-5'>
							<h1 className=' text-3xl  text-zinc-600'>
								Welcome to{" "}
								<span className='bg-gradient-to-r from-violet-600 to-zinc-800 bg-clip-text text-transparent text-7xl '>
									<span className='hover:animate-pulse'>S</span>tudy{" "}
									<span className='hover:animate-pulse'>S</span>tack
								</span>
							</h1>
							<div className='mt-5'>
								<button
									className='text-2xl hover:border-2 hover:border-zinc-400 border-transparent hover:shadow-xl duration-300 rounded-md py-2 px-8'
									onClick={() => navigate("/login")}>
									<span className='border-b-2 border-zinc-400 group-hover:border-violet-700'>
										Login
									</span>
								</button>
							</div>
						</div>

						<div>
							<img src={landingSvg} alt='' />
						</div>
					</div>
				)}
			</div>
		</main>
	);
};

export default Landing;
