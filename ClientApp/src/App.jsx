import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import Search from './pages/Search'
import AskQuestion from './pages/AskQuestion'
// import { NotFound } from './pages/NotFound'
import './custom.scss'
export default class App extends Component {
  static displayName = App.name

  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/askquestion" component={AskQuestion} />
          {/* <Route exact path="/typescript" component={HeyWorld} />} */}
          {/* {<Route exact path="*" component={NotFound} /> */}
        </Switch>
      </Layout>
    )
  }
}
