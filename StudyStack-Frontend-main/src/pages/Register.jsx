import React from "react";
import { Form, Link, redirect } from "react-router-dom";
import FormInput from "../components/FormInput";
import SubmitBtn from "../components/SubmitBtn";
import { customFetch } from "../utils/index";
import { toast } from "react-toastify";

export const actions = async ({ request }) => {
	// return null;
	const formData = await request.formData();
	const data = Object.fromEntries(formData);

	try {
		const response = await customFetch.post("user/register", data);
		console.log(response);
		toast.success("Register Successfully 🧑🏻‍💻...");
		return redirect("/login");
	} catch (error) {
		const errorMassage =
			error?.response?.data?.error?.message ||
			"Please Check your Credentials 📝";
		toast.error(errorMassage);
		return null;
	}
};
const Register = () => {
	return (
		<section className='grid h-screen place-items-center'>
			<Form
				method='post'
				className='card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4'>
				<h4 className='text-3xl text-center font-bold'>Register</h4>
				<FormInput label={"PRN no."} name={"prnno"} type={"text"} />
				<FormInput label={"Email"} name={"email"} type={"email"} />
				<FormInput label={"Password"} name={"password"} type={"password"} />
				<FormInput label={"First name"} name={"firstname"} type={"text"} />
				<FormInput label={"Last name"} name={"lastname"} type={"text"} />
				<div className='mt-4'>
					<SubmitBtn text={"Register"} />
				</div>
				<p className='text-center  '>
					{" "}
					Already have an account?{" "}
					<Link
						to='/login'
						className='link  link-hover ml-2 link-primary capitalize'>
						Login
					</Link>
				</p>
			</Form>
		</section>
	);
};

export default Register;
