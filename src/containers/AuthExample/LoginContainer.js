import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import LoginButton from '../../components/AuthExample/LoginButton'

const authSuccess = () => ({
  type: 'AUTH_SUCCESS'
})

const authFail = () => ({
  type: 'AUTH_FAIL'
})

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    login: () => {
      dispatch(authSuccess())
      dispatch(push('/'))
    }
  }
}

const LoginContainer = connect(
  null,
  mapDispatchToProps
)(LoginButton)

export default LoginContainer