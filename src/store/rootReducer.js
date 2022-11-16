import { combineReducers } from "redux"
import postReducer from "./Post/postSlice"
import commonReducer from "./commonState/commonSlice"

const rootReducer = combineReducers({
  post: postReducer,
  common: commonReducer,
})

export default rootReducer