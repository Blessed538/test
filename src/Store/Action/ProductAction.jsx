import { GETPRODUCT, PUTPRODUCT } from './actionTypes';
import { config } from './../../Utils/ApiRequest';

export const getAllProducts = (id) => async (dispatch) => {
  try {
    const res = await config.fetchUrl('/jobs/all/get');
    if (res) {
      const { data } = res;
      dispatch({
        type: GETPRODUCT,
        payload: data,
      });
    }
    cb();
  } catch (error) {
    dispatch(
      showFeedback(
        error &&
          error.response &&
          error.response.data &&
          error.response.data.message
          ? error.response.data.message
          : 'Error in connection',
        'error'
      )
    );
    cb();
  }
};
