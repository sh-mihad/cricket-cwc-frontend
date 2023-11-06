import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";
import countriesFlagsReducer from "../fetures/countiresFlags/countriesFlags";
import matchFixturesReducer from "../fetures/fixture/fixture";
export default configureStore({
    reducer:{
        countriesFlags : countriesFlagsReducer,
        matchFixtures : matchFixturesReducer,
        [apiSlice.reducerPath]:apiSlice.reducer,
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(apiSlice.middleware)
})