import { GETPRODUCT, PUTPRODUCT } from './../Action/actionTypes';

const initialState = {
  user: null,

  isLoading: false,
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETPRODUCT:
      return {
        ...state,
        isLoading: true,
      };
    case PUTPRODUCT:
      return {
        ...state,
        isLoading: true,
      };

    default:
      return state;
  }
};
