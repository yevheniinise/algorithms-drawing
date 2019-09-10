const SET_CURRENT = 'algorithms-drawer/rotate/SET_CURRENT';
const SET_HIGHLIGHTED = 'algorithms-drawer/rotate/SET_HIGHLIGHTED';

const initialState = {
  current: -1,
  isHighLighted: false
};

export const rotateReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT:
      return {
        ...state,
        current: action.id
      };
    case SET_HIGHLIGHTED:
      return {
        ...state,
        isHighLighted: action.state
      };
    default:
      return state;
  }
};

export const setCurrent = (id) => ({
  type: SET_CURRENT,
  id
});

export const setHighLighted = (state) => ({
  type: SET_HIGHLIGHTED,
  state
});
