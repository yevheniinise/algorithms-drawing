import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import cn from 'classnames';

import { update } from '../store/array';
import { rotate } from '../algorithms/rotate';
import './RotateArray.css';

const SIZE = 100;
const SHIFT = 20;

const Square = ({ item }) => {
  const [current, isHighLighted] = useSelector((state) => [state.rotate.current, state.rotate.isHighLighted]);
  return (
    <span className={cn('square', current === item && isHighLighted && 'square-fade-in')}>
      {item}
    </span>
  );
};

const SquareList = ({ list }) => (
  <div className="square-list">
    {list.map((item) => <Square key={item} item={item} />)}
  </div>
);

const RotateArray = () => {
  const array = useSelector((state) => state.array);
  const dispatch = useDispatch();

  useEffect(() => {
    const array = Array.from(Array(SIZE), (x, i) => i + 1);
    dispatch(update(array));
  }, []);

  function handleClick() {
    rotate(array, SHIFT, dispatch);
  }

  return (
    <div>
      <h3>Rotate Array</h3>
      <SquareList list={array} />
      <button onClick={handleClick}>Rotate</button>
    </div>
  );
};

export default RotateArray;
