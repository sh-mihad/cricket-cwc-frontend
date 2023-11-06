import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const key = `apikey=cd5cf8cf-7f19-4049-b01b-6ebc10f630db&offset=0`
export const apiSlice = createApi({
    reducerPath:"cricket mania",
    baseQuery: fetchBaseQuery({
        baseUrl:`https://api.cricapi.com/v1`
    }),
    endpoints:(builder)=>({
        getCountriesFlags: builder.query({
            query: () => `/countries?${key}`,
        })
    })
})

export const {useGetCountriesFlagsQuery} = apiSlice