import React from 'react';

export default function SWComponent({ name, getSW, stepNumber }) {
  React.useEffect(() => {
    getSW(stepNumber);
  }, [stepNumber, getSW]);
  return <div>{name}</div>;
}
