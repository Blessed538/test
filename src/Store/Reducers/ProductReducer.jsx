import { GETPRODUCT, PUTPRODUCT, TRL } from './../Action/actionTypes';

const initialState = {
  product: [],
  trl: null,
  isLoading: false,
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETPRODUCT:
      return {
        ...state,
        isLoading: true,
        product: action.payload.data,
      };
    case PUTPRODUCT:
      return {
        ...state,
        isLoading: true,
      };
    case TRL:
      return {
        ...state,
        isLoading: true,
        trl: action.payload.data,
      };

    default:
      return state;
  }
};
