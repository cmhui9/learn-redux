import React from 'react';
import Counter from '../components/Counter';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { increase, decrease, setDiff } from '../modules/counter';

export default function CounterContainer() {
  const { number, diff } = useSelector(
    (state) => ({
      number: state.counter.number,
      diff: state.counter.diff,
    }),
    shallowEqual
    // (left, right) => {
    // return left.diff === right.diff && left.number === right.number;
  );

  const dispatch = useDispatch();

  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onSetDiff = (diff) => dispatch(setDiff(diff));

  return (
    <div>
      <Counter
        number={number}
        diff={diff}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
        onSetDiff={onSetDiff}
      />
    </div>
  );
}
