/* eslint-disable no-param-reassign */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const swApi = createApi({
  reducerPath: 'swApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api/' }),
  endpoints: (builder) => ({
    getCharacter: builder.query({
      query: (characterId) => `people/${characterId}/`,
    }),
  }),
});

export const { useGetCharacterQuery } = swApi;
