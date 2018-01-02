import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import { connect } from 'react-redux'

// import * as actions from '../../actions'

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    }
  }
  
  onIncrementByState() {
    const value = this.state.value
    this.setState({
      value: value + 1
    })
  }

  onDecrementByState() {
    const value = this.state.value
    this.setState({
      value: value - 1
    })
  }

  render() {
    return (
      <div>
        <div>
          <h1>Counter</h1>
          <b>Clicked: {this.state.value} times</b>
          <br/>
          {'通过组件内部状态setState修改值：'}<br/>
          <button onClick={() => this.onIncrementByState()}>
          +
          </button>
          <button onClick={() => this.onDecrementByState()}>
          -
          </button>
          <br/><br/>

          <b>Clicked: {this.props.value} times</b>
          <br/>
          {'通过redux中，一般的dispatch action：'}<br/>
          {' '}
          <button onClick={this.props.onIncrement}>
            +
          </button>
          {' '}
          <button onClick={this.props.onDecrement}>
            -
          </button>
          <br/>

          {'通过redux，以及redux-saga来实现：'}<br/>
          <button onClick={this.props.onIncrementBySaga}>
            +
          </button>
          {' '}
          <button onClick={this.props.onDecrementBySaga}>
            -
          </button>
          {' '}
          <button onClick={this.props.onIncrementIfOdd}>
            Increment if odd
          </button>
          {' '}
          <button onClick={this.props.onIncrementAsync}>
            Increment after 1 second
          </button>
          <br/>
        </div>
        <hr/>
      </div>
    )
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
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
