import React from 'react';
import TargetCursor from '@site/src/components/TargetCursor';

export default function Root({ children }) {
  return (
    <>
      <TargetCursor targetSelector=".cursor-target, a, button" />
      {children}
    </>
  );
}
