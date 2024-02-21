import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
    name: "filters",
    initialState: {
        name: "",
    },
    reducers: {
        getFilter(state, action) {
            state.name = action.payload;
        },
    },
});

export const { getFilter } = filtersSlice.actions;

export default filtersSlice.reducer;