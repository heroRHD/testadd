import React, { PureComponent } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Frame } from './components'
import { adminroutes } from './router'

export default class App extends PureComponent {
  render() {
    console.log(this.props)
    return (
      <Frame>
        <Switch>
          {
            adminroutes.map(route => {
              return (
                <Route
                  key={route.pathname}
                  path={route.pathname}
                  component={route.component}
                  exact
                />
              )
            })
          }
          <Redirect to='/404' />
        </Switch>
      </Frame>
    )
  }
}