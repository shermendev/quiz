import { hot } from 'react-hot-loader/root'
import React from 'react'
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '~store/store'
import { Home, Quiz, Result } from '~components'

const App = () => (
  <div className="container-fluid">
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact component={Home} path="/" />
          <Route component={Quiz} path="/quiz" />
          <Route component={Result} path="/result" />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </Provider>
  </div>
)

export default hot(App)
