import React, { useEffect, useState, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import cn from 'classnames';

import { update } from '../store/array';
import { rotate } from '../algorithms/rotate';
import './RotateArray.css';

const SIZE = 10;

const Square = ({ children, index, shift }) => {
  const [processing, moved, blinking, didInvalidate] = useSelector(
    (state) => [state.rotate.processing, state.rotate.moved, state.rotate.blinking, state.array.didInvalidate]);
  const toLeft = SIZE - shift - 1 < index;
  const styleProps = {
    transform: `translateX(${(toLeft ? -(SIZE - shift) : shift) * 100}%)`,
    backgroundColor: processing ? (toLeft ? '#ddebff' : '#eef5ff') : '#73abff',
    zIndex: toLeft ? 0 : 2
  };
  const style = moved[index] ? styleProps : null;

  return (
    <span style={didInvalidate ? style : null} className={cn('square', blinking && 'square-blinking')}>
      {children}
    </span>
  );
};

const RotateArray = () => {
  const [shift, setShift] = useState(0);
  const array = useSelector((state) => state.array.items);
  const dispatch = useDispatch();

  useEffect(() => {
    const array = Array.from(Array(SIZE), (x, i) => i + 1);
    dispatch(update(array));
  }, []);

  function handleClick() {
    rotate(array, shift, dispatch);
  }

  return (
    <Fragment>
      <InputGroup>
        <FormControl
          type="number"
          value={shift} onChange={(e) => setShift(e.target.value)}
          placeholder="Indexes to shift"
        />
        <InputGroup.Append>
          <Button variant="outline-secondary" onClick={handleClick}>Rotate</Button>
        </InputGroup.Append>
      </InputGroup>
      <div className="square-list">
        {array.map((item, index) => <Square key={item} shift={shift} index={index}>{item}</Square>)}
      </div>
    </Fragment>
  );
};

export default RotateArray;
