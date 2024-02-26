import { SiAzuredevops, SiSpringboot, SiDotnet } from "react-icons/si";
import { FaNodeJs, FaDatabase, FaThList } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { SiThealgorithms } from "react-icons/si";
import { MdDashboard } from "react-icons/md";
import axios from "axios";
import { FaJava } from "react-icons/fa";

export const menuItem = [
	{
		path: "/dashboard",
		name: "Dashboard",
		icon: <MdDashboard className='min-w-max text-3xl ' />,
	},

	{
		path: "/cpp",
		name: "CPP",
		icon: <TbBrandCpp className='min-w-max text-3xl' />,
	},
	{
		path: "/java",
		name: "JAVA",
		icon: <FaJava className='min-w-max text-3xl' />,
	},
	{
		path: "/wpt",
		name: "Web programming",
		icon: <FaNodeJs className='min-w-max text-3xl' />,
	},
	{
		path: "/database",
		name: "Database",
		icon: <FaDatabase className='min-w-max text-3xl' />,
	},
	{
		path: "/advjava",
		name: "Advance Java",
		icon: <SiSpringboot className='min-w-max text-3xl' />,
	},
	{
		path: "/dsa",
		name: "Data Structure and Algorithem",
		icon: <SiThealgorithms className='min-w-max text-3xl' />,
	},
	{
		path: "/sda",
		name: "SDM",
		icon: <SiAzuredevops className='min-w-max text-3xl' />,
	},
	{
		path: "/dotnet",
		name: "DotNet",
		icon: <SiDotnet className='min-w-max text-3xl' />,
	},
];
const MAIN_URL = "https://student-stack.onrender.com/api/v1/";
export const customFetch = axios.create({
	baseURL: MAIN_URL,
});
