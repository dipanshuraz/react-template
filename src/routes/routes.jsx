import React from 'react'
import { Route, Switch } from 'react-router-dom'
import NavPublic from './NavPublic'
import Home from './Home'
import Extra from './Extra'
import Contact from './Contact'
import About from './About'
import Login from './Login'
import Register from './Register'
import NotFound from './NotFound'
import DashRoutes from './DashRoutes'
import NavBarAdmin from './Dashboard/AdminDash/NavBarAdmin'
import UserNav from './Dashboard/UserDash/UserNav'

function routes() {
  const isAuth = true
  const type = ""
  return (
    <>
      {isAuth ? (
        type === "user" ? <UserNav /> : <NavBarAdmin />) :
        (
          <NavPublic />
        )}
      <Switch>
        <Route exact path='/' render={() => <Home />} />
        <Route path='/dash' component={DashRoutes} />
        <Route path="/extra" render={() => <Extra />} />
        <Route path="/about" render={() => <About />} />
        <Route path="/contact" render={() => <Contact />} />
        <Route path="/login" render={() => <Login />} />
        <Route path="/register" render={() => <Register />} />
        <Route component={NotFound} />
      </Switch>
    </>
  )
}

export default routes
