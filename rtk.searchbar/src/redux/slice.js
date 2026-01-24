import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({

    name: "cricketerList",
    initialState: {
        list: [
            "Harmanpreet Kaur",
            "Smriti Mandhana",
            "Deepti Sharma",
            "Mithali Raj",
            "Shafali Verma",
            "Jemimah Rodrigues",
            "Harleen Deol",
            "Amanjot Kaur"
        ],
        searchTerm: ""
    },


    reducers: {
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload
        }

    }

})


export const{ setSearchTerm } = slice.actions
export default slice.reducer

// setSearchTerm provides the user input to Redux.
// slice.reducer exports the reducer logic to the store so it knows how to update the state.