import React from 'react'
import PropTypes from 'prop-types'
// import { connect } from 'react-redux'
import BasicExample from '../BasicExample/BasicExample'

// import * as actions from '../../actions'

const Counter = (props) => {
  return (
    <div>
      <div>
        <h1>Counter</h1>
        Clicked: {props.counter} times
        {' '}
        <button onClick={props.onIncrement}>
          +
        </button>
        {' '}
        <button onClick={props.onDecrement}>
          -
        </button>
        {' '}
        <button onClick={props.onIncrementIfOdd}>
          Increment if odd
        </button>
        {' '}
        <button onClick={props.onIncrementAsync}>
          Increment after 1 second
        </button>
      </div>
      <hr/>
      <BasicExample/>
    </div>
  )
}

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onIncrementAsync: PropTypes.func.isRequired,
  onIncrementIfOdd: PropTypes.func.isRequired
}


// ==========状态管理交由container处理，UI只负责展现==================================
// // 将state.counter绑定到props的value
// const mapStateToProps = (state) => ({
//   counter: state.counter
// })

// //将action的所有方法绑定到props上
// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     onIncrement: (...args) => dispatch(actions.onIncrement(...args)),
//     onDecrement: (...args) => dispatch(actions.onDecrement(...args)),
//     onIncrementAsync: () => dispatch({ type: 'INCREMENT_ASYNC' }),
//     onIncrementIfOdd: () => dispatch({ type: 'INCREMENT_IF_ODD' })
//   }
// }

// //通过react-redux提供的connect方法将我们需要的state中的数据和actions中的方法绑定到props上
// Counter = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Counter)
// ============================================


export default Counter
