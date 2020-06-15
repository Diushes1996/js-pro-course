const initialState = 1;

export const hi = (state = initialState, action) => {
  switch (action.type) {
    case 'HI':
      return state * 2;
    default:
      return state;
  }
};
