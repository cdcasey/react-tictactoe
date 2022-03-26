/* eslint-disable react/prop-types */
import React from 'react';

// eslint-disable-next-line object-curly-newline
export default function SWComponent({ name, getSW, stepNumber, error, isLoading }) {
  React.useEffect(() => {
    getSW(stepNumber);
  }, [stepNumber, getSW]);

  if (isLoading) {
    return <div>Feel the Force...</div>;
  }

  if (error) {
    return <div>{error.toString()}</div>;
  }

  return <div>{name}</div>;
}
