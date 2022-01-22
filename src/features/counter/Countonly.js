import React from 'react';
import { useSelector } from 'react-redux';
import { selectCount } from './counterSlice';
export function Countonly() {
  const count = useSelector(selectCount);
  return (
    <div>
      GlobalCounter:{count}
    </div>
  );
}
