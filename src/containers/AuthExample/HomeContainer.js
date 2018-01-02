import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import HomeButton from '../../components/AuthExample/HomeButton'

const authSuccess = () => ({
  type: 'AUTH_SUCCESS'
})

const authFail = () => ({
  type: 'AUTH_FAIL'
})

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logout: () => {
      dispatch(authFail())
      console.log(push('/login'))
      dispatch(push('/login'))
    }
  }
}

const HomeContainer = connect(
  null, 
  mapDispatchToProps
)(HomeButton)

export default HomeContainer