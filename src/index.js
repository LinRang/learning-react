import React from 'react'
import ReactDOM from 'react-dom'
import {
  // Router,
  Route,
  Switch
} from 'react-router-dom'
import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'
import { 
  ConnectedRouter, 
  routerReducer as routing, 
  routerMiddleware 
} from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import reducers from './reducers'
import rootSaga from './sagas'
import App from './containers/App'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware()
const history = createHistory()
const store = createStore(
  combineReducers({
    ...reducers,
    routing
  }),
  composeEnhancers(
    applyMiddleware(sagaMiddleware, routerMiddleware(history))
  )
)
sagaMiddleware.run(rootSaga)


// // ============没有使用Provider的时候，需要手动向子组件传递store=================================
// const render = () => ReactDOM.render(
//     <Counter
//       counter={store.getState().counter}
//       onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
//       onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
//       onIncrementIfOdd={()=> store.dispatch({ type: 'INCREMENT_IF_ODD' })}
//       onIncrementAsync={() => store.dispatch({ type: 'INCREMENT_ASYNC' })}
//     />,
//   document.getElementById('root')
// )
// render()  // 初始渲染
// store.subscribe(render) // 当store中state发生变化之后，自动执行render函数
// // =============================================

// ========使用Provider之后，子组件就可以通过connect去绑定store的内容=====================================
// ========并且store内state发生变化之后，自动渲染，而不需要手动通过store.subscribe去监听render函数=====================================
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" component={App}/>
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)