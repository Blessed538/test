import { GETPRODUCT, PUTPRODUCT } from './actionTypes';
import { config } from './../../Utils/ApiRequest';
import axios from 'axios';

export const GetProduct = (id) => (dispatch) => {
  axios.get(`${config.fetchUrl}/products/${id}`).then((res) => {
    console.log(res);
    dispatch({ type: GETPRODUCT, payload: res.data });
  });
};

export const ProductUpdate = (id) => (dispatch) => {
  axios.put(`${config.fetchUrl}/products/${id}`).then((res) => {
    console.log(res);
    return dispatch({ type: PUTPRODUCT, payload: res.data });
  });

  // .catch(err => {
  // dispatch(returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL'));
  //   dispatch({
  //     type:REGISTER_FAIL
  //   })
  // })
};

// export const getAllProducts = (id) => async (dispatch) => {
//   try {
//     const res = await config.fetchUrl('/jobs/all/get');
//     if (res) {
//       const { data } = res;
//       dispatch({
//         type: GETPRODUCT,
//         payload: data,
//       });
//     }
//     cb();
//   } catch (error) {
//     dispatch(
//       showFeedback(
//         error &&
//           error.response &&
//           error.response.data &&
//           error.response.data.message
//           ? error.response.data.message
//           : 'Error in connection',
//         'error'
//       )
//     );
//     cb();
//   }
// };
