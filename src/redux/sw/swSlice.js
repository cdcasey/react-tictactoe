/* eslint-disable no-param-reassign */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { createSelector } from '@reduxjs/toolkit';

export const swApi = createApi({
  reducerPath: 'swApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api/' }),
  endpoints: (builder) => ({
    getCharacter: builder.query({
      query: (characterId) => `people/${characterId}/`,
    }),
  }),
});

// export const selectCharacterResult = swApi.endpoints.getCharacter.select();
// export const selectCharacter = createSelector(
//   selectCharacterResult,
//   (characterResult) => characterResult,
// );

export const { useGetCharacterQuery } = swApi;
