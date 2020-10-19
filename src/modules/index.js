// Reducer 두개(counter, todos)를 합쳐주는 index 파일

import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';

// 루트 리듀서 생성
const rootReducer = combineReducers({
  counter,
  todos,
});

export default rootReducer;
