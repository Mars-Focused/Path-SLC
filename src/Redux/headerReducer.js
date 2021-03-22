//INITIAL STATE
const initialState = {
  Header: true,
};

//ACTION CONSTANTS
const TOGGLE_HEADER = "TOGGLE_HEADER";

//ACTION CREATORS
export function toggleHeader() {
  return {
    type: TOGGLE_HEADER,
  };
}

//REDUCER
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_HEADER:
      return { ...state, header: !state.header };

    default:
      return state;
  }
}
