const initialState = [];

const UPDATE = 'algorithms-drawer/array/UPDATE';

export function arrayReducer(state = initialState, action) {
  if (action.type === UPDATE) {
    return action.array;
  } else {
    return state;
  }
}

export const update = (array) => ({
  type: UPDATE,
  array
});
