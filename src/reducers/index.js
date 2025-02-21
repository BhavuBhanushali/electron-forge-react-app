import { combineReducers } from 'redux'
import { reducer as formReducers } from 'redux-form'
import authReducer from './authReducer'

export const RESET_STATE = 'RESET_STATE';
export const appReducer = combineReducers({
  form: formReducers,
  auth: authReducer,
})

const rootReducers = (state, action) => {
  if (action.type === RESET_STATE) {
    state = undefined;
  }

  return appReducer(state, action)
}


export default rootReducers
