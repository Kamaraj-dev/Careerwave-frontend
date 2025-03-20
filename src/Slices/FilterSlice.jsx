import { createSlice } from "@reduxjs/toolkit";

const filterSlice=createSlice({
    name:'filter',
    initialState:{},
    reducers:{
        updateFilter: (state, action) => {
            const updatedState = { ...state, ...action.payload }; 
            return updatedState; 
        },
        resetFilter: () => {
            const resetState = {}; 
            return resetState; 
        }
    }
})
export const {updateFilter,resetFilter}=filterSlice.actions;
export default filterSlice.reducer;