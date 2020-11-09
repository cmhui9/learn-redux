import React from 'react';
import { bindActionCreator, bindActionCreators } from 'redux';
import Counter from '../components/Counter';
import { connect } from 'react-redux';
import { increase, decrease, setDiff } from '../modules/counter';

function CounterContainer({ number, diff, increase, decrease, setDiff }) {
  return (
    <div>
      <Counter
        number={number}
        diff={diff}
        onIncrease={increase}
        onDecrease={decrease}
        onSetDiff={setDiff}
      />
    </div>
  );
}

const mapStateToProps = (state) => ({
  number: state.counter.number,
  diff: state.counter.diff,
});

// bindActionCreator 사용시
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      increase,
      decrease,
      setDiff,
    },
    dispatch
  );
/* mapDispatchToProps가 함수타입이 아닌 객체타입이면 bindActionCreator가 connect내부에서 이루어져있으므로 자동으로 작동
const mapDispatchToProps = (dispatch) =>
  {
    increase,
    decrease,
    setDiff,
  }
*/

/*const mapDispatchToProps = (dispatch) => ({
  onIncrease: () => dispatch(increase()),
  onDecrease: () => dispatch(decrease()),
  onSetDiff: (diff) => dispatch(setDiff(diff)),
});*/

// const enhance = connect(mapStateToProps, mapDispatchProps);
// export default enhance(CounterContainer)
export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
