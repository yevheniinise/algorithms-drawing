import React, { useEffect, useState, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import cn from 'classnames';

import { update } from '../store/array';
import { rotate } from '../algorithms/rotate';
import './RotateArray.css';

const SIZE = 10;
const COLOR = {
  0: '#73abff',
  1: '#ddebff',
  2: '#eef5ff'
};
const getInlineStyles = (processing, shift, current) => {
  const left = SIZE - shift - 1 < current;
  return {
    transform: `translateX(${(left ? -(SIZE - shift) : shift) * 100}%)`,
    backgroundColor: processing ? (left ? COLOR[1] : COLOR[2]) : COLOR[0],
    zIndex: left ? 0 : 2
  }
};

const Square = ({ children, shift, index }) => {
  const { processing, blinking, moved } = useSelector((state) => state.rotate);
  const didInvalidate = useSelector((state) => state.array.didInvalidate);

  const styleProps = getInlineStyles(processing, shift, index);
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
