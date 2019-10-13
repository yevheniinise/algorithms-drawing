const UPDATE = 'algorithms-drawer/array/UPDATE';
const INVALIDATE = 'algorithms-drawer/array/INVALIDATE';

const initialState = {
  items: [],
  didInvalidate: false
};

export function arrayReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE:
      return {
        ...state,
        items: action.array,
        didInvalidate: false
      };
    case INVALIDATE:
      return {
        ...state,
        didInvalidate: true
      };
    default:
      return state;
  }
}

export const update = (array) => ({
  type: UPDATE,
  array
});

export const invalidate = () => ({
  type: INVALIDATE
});
