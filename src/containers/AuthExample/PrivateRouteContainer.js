import { connect } from 'react-redux'
import PrivateRoute from '../../components/AuthExample/PrivateRoute'

const mapSateToProps = (state, ownProps) => {
  return {
    isAuthenticated: state.authReducer.isAuthenticated
  }
}

const PrivateRouteContainer = connect(
  mapSateToProps
)(PrivateRoute)

export default PrivateRouteContainer