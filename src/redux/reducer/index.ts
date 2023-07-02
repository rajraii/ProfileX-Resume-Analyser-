import { combineReducers } from 'redux'
import commonReducer from './common.reducer'
import userReducer from './user.reducer'


const rootReducer = combineReducers({
  common: commonReducer,
  user: userReducer,
})

export default rootReducer