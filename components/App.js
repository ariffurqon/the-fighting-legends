import React, { Component } from 'react'
import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom'
import Home from './Home'
import Films from './Films'
import Teams from './Teams'
import Navbar from './Navbar'


class App extends Component {
  render() {
    return (
      <Router>
      	<div>
      		<Navbar />

      		<Switch>
      		<Route path='/' exact component={Home} />
      		<Route path='/films' component={Films} />
      		<Route path='/teams' component={Teams} />
      		<Route render={ () => <h2 className='text-center'> ...oopsie! </h2>} />
      		</Switch>
      
      	</div>
      </Router>
    )
  }
}

export default App;
