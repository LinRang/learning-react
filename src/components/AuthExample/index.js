import React from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import LoginContainer from '../../containers/AuthExample/LoginContainer'
import HomeContainer from '../../containers/AuthExample/HomeContainer'
import PrivateRouteContainer from '../../containers/AuthExample/PrivateRouteContainer'


const AuthExample = () => {
  return (
    <div>
      <h1>AuthExample  react-router-redux</h1>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
      <Switch>
        <Route exact path="/login" component={LoginContainer} />
        <PrivateRouteContainer exact path="/home" component={HomeContainer} />
      </Switch>
      <hr/>
    </div>
  )
}
export default AuthExample