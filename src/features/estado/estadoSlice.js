import { createSlice } from "@reduxjs/toolkit";

export const estadoSlice = createSlice({
	name: "estado",
	initialState: {
		value: true,
	},
	reducers: {
		click: (state) => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes.
			// Also, no return statement is required from these functions.
			state.value = !state.value;
		},
	},
});

// Action creators are generated for each case reducer function
export const { click, status } = estadoSlice.actions;

export default estadoSlice.reducer;
