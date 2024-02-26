import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
	About,
	AdvanceJava,
	CPP,
	CoreJava,
	DSA,
	Dashboard,
	Database,
	Dotnet,
	Error,
	HomeLayout,
	Landing,
	Login,
	Register,
	SDM,
	SingleDayPage,
	WPT,
} from "./pages";
// loaders
import { loader as cppLoader } from "./pages/CPP";
import { loader as singlePageLoader } from "./pages/SingleDayPage";
import { loader as coreJavaLoader } from "./pages/CoreJava";
import { loader as advanceJavaLoader } from "./pages/AdvanceJava";
import { loader as dotNetLoader } from "./pages/Dotnet";
import { loader as dsaLoader } from "./pages/DSA";
import { loader as sdmLoader } from "./pages/SDM";
import { loader as databaseLoader } from "./pages/Database";
import { loader as wptLoader } from "./pages/WPT";

// actions
import { actions as registerAction } from "./pages/Register";
import { actions as loginAction } from "./pages/Login";

import ErrorElement from "./components/ErrorElement";
import { store } from "./store";
const router = createBrowserRouter([
	{
		path: "/",
		element: <Landing />,
		errorElement: <Error />,
	},
	{
		path: "/",
		element: <HomeLayout />,
		errorElement: <Error />,
		children: [
			{
				path: "advjava",
				element: <AdvanceJava />,
				loader: advanceJavaLoader(store),
			},
			{
				path: ":section/:id",
				element: <SingleDayPage />,
				loader: singlePageLoader,
				errorElement: <ErrorElement />,
			},
			{
				path: "java",
				element: <CoreJava />,
				loader: coreJavaLoader(store),
			},
			{
				path: "cpp",
				element: <CPP />,
				loader: cppLoader(store),
			},
			{
				path: "about",
				element: <About />,
			},
			{
				path: "dashboard",
				element: <Dashboard />,
			},
			{
				path: "database",
				element: <Database />,
				loader: databaseLoader(store),
			},
			{
				path: "dsa",
				element: <DSA />,
				loader: dsaLoader(store),
			},
			{
				path: "dotnet",
				element: <Dotnet />,
				loader: dotNetLoader(store),
			},
			{
				path: "sda",
				element: <SDM />,
				loader: sdmLoader(store),
			},
			{
				path: "wpt",
				element: <WPT />,
				loader: wptLoader(store),
			},
		],
	},
	{
		path: "/login",
		element: <Login />,
		errorElement: <Error />,
		action: loginAction(store),
	},
	{
		path: "/register",
		element: <Register />,
		errorElement: <Error />,
		action: registerAction,
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
