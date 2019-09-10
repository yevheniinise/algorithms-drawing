import { combineReducers } from 'redux';

import { arrayReducer as array } from './array';
import { rotateReducer as rotate } from './algorithms/rotate';

export default combineReducers({
  array,
  rotate
});
