import React from 'react';

import { useGetDataQuery } from 'redux/simpledata/simpledataSlice';
// import { stepNumberSelector } from '../redux/game/selectors';

export default function SimpleData() {
  const { data, error, isLoading } = useGetDataQuery();

  if (isLoading) {
    return <div>Getting simple data...</div>;
  }

  if (error) {
    return <div>{JSON.stringify(error, null, 2)}</div>;
  }

  return (
    <ul>
      {data.map((datum) => (
        <li>{JSON.stringify(datum, null, 2)}</li>
      ))}
    </ul>
  );
}
