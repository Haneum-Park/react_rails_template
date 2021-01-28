import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
// import Header from '../common/Header'
// import { AuthProvider } from '../utils/Auth'
import Index from './layout/index'

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={Index} />
      </Switch>
      // <AuthProvider>
      //   {/* <Header history={this.props.history} /> */}
      // </AuthProvider>
    )
  }
}

export default App