import React from 'react';

export default function SWComponent({
  name,
  getSW,
  stepNumber,
  error,
  isLoading
}) {
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
