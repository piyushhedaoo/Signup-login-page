import { useNavigation } from "react-router-dom";

const SubmitBtn = ({ text }) => {
	const navigation = useNavigation();
	const isSubmitting = navigation.state === "submitting";
	return (
		<button
			className='bg-gradient-to-r from-blue-400 to-cyan-200 w-80 font-semibold rounded-full py-2'
			type='submit'
			disabled={isSubmitting}>
			{isSubmitting ? "Sending..." : text || "Submit"}
		</button>
	);
};
export default SubmitBtn;
