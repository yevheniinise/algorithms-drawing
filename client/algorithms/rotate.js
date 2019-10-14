import { invalidate, update } from '../store/array';
import { move, setProcessing, resetProcessing, setBlinking, resetBlinking } from '../store/algorithms/rotate';

export function rotate(array, k, dispatch) {
  const result = [...array];
  const length = array.length;
  const rate = k <= length / 2 ? length - k : k;
  if (k > length) {
    k = k % length;
  }

  dispatch(invalidate());
  dispatch(setProcessing());
  for (let i = k, j = 0; i < length; i++, j++) {
    result[i] = array[j];
    setTimeout(() => dispatch(move(j)), 500 * j);
  }
  for (let i = 0, current = 0; i < k; i++, current = length - k + i) {
    current = length - k + i;
    result[i] = array[current];
    setTimeout(() => dispatch(move(current)), 500 * i);
  }
  setTimeout(() => dispatch(setBlinking()), 500 * rate);
  setTimeout(() => dispatch(resetBlinking()), 700 * rate);
  setTimeout(() => dispatch(resetProcessing()), 700 * rate);
  setTimeout(() => dispatch(update(result)), 700 * rate);
}
