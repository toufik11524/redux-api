import { combineReducers } from "redux"
import postReducer from "./Post/postSlice"

const rootReducer = combineReducers({
  post: postReducer,
})

export default rootReducer