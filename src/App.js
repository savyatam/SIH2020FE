import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom'
import UserForm from './UserForm.js';
import api1 from './api1.js';
import api2 from './api2.js';
import Home from './home.js'
import api3 from './api3.js';
import './App.css';


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
      <div>
      <Route exact path='/' component={Home}/>
      <Route path='/api' component={UserForm}/>
      <Route path='/api1' component={api1}/>
      <Route path='/api2' component={api2} />
      <Route path='/api3' component={api3} />
      </div>
      </BrowserRouter>
    );
  }
}
export default App;
