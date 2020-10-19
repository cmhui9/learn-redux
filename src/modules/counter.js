/* 한 파일에 몰아서 작성하는 방법 Ducks 패턴 */

// Actions 액션타입
/* Ducks 패턴은 액션타입 생성할때 문자열 앞에 접두사(ex. 'counter/') 를 붙인다.
다른 모듈과 이름이 중복되지 않기 위해 */
const SET_DIFF = 'counter/SET_DIFF';
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// Action Creators 액션생성함수
export const setDiff = (diff) => ({ type: SET_DIFF, diff });
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

// 리듀서에서 관리할 초기상태
const initialState = {
  number: 0,
  diff: 1,
};

// Reducer
export default function counter(state = initialState, action) {
  switch (action.type) {
    case SET_DIFF:
      return {
        ...state,
        diff: action.diff,
      };
    case INCREASE:
      return {
        ...state,
        number: state.number + state.diff,
      };
    case DECREASE:
      return {
        ...state,
        number: state.number - state.diff,
      };
    default:
      return state;
  }
}
