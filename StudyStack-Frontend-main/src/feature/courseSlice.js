import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const defaultState = {
	isloading:true,
};

const courseSlice = createSlice({
	name: "cource",
	initialState: defaultState,
	reducers: {
		
	},
});
export const {} = courseSlice.actions;
export default courseSlice.reducer;
