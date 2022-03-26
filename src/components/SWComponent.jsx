/* eslint-disable react/prop-types */
import React from 'react';
import { useGetCharacterQuery } from 'redux/sw/swSlice';

// eslint-disable-next-line object-curly-newline
export default function SWComponent({ name, getSW, stepNumber }) {
  // React.useEffect(() => {
  //   getSW(stepNumber);
  // }, [stepNumber, getSW]);

  const { data, error, isLoading } = useGetCharacterQuery(stepNumber);
  console.log(data);
  if (isLoading) {
    return <div>Feel the Force...</div>;
  }

  if (error) {
    console.log(error);
    return <div>{JSON.stringify(error)}</div>;
  }

  return <div>{data.name}</div>;
}
