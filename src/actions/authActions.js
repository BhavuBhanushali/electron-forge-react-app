export const POST_LOG_IN_REQUEST = 'POST_LOGIN_REQUEST'
export const POST_LOG_IN_SUCCESS = 'POST_LOGIN_SUCCESS'
export const POST_LOG_IN_FAILURE = 'POST_LOGIN_FAILURE'


export const GET_LOGIN_SUCCESS = "GET_LOGIN_SUCCESS"

export const postLoginRequest = (credentials) => ({ type: POST_LOG_IN_REQUEST, payload: credentials })
export const postLoginSuccess = (data) => ({ type: POST_LOG_IN_SUCCESS, data })
export const postLoginFailure = (error) => ({ type: POST_LOG_IN_FAILURE, payload: error })