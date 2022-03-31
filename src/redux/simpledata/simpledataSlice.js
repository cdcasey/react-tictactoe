/* eslint-disable no-param-reassign */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { createSelector } from '@reduxjs/toolkit';

export const simpleDataApi = createApi({
  reducerPath: 'simpleDataAPI',
  tagTypes: ['Data'],
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3333' }),
  endpoints: (builder) => ({
    getData: builder.query({
      query: () => '/',
      providesTags: ['Data'],
    }),
    addData: builder.mutation({
      query: (body) => ({
        url: '/',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Data'],
    }),
  }),
});

export const { useGetDataQuery, useAddDataMutation } = simpleDataApi;
