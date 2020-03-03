import React from 'react';

export default function SWComponent({ name, getSW, stepNumber }) {
  getSW(stepNumber);
  return <div>{name}</div>;
}
