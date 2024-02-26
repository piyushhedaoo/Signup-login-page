import ErrorElement from "@/components/ErrorElement";
import Loader from "@/components/Loader";
import Sidebar from "@/components/Sidebar";
import { useSelector } from "react-redux";
import { Outlet, useNavigation } from "react-router-dom";
const HomeLayout = () => {
	const navigation = useNavigation();
	const isLoading = navigation.state === "loading";
	const user = useSelector((state) => state.userState.user);
	{
		return user ? (
			<div className='w-screen bg-violet-100 flex gap-1 md:gap-2'>
				<Sidebar />
				{isLoading ? (
					<Loader />
				) : (
					<main className='max-w-5xl ml-5  mx-auto flex-1'>
						<Outlet />
					</main>
				)}
			</div>
		) : (
			<ErrorElement />
		);
	}
};

export default HomeLayout;
