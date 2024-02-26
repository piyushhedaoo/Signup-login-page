import { loginUser } from "../feature/userSlice";
import { customFetch } from "../utils";
import React from "react";
import { Form, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { redirect } from "react-router-dom";
import { toast } from "react-toastify";
import SubmitBtn from "../components/SubmitBtn";
import FormInput from "../components/FormInput";

export const actions =
	(store) =>
	async ({ request }) => {
		const formData = await request.formData();
		const data = Object.fromEntries(formData);
		try {
			const response = await customFetch.post("/user/login", data);
			console.log(response);
			store.dispatch(loginUser(response.data));
			toast.success("Login Successfully 🧑🏻‍💻✌︎...");
			return redirect("/dashboard");
		} catch (error) {
			const errorMassage =
				error?.response?.data?.error?.message ||
				"Please Check your Credentials 📝";
			toast.error(errorMassage);
			return null;
		}
	};

function Login() {
	const dispatch = useDispatch();
	return (
		<section className='grid h-screen place-items-center'>
			<Form
				method='post'
				className='card w-96 p-8 shadow-xl flex flex-col gap-y-4'>
				<h4 className='text-3xl text-center font-bold'>Login</h4>
				<FormInput label={"Enter PRN no."} name={"prnno"} type={"text"} />
				<FormInput label={"Password"} name={"password"} type={"password"} />
				<div className='mt-4'>
					<SubmitBtn text={"Login"} />
				</div>
				<p className='text-center  '>
					{" "}
					Don't have an account?{" "}
					<Link
						to='/register'
						className='link  link-hover ml-2 link-primary capitalize'>
						Register
					</Link>
				</p>
			</Form>
		</section>
	);
}

export default Login;
