import React, {Fragment} from 'react'
import ReactDOM from 'react-dom'
import {
  NavLink,
  Link,
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'

import FeedPage from './components/FeedPage'
import DraftsPage from './components/DraftsPage'
import CreatePage from './components/CreatePage'
import DetailPage from './components/DetailPage'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Paper from 'material-ui/Paper'
import FlatButton from 'material-ui/FlatButton'

import 'tachyons'
import './index.css'

const client = new ApolloClient({ uri: 'http://localhost:4000' })



ReactDOM.render(
<MuiThemeProvider>
      <Paper>
        <div className="flex-container">
          <img className="logo" src="https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/27750040_2000128646901926_440235267098892687_n.jpg?_nc_cat=0&_nc_eui2=v1%3AAeEHCEYFDxyNBTFdyGHoTbG_-rQvMVCAzwBAABuS__VLvjINhk3Y7pHZJHiqskHOvx7I8gncD-bfJQRMM-ejgHncONa4wXWl3hNMPihxnRmXcw&oh=9a0cbd3850ea55a6ee5c1fe2243dc866&oe=5B522266"/>
        </div>
      </Paper>
  <ApolloProvider client={client}>
    <Router>
      <Fragment>
        <nav className="pa3 pa4-ns">
          <div className="sexyflexy">
            <div>
           <FlatButton
            href="/"
            className="buttons"
            label="Big News!"/>
            </div>
            <div>
           <FlatButton
            href="/create"
            className="buttons"
            label="New Post"/>
           <FlatButton
            href="/drafts"
            className="buttons"
            label="Drafts"/>
            </div>
          </div>
        </nav>
        <div className="fl w-100 pl4 pr4">
          <Switch>
            <Route exact path="/" component={FeedPage} />
            <Route path="/drafts" component={DraftsPage} />
            <Route path="/create" component={CreatePage} />
            <Route path="/post/:id" component={DetailPage} />
          </Switch>
        </div>
      </Fragment>
    </Router>
  </ApolloProvider>
 </MuiThemeProvider>,
  document.getElementById('root'),
)
