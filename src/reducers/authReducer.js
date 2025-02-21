import { POST_LOG_IN_SUCCESS } from '../actions/authActions';

const authState = {
  isLogin: false,
  user: null,
};

export default (state = authState, { type, data = null }) => {
  switch (type) {
    case POST_LOG_IN_SUCCESS:
      return { ...state, isLogin: true, user: data };
    default:
      return state;
  }
};
