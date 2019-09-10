import { update } from '../store/array';
import { setCurrent, setHighLighted } from '../store/algorithms/rotate';

export function rotate(array, k, dispatch) {
  const result = [...array];
  const items = array.length;
  if (k > items) {
    k = k & items;
  }
  setTimeout(() => dispatch(setHighLighted(true)), 0);
  for (let i = 0; i < k; i++) {
    result[i] = array[items - k + i];
    setTimeout(() => dispatch(setCurrent(result[i])), 0);
  }
  for (let i = k, j = 0; i < items; i++, j++) {
    result[i] = array[j];
    setTimeout(() => dispatch(setCurrent(result[i])), 0);
  }
  dispatch(update(result));
  setTimeout(() => dispatch(setHighLighted(false)), 0);
  return result;
}
