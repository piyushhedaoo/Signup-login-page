import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
	const Error = useRouteError();
	console.log(Error);
	return <section className=' align-element h-screen'></section>;
};

export default Error;
