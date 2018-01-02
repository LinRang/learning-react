import { connect } from 'react-redux'
import actions from '../../actions'
import Counter from '../../components/Counter/Counter'

// let App = (props) => {
//   return (
//   <Counter
//     counter={props.counter}
//     onIncrement={props.onIncrement}
//     onDecrement={props.onDecrement}
//     onIncrementIfOdd={props.onIncrementIfOdd}
//     onIncrementAsync={props.onIncrementAsync}
//   />)
// }

// 将state.counter绑定到props的counter
const mapStateToProps = (state) => ({
  value: state.counter,
  location: state.location
})

//将action的所有方法绑定到props上
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onIncrement: (...args) => dispatch(actions.onIncrement(...args)),
    onDecrement: (...args) => dispatch(actions.onDecrement(...args)),
    onIncrementBySaga: () => dispatch({ type: 'INCREMENT' }),
    onDecrementBySaga: () => dispatch({ type: 'DECREMENT' }),
    onIncrementAsync: () => dispatch({ type: 'INCREMENT_ASYNC' }),
    onIncrementIfOdd: () => dispatch({ type: 'INCREMENT_IF_ODD' })
  }
}

//通过react-redux提供的connect方法将我们需要的state中的数据和actions中的方法绑定到props上
const CounterApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

export default CounterApp