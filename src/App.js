import React from 'react';
import logo from './logo.svg';
import './App.css';
import routes from './routes/routes';
import { Route } from 'react-router-dom'

function App() {
  return <Route path='/' component={routes} />
}

export default App;
