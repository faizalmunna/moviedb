import React from 'react'
import {
  HashRouter,
  Switch,
  Route
} from 'react-router-dom'
import Home from './pages/Home'
import Actors from './pages/Actors'
import MovieDetail from '../src/components/MovieDetails'
import ActorDetail from '../src/components/ActorDetail'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

import './App.css'
const App = () => {
  return (
    <div className='app'>
      <HashRouter>
      <Header/>
      <Switch>
      <Route  exact path="/">
      <Home/>
      </Route>
      <Route exact path="/actors">
      <Actors/>
      </Route>
      <Route exact path="/movie/:id" component={MovieDetail}>
      </Route>
      <Route exact path="/actors/:id" component={ActorDetail}>
      </Route>
      </Switch>
      <Footer />
      </HashRouter>
    </div>
  )
}
export default  App

