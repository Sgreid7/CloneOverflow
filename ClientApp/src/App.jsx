import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import './custom.scss'
export default class App extends Component {
  static displayName = App.name

  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/questions" component={Questions} />
          <Route exact path="/typescript" component={HeyWorld} />
          <Route exact path="*" component={NotFound} />
        </Switch>
      </Layout>
    )
  }
}
