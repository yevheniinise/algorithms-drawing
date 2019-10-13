const MOVE = 'algorithms-drawer/rotate/MOVE';
const SET_PROCESSING = 'algorithms-drawer/rotate/SET_PROCESSING';
const RESET_PROCESSING = 'algorithms-drawer/rotate/RESET_PROCESSING';
const SET_BLINKING = 'algorithms-drawer/rotate/SET_BLINKING';
const RESET_BLINKING = 'algorithms-drawer/rotate/RESET_BLINKING';

const initialState = {
  processing: false,
  moved: {
    0: false,
    1: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false
  },
  blinking: false
};

export const rotateReducer = (state = initialState, action) => {
  switch (action.type) {
    case MOVE:
      return {
        ...state,
        moved: { ...state.moved, [action.index]: true }
      };
    case SET_PROCESSING:
      return {
        ...state,
        processing: true
      };
    case RESET_PROCESSING:
      return initialState;
    case SET_BLINKING:
      return {
        ...state,
        blinking: true
      };
    case RESET_BLINKING:
      return {
        ...state,
        blinking: false
      };
    default:
      return state;
  }
};

export const move = (index) => ({
  type: MOVE,
  index
});

export const setProcessing = () => ({
  type: SET_PROCESSING
});

export const resetProcessing = () => ({
  type: RESET_PROCESSING
});

export const setBlinking = () => ({
  type: SET_BLINKING
});

export const resetBlinking = () => ({
  type: RESET_BLINKING
});
