import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    flags :[]
}

export const countriesFlags = createSlice({
    name : "countriesFlags",
    initialState,
    reducers:{
        addCountriesFlags : (state,action)=>{
            state.flags = action.payload
        }
    }
})

export const {addCountriesFlags} = countriesFlags.actions;
export default countriesFlags.reducer;