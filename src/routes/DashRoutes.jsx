import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import NotFound from './NotFound'
// Admin Imports
import Dashboard from './Dashboard/AdminDash/AdminDashboard'
import Profile from './Dashboard/AdminDash/AdminProfile'
import Settings from './Dashboard/AdminDash/AdminSettings'
import Reports from './Dashboard/AdminDash/AdminReports'

// User Imports
import UserBoard from './Dashboard/UserDash/UserDashBoard'
import UserProfile from './Dashboard/UserDash/UserProfile'
import ExtraOne from './Dashboard/UserDash/UserExtraOne'
import ExtraTwo from './Dashboard/UserDash/UserExtraTwo'
import ContactAdmin from './Dashboard/UserDash/UserContactAdmin'


function DashRoutes() {
  const isAuth = true
  const isAdmin = true
  return isAuth ? (
    <>

      {isAdmin ? (
        <>
          <Switch>
            <Route exact path='/dash/admin' render={() => <Dashboard />} />
            <Route path='/dash/admin/settings' render={() => <Settings />} />
            <Route path='/dash/admin/profile' render={() => <Profile />} />
            <Route path='/dash/admin/reports' render={() => <Reports />} />
            <Route component={NotFound} />
          </Switch>
        </>
      ) : (
          <>
            <Switch>
              < Route exact path='/dash/user' render={() => <UserBoard />} />
              <Route path='/dash/user/myextra' render={() => <ExtraOne />} />
              <Route path='/dash/user/profile' render={() => <UserProfile />} />
              <Route path='/dash/user/contactadmin' render={() => <ContactAdmin />} />
              <Route path='/dash/user/buyextra' render={() => <ExtraTwo />} />
              <Route component={NotFound} />
            </Switch>
          </>
        )
      }


    </>
  ) : (
      <>
        <Redirect to="/login" />
      </>
    )
}

export default DashRoutes
