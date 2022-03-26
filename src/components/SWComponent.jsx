/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector } from 'react-redux';
import { useGetCharacterQuery } from 'redux/sw/swSlice';

export default function SWComponent() {
  const stepNumber = useSelector((state) => state.game.stepNumber);
  const { data, error, isLoading } = useGetCharacterQuery(stepNumber);

  if (isLoading) {
    return <div>Feel the Force...</div>;
  }

  if (error) {
    return <div>{JSON.stringify(error, null, 2)}</div>;
  }

  return <div>{data.name}</div>;
}
