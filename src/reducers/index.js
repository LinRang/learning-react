// import { combineReducers } from 'redux'

import counter from './counter'
import authReducer from './authReducer'
import todos from './todos/todos'
import visibilityFilter from './todos/visibilityFilter'

// const reducer = combineReducers({
//   counter
// })

const reducer={
  counter,
  todos,
  visibilityFilter,
  authReducer
}

export default reducer

